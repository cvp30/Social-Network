import User from "../models/User.js";
import { AuthenticationError, UserInputError, gql } from "apollo-server-express";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateToken.js";
import { generateSlug } from "../utils/generateLug.js";

export const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    slug: String!
    photoURL: String
    state: Boolean
  }

  type UserOutput {
    user: User!
    token: String!
  }

  extend type Query {
    GetProfile: User!
    GetUser(
      email: String!
    ): User!
    GetAllUsers: [User]
  }

  extend type Mutation {
    RegisterUser(
      email: String!
      username: String!
      password: String!
    ): UserOutput!

    LoginUser(
      email: String!
      password: String!
    ): UserOutput!
  }
`

export const resolvers = {
  Query: {
    GetProfile: async (_, args, context) => {

      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        return await context.currentUser

      } catch (error) {
        throw new Error(error.message)
      }
    },
    GetUser: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const { email } = args

        const user = await User.findOne({ email })

        if (!user) throw new UserInputError("Account doesn't exist!")

        return {
          id: user._id,
          email: user.email,
          username: user.username,
          slug: user.slug,
          photoURL: user.photoURL,
          state: user.state,
        }

      } catch (error) {
        throw new Error(error.message)
      }

    },
    GetAllUsers: async (_, args, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')
      try {
        return await User.find()
      } catch (error) {
        throw new Error(error.message)
      }
    }
  },

  Mutation: {
    RegisterUser: async (_, args) => {
      try {
        const { email, username, password } = args

        const userFound = await User.findOne({ email })

        if (userFound) throw new UserInputError("User already exist!")

        const encryptedPassword = await bcrypt.hash(password, 10)

        const [initialSlug,] = email.split('@');
        const slug = await generateSlug(initialSlug, User)

        const newUser = new User({
          email,
          username,
          password: encryptedPassword,
          slug
        })

        const res = await newUser.save()

        const token = generateToken(res)

        return {
          user: {
            id: res._id,
            email: res.email,
            username: res.username,
            slug: res.slug,
            photoURL: res.photoURL,
            state: res.state,
          },
          token,
        }
      } catch (error) {
        throw new Error(error.message)
      }
    },
    LoginUser: async (_, { email, password }) => {

      try {
        const userFound = await User.findOne({ email })

        if (!userFound) throw new UserInputError("Account doesn't exist!")

        const match = await bcrypt.compare(password, userFound.password)

        if (!match) throw new UserInputError("Incorrect password!")

        const token = generateToken(userFound)

        return {
          user: {
            id: userFound._id,
            email: userFound.email,
            username: userFound.username,
            slug: userFound.slug,
            photoURL: userFound.photoURL,
            state: userFound.state,
          },
          token,
        }
      } catch (error) {
        throw new Error(error.message)
      }

    }
  }
}