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
    coverPhoto: String
    github: String
    linkedin: String
    portfolio: String
    bio: String
    location: String
  }
  input ProfileData {
    username: String
    github: String
    linkedin: String
    portfolio: String
    photoURL: String
    coverPhoto: String
    bio: String
    location: String
  }

  type UserOutput {
    user: User!
    token: String!
  }

  extend type Query {
    GetProfile: User!
    GetUser(
      slug: String!
    ): User!
    GetAllUsers: [User!]!
    GetRandomUser: User!
  }

  extend type Mutation {
    RegisterUser(
      email: String!
      username: String!
      password: String!
    ): UserOutput!
    RegisterUsers: Boolean!

    LoginUser(
      email: String!
      password: String!
    ): UserOutput!

    UpdateProfile(
      input: ProfileData
    ): User!

    UpdatePassword(
      newPassword: String!
    ): Boolean!
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
      // if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const { slug } = args

        const user = await User.findOne({ slug })

        if (!user) throw new UserInputError("Account doesn't exist!")

        return user

      } catch (error) {
        throw new Error(error.message)
      }

    },
    GetAllUsers: async (_, args, context) => {
      // if (!context.currentUser) throw new AuthenticationError('Not Authenticated')
      try {
        // const userId = context.currentUser.id

        return await User.find({
          // _id: {
          //   $ne: userId
          // }
        })
      } catch (error) {
        throw new Error(error.message)
      }
    },
    GetRandomUser: async (_, args, context) => {
      // if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      const randomNumber = seedRando
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
    RegisterUsers: async (_, args) => {
      photoURL = ""
      coverPhoto = ""
      const users = [
        {
          email: "user1@example.com",
          password: "pass1",
          username: "user1",
          slug: "user1slug",
          location: "New York",
          photoURL,
          coverPhoto,
        },
        {
          email: "user2@example.com",
          password: "pass2",
          username: "user2",
          slug: "user2slug",
          location: "London",
          photoURL,
          coverPhoto,
        },
        {
          email: "user3@example.com",
          password: "pass3",
          username: "user3",
          slug: "user3slug",
          location: "Tokyo",
          photoURL,
          coverPhoto,
        },
        {
          email: "user4@example.com",
          password: "pass4",
          username: "user4",
          slug: "user4slug",
          location: "Paris",
          photoURL,
          coverPhoto,
        },
        {
          email: "user5@example.com",
          password: "pass5",
          username: "user5",
          slug: "user5slug",
          location: "Sydney",
          photoURL,
          coverPhoto,
        },
        {
          email: "user6@example.com",
          password: "pass6",
          username: "user6",
          slug: "user6slug",
          location: "Berlin",
          photoURL,
          coverPhoto,
        },
        {
          email: "user7@example.com",
          password: "pass7",
          username: "user7",
          slug: "user7slug",
          location: "Moscow",
          photoURL,
          coverPhoto,
        },
        {
          email: "user8@example.com",
          password: "pass8",
          username: "user8",
          slug: "user8slug",
          location: "Rome",
          photoURL,
          coverPhoto,
        },
        {
          email: "user9@example.com",
          password: "pass9",
          username: "user9",
          slug: "user9slug",
          location: "Cairo",
          photoURL,
          coverPhoto,
        },
        {
          email: "user10@example.com",
          password: "pass10",
          username: "user10",
          slug: "user10slug",
          location: "Beijing",
          photoURL,
          coverPhoto,
        }
      ]
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

    },
    UpdateProfile: async (_, { input }, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const userId = context.currentUser.id

        return await User.findOneAndUpdate(
          {
            _id: userId
          },
          {
            $set: input
          },
          {
            new: true
          }
        )
      } catch (error) {
        throw new Error(error.message)
      }
    },
    UpdatePassword: async (_, { newPassword }, context) => {
      if (!context.currentUser) throw new AuthenticationError('Not Authenticated')

      try {
        const userId = context.currentUser.id

        const result = await User.findOneAndUpdate(
          {
            _id: userId
          },
          {
            $set: { password: newPassword }
          },
          {
            new: true
          }
        )

        return result !== null
      } catch (error) {
        throw new Error(error.message)
      }
    }
  }
}