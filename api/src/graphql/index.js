import { gql } from "apollo-server-express"
import { typeDefs as UserTypeDefs, resolvers as UserResolvers } from "./User.js"
import { typeDefs as FollowersTypeDefs, resolvers as FollowersResolvers } from "./Followers.js"
import { typeDefs as PostTypeDefs, resolvers as PostResolvers } from "./Post.js"
import { typedefs as FriendshipTypedefs, resolvers as FriendshipResolvers } from "./Friendship.js"

const RootTypedefs = gql`
  type Query{
        _:String
    }

    type Mutation{
        _:String
    }
`

export const typeDefs = [RootTypedefs, UserTypeDefs, FollowersTypeDefs, PostTypeDefs, FriendshipTypedefs]

export const resolvers = [UserResolvers, FollowersResolvers, PostResolvers, FriendshipResolvers]