import { gql } from "apollo-server-express"
import { typeDefs as UserTypeDefs, resolvers as UserResolvers } from "./User.js"
import { typeDefs as FriendshipTypeDefs, resolvers as FriendshipResolvers } from "./Followers.js"
const RootTypedefs = gql`
  type Query{
        _:String
    }

    type Mutation{
        _:String
    }
`

export const typeDefs = [RootTypedefs, UserTypeDefs, FriendshipTypeDefs]

export const resolvers = [UserResolvers, FriendshipResolvers]