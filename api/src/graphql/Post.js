import { UserInputError, gql } from "apollo-server-express";
import Post from "../models/Post.js";
import User from "../models/User.js";

export const typeDefs = gql`
  scalar Date

  enum PRIVACY {
    PUBLIC
    FOLLOWERS
  }

  type User {
    id: ID!
    slug: String!
    email: String!
    photoURL: String
  }

  input CreatePostInput {
    userId: ID!
    content: String
    image: String
    privacy: PRIVACY!
  }

  type Post {
    id: ID!
    userId: User!
    content: String
    image: String
    createdAt: Date!
    likes: [User!]!
    shares: [User!]!
    privacy: String!
  }

  extend type Query {
    GetPostsFromUser(
      slug: String!
    ): [Post!]!

    GetAllPosts: [Post!]!
  }

  extend type Mutation {
    CreatePost(
      content: String
      image: String
      privacy: PRIVACY!
    ): Post!

    DeletePost(
      id: ID!
    ): Boolean!
  }
`

export const resolvers = {
  Query: {
    GetPostsFromUser: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const { slug } = args;
        const user = await User.findOne({ slug })

        if (!user) throw new UserInputError("Account doesn't exist!")

        return await Post.find({
          "userId": user.id
        })
          .populate("userId")

      } catch (error) {
        throw new Error(error.message)
      }
    },
    GetAllPosts: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        return await Post.find()
          .populate("userId")
          .sort({ createdAt: -1 })
      } catch (error) {
        throw new Error(error.message)
      }
    }
  },

  Mutation: {
    CreatePost: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const userId = context.currentUser.id
        const newInput = { ...args, userId }

        return (await Post.create(newInput)).populate("userId")
      } catch (error) {
        throw new Error(error.message)
      }
    },
    DeletePost: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const id = args.id

        const postDeleted = await Post.deleteOne({ _id: id })
        // console.log(postDeleted)
        return postDeleted.deletedCount === 1
      } catch (error) {

      }
    }
  }
}