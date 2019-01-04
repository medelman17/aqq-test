// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { CommentResolvers } from "../graphqlgen";

export const Comment: CommentResolvers.Type = {
  ...CommentResolvers.defaultResolvers,

  listing: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  replies: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  photos: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  user: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
