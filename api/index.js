import "./src/database.js"
import { startStandaloneServer } from "@apollo/server/standalone"
import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers } from "./src/graphql/index.js"
import 'dotenv/config'
import User from "./src/models/User.js";
import { AuthenticationError } from "apollo-server-express";
import jwt from "jsonwebtoken"

const { JWT_SECRET } = process.env

const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: error => {
    const message = error.message
    return {
      message,
      code: error.extensions.code,
      path: error.path,
    };
  }
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 3000 },
  introspection: true,
  context: async ({ req }) => {
    const auth = req.headers.authorization || ''

    if (auth) {
      try {
        const { id, email, exp } = jwt.verify(auth, JWT_SECRET)

        if (Date.now() >= exp * 1000) throw new AuthenticationError("Expired token!")

        const user = await User.findById(id)

        if (!user || email !== user.email) throw new AuthenticationError('Invalid token!')

        const currentUser = {
          id: user._id,
          email: user.email,
          username: user.username,
          slug: user.slug,
          photoURL: user.photoURL,
          coverPhoto: user.coverPhoto,
          github: user.github,
          linkedin: user.linkedin,
          portfolio: user.portfolio,
          bio: user.bio,
          location: user.location,
          // state: user.state,
        }
        return { currentUser }

      } catch (error) {
        throw new AuthenticationError("Invalid or expired token")
      }
    }
  },

})
console.log(`server ready at ${url}`)

