import { Resolvers } from "../generated/graphqlgen";

import { Query } from "../generated/tmp-resolvers/Query";
import { Listing } from "../generated/tmp-resolvers/Listing";
import { User } from "../generated/tmp-resolvers/User";
import { Media } from "../generated/tmp-resolvers/Media";
import { Comment } from "../generated/tmp-resolvers/Comment";

export const resolvers: Resolvers = {
  Query,
  Listing,
  User,
  Media,
  Comment
};
