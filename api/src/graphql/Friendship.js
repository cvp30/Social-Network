import { gql } from "apollo-server-express";
import User from "../models/User.js";
import Friendship from "../models/Friendship.js";
import { AuthenticationError } from "apollo-server-express";

export const typedefs = gql`

  type User {
    _id: ID!
    username: String!
    bio: String
    photoURL: String
  }
  type Friendship {
    fromUser: ID!
    toUser: ID!
    status: String!
  }

  type FriendshipOutput {
    user: User!
    status: String!
  }

  extend type Query {
    GetUserFriendships: [User!]!
    GetAllFriendships: [FriendshipOutput!]!
  }

  extend type Mutation {
    CreateFriendship(
      id: ID!
    ): Friendship!

    AcceptFriendship (
      id: ID!
    ): Friendship!

    RejectFriendship (
      id: ID!
    ): Friendship!
  }
`

export const resolvers = {
  Query: {
    GetUserFriendships: async (_, __, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const userId = context.currentUser.id

        const friends = await Friendship.find({
          $or: [
            { fromUser: userId, status: "accepted" },
            { toUser: userId, status: "accepted" }
          ]
        }).populate({
          path: 'fromUser toUser',
          select: '_id username bio photoURL'
        })

        const outputFriends = friends.map(user => {
          return user.fromUser._id.toString() === userId.toString() ?
            user.toUser
            :
            user.fromUser
        })

        return outputFriends

      } catch (error) {
        throw new Error(error.message)
      }
    },
    GetAllFriendships: async (_, __, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const userId = context.currentUser.id

        const friends = await Friendship.find({
          $or: [
            { fromUser: userId },
            { toUser: userId }
          ]
        }).populate({
          path: 'fromUser toUser',
          select: '_id username bio photoURL'
        })

        const outputFriends = friends.map(user => {
          return user.fromUser._id.toString() === userId.toString() ?
            {
              user: user.toUser,
              status: user.status
            }
            :
            {
              user: user.fromUser,
              status: user.status
            }
        })
        console.log(outputFriends)

        return outputFriends

      } catch (error) {
        throw new Error(error.message)
      }
    }
  },

  Mutation: {
    CreateFriendship: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const fromUser = context.currentUser.id
        const toUser = args.id

        const existingFriendship = await Friendship.findOne({
          $or: [
            { fromUser, toUser },
            { fromUser: toUser, toUser: fromUser }
          ]
        })

        if (existingFriendship) throw new Error("There is already a friendship between users!")

        return await Friendship.create({
          fromUser,
          toUser
        })

      } catch (error) {
        throw new Error(error.message)
      }
    },
    AcceptFriendship: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const fromUser = context.currentUser.id
        const toUser = args.id

        return await Friendship.findOneAndUpdate(
          {
            $or: [
              { fromUser, toUser, status: "pending" },
              { fromUser: toUser, toUser: fromUser, status: "pending" }
            ]
          },
          {
            status: "accepted"
          },
          {
            new: true
          }
        )

      } catch (error) {
        throw new Error(error.message)
      }
    },
    RejectFriendship: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const fromUser = context.currentUser.id
        const toUser = args.id

        return await Friendship.findOneAndDelete(
          {
            $or: [
              { fromUser, toUser, status: "pending" },
              { fromUser: toUser, toUser: fromUser, status: "pending" }
            ]
          }
        )

      } catch (error) {
        throw new Error(error.message)
      }
    }
  }
}