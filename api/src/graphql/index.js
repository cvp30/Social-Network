import { gql } from "apollo-server-express"
import { typeDefs as UserTypeDefs, resolvers as UserResolvers } from "./User.js"
import { typeDefs as FriendshipTypeDefs, resolvers as FriendshipResolvers } from "./Followers.js"
import { typeDefs as PostTypeDefs, resolvers as PostResolvers } from "./Post.js"

const RootTypedefs = gql`
  type Query{
        _:String
    }

    type Mutation{
        _:String
    }
`

export const typeDefs = [RootTypedefs, UserTypeDefs, FriendshipTypeDefs, PostTypeDefs]

export const resolvers = [UserResolvers, FriendshipResolvers, PostResolvers]