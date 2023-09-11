import { UserInputError, gql } from "apollo-server-express";
import Followers from "../models/Followers.js";
import User from "../models/User.js";

export const typeDefs = gql`
  scalar Date

  type User {
    email: String!
    username: String!
    slug: String!
    photoURL: String
  }

  type Followers {
    id: ID!
    follower: User!
    date: Date!
  }

  type Following {
    id: ID!
    following: User!
    date: Date!
  }

  extend type Query {
    GetFollowersList: [Followers!]!
    GetFollowingList: [Following!]!
  }

  extend type Mutation {
    FollowUser(
      following: ID!
    ): Boolean!

    UnfollowUser(
      following: ID!
    ): Boolean!
  }  
`

export const resolvers = {
  Query: {
    GetFollowersList: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const userId = context.currentUser.id

        return await Followers.find({
          following: userId
        })
          .select('follower date')
          .populate('follower')
          .lean()
          .exec()
      } catch (error) {
        throw new Error(error.message)
      }
    },
    GetFollowingList: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const userId = context.currentUser.id

        return await Followers.find({
          follower: userId
        })
          .select('following date')
          .populate('following')
          .lean()
          .exec()
      } catch (error) {
        throw new Error(error.message)
      }
    }
  },

  Mutation: {
    FollowUser: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const userId = context.currentUser.id
        const userIdFollowing = args.following

        const userFollowingExist = await User.findById(userIdFollowing)

        if (!userFollowingExist) throw UserInputError('User Id does not exist!')

        const followItem = await Followers.findOne({
          $and: [
            { follower: userId },
            { following: userIdFollowing }
          ]
        })

        if (followItem) throw new Error("Ya sigues a este usuario!")

        const newFollow = await Followers.create({
          follower: userId,
          following: args.following
        })

        return Boolean(newFollow)

      } catch (error) {
        throw new Error(error.message)
      }
    },
    UnfollowUser: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const userId = context.currentUser.id
        const userIdFollowing = args.following

        const removeFollow = await Followers.findOneAndRemove({
          $and: [
            { follower: userId },
            { following: userIdFollowing }
          ]
        })

        if (removeFollow) return true

        return false

      } catch (error) {
        throw new Error(error.message)
      }
    }
  }
}