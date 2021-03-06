import PostModel from '../../models/post'
import { postType } from './post'
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInputObjectType,
} from 'graphql'

export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'User api',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    posts: {
      type: new GraphQLList(postType),
      resolve(user) {
        const { _id } = user
        return PostModel.find({ uid: _id }).exec()
      }
    }
  })
})

export const userInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Insert User',
  fields: () => ({
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  })
})
