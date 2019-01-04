export const typeDefs = /* GraphQL */ `type AggregateComment {
  count: Int!
}

type AggregateListing {
  count: Int!
}

type AggregateMedia {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Comment {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
  listing: Listing!
  replies(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  photos(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Media!]
  user: User!
}

type CommentConnection {
  pageInfo: PageInfo!
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  text: String!
  listing: ListingCreateOneWithoutCommentsInput!
  replies: CommentCreateManyInput
  photos: MediaCreateManyInput
  user: UserCreateOneInput!
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateManyWithoutListingInput {
  create: [CommentCreateWithoutListingInput!]
  connect: [CommentWhereUniqueInput!]
}

input CommentCreateWithoutListingInput {
  text: String!
  replies: CommentCreateManyInput
  photos: MediaCreateManyInput
  user: UserCreateOneInput!
}

type CommentEdge {
  node: Comment!
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  text_ASC
  text_DESC
}

type CommentPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
}

input CommentScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  AND: [CommentScalarWhereInput!]
  OR: [CommentScalarWhereInput!]
  NOT: [CommentScalarWhereInput!]
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommentWhereInput
  AND: [CommentSubscriptionWhereInput!]
  OR: [CommentSubscriptionWhereInput!]
  NOT: [CommentSubscriptionWhereInput!]
}

input CommentUpdateDataInput {
  text: String
  listing: ListingUpdateOneRequiredWithoutCommentsInput
  replies: CommentUpdateManyInput
  photos: MediaUpdateManyInput
  user: UserUpdateOneRequiredInput
}

input CommentUpdateInput {
  text: String
  listing: ListingUpdateOneRequiredWithoutCommentsInput
  replies: CommentUpdateManyInput
  photos: MediaUpdateManyInput
  user: UserUpdateOneRequiredInput
}

input CommentUpdateManyDataInput {
  text: String
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  update: [CommentUpdateWithWhereUniqueNestedInput!]
  upsert: [CommentUpsertWithWhereUniqueNestedInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyMutationInput {
  text: String
}

input CommentUpdateManyWithoutListingInput {
  create: [CommentCreateWithoutListingInput!]
  delete: [CommentWhereUniqueInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueWithoutListingInput!]
  upsert: [CommentUpsertWithWhereUniqueWithoutListingInput!]
  deleteMany: [CommentScalarWhereInput!]
  updateMany: [CommentUpdateManyWithWhereNestedInput!]
}

input CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput!
  data: CommentUpdateManyDataInput!
}

input CommentUpdateWithoutListingDataInput {
  text: String
  replies: CommentUpdateManyInput
  photos: MediaUpdateManyInput
  user: UserUpdateOneRequiredInput
}

input CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateDataInput!
}

input CommentUpdateWithWhereUniqueWithoutListingInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateWithoutListingDataInput!
}

input CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentUpsertWithWhereUniqueWithoutListingInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateWithoutListingDataInput!
  create: CommentCreateWithoutListingInput!
}

input CommentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  listing: ListingWhereInput
  replies_every: CommentWhereInput
  replies_some: CommentWhereInput
  replies_none: CommentWhereInput
  photos_every: MediaWhereInput
  photos_some: MediaWhereInput
  photos_none: MediaWhereInput
  user: UserWhereInput
  AND: [CommentWhereInput!]
  OR: [CommentWhereInput!]
  NOT: [CommentWhereInput!]
}

input CommentWhereUniqueInput {
  id: ID
}

scalar DateTime

type Listing {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  price: String
  user: User!
  photos(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Media!]
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
}

type ListingConnection {
  pageInfo: PageInfo!
  edges: [ListingEdge]!
  aggregate: AggregateListing!
}

input ListingCreateInput {
  name: String!
  description: String
  price: String
  user: UserCreateOneWithoutListingsInput!
  photos: MediaCreateManyInput
  comments: CommentCreateManyWithoutListingInput
}

input ListingCreateManyWithoutUserInput {
  create: [ListingCreateWithoutUserInput!]
  connect: [ListingWhereUniqueInput!]
}

input ListingCreateOneWithoutCommentsInput {
  create: ListingCreateWithoutCommentsInput
  connect: ListingWhereUniqueInput
}

input ListingCreateWithoutCommentsInput {
  name: String!
  description: String
  price: String
  user: UserCreateOneWithoutListingsInput!
  photos: MediaCreateManyInput
}

input ListingCreateWithoutUserInput {
  name: String!
  description: String
  price: String
  photos: MediaCreateManyInput
  comments: CommentCreateManyWithoutListingInput
}

type ListingEdge {
  node: Listing!
  cursor: String!
}

enum ListingOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
}

type ListingPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  price: String
}

input ListingScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: String
  price_not: String
  price_in: [String!]
  price_not_in: [String!]
  price_lt: String
  price_lte: String
  price_gt: String
  price_gte: String
  price_contains: String
  price_not_contains: String
  price_starts_with: String
  price_not_starts_with: String
  price_ends_with: String
  price_not_ends_with: String
  AND: [ListingScalarWhereInput!]
  OR: [ListingScalarWhereInput!]
  NOT: [ListingScalarWhereInput!]
}

type ListingSubscriptionPayload {
  mutation: MutationType!
  node: Listing
  updatedFields: [String!]
  previousValues: ListingPreviousValues
}

input ListingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ListingWhereInput
  AND: [ListingSubscriptionWhereInput!]
  OR: [ListingSubscriptionWhereInput!]
  NOT: [ListingSubscriptionWhereInput!]
}

input ListingUpdateInput {
  name: String
  description: String
  price: String
  user: UserUpdateOneRequiredWithoutListingsInput
  photos: MediaUpdateManyInput
  comments: CommentUpdateManyWithoutListingInput
}

input ListingUpdateManyDataInput {
  name: String
  description: String
  price: String
}

input ListingUpdateManyMutationInput {
  name: String
  description: String
  price: String
}

input ListingUpdateManyWithoutUserInput {
  create: [ListingCreateWithoutUserInput!]
  delete: [ListingWhereUniqueInput!]
  connect: [ListingWhereUniqueInput!]
  disconnect: [ListingWhereUniqueInput!]
  update: [ListingUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [ListingUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [ListingScalarWhereInput!]
  updateMany: [ListingUpdateManyWithWhereNestedInput!]
}

input ListingUpdateManyWithWhereNestedInput {
  where: ListingScalarWhereInput!
  data: ListingUpdateManyDataInput!
}

input ListingUpdateOneRequiredWithoutCommentsInput {
  create: ListingCreateWithoutCommentsInput
  update: ListingUpdateWithoutCommentsDataInput
  upsert: ListingUpsertWithoutCommentsInput
  connect: ListingWhereUniqueInput
}

input ListingUpdateWithoutCommentsDataInput {
  name: String
  description: String
  price: String
  user: UserUpdateOneRequiredWithoutListingsInput
  photos: MediaUpdateManyInput
}

input ListingUpdateWithoutUserDataInput {
  name: String
  description: String
  price: String
  photos: MediaUpdateManyInput
  comments: CommentUpdateManyWithoutListingInput
}

input ListingUpdateWithWhereUniqueWithoutUserInput {
  where: ListingWhereUniqueInput!
  data: ListingUpdateWithoutUserDataInput!
}

input ListingUpsertWithoutCommentsInput {
  update: ListingUpdateWithoutCommentsDataInput!
  create: ListingCreateWithoutCommentsInput!
}

input ListingUpsertWithWhereUniqueWithoutUserInput {
  where: ListingWhereUniqueInput!
  update: ListingUpdateWithoutUserDataInput!
  create: ListingCreateWithoutUserInput!
}

input ListingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: String
  price_not: String
  price_in: [String!]
  price_not_in: [String!]
  price_lt: String
  price_lte: String
  price_gt: String
  price_gte: String
  price_contains: String
  price_not_contains: String
  price_starts_with: String
  price_not_starts_with: String
  price_ends_with: String
  price_not_ends_with: String
  user: UserWhereInput
  photos_every: MediaWhereInput
  photos_some: MediaWhereInput
  photos_none: MediaWhereInput
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  AND: [ListingWhereInput!]
  OR: [ListingWhereInput!]
  NOT: [ListingWhereInput!]
}

input ListingWhereUniqueInput {
  id: ID
}

scalar Long

type Media {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  localSource: String!
  uploadUri: String
  bucket: String
  key: String
  region: String
  user: User!
}

type MediaConnection {
  pageInfo: PageInfo!
  edges: [MediaEdge]!
  aggregate: AggregateMedia!
}

input MediaCreateInput {
  filename: String!
  localSource: String!
  uploadUri: String
  bucket: String
  key: String
  region: String
  user: UserCreateOneWithoutPhotoInput!
}

input MediaCreateManyInput {
  create: [MediaCreateInput!]
  connect: [MediaWhereUniqueInput!]
}

input MediaCreateOneWithoutUserInput {
  create: MediaCreateWithoutUserInput
  connect: MediaWhereUniqueInput
}

input MediaCreateWithoutUserInput {
  filename: String!
  localSource: String!
  uploadUri: String
  bucket: String
  key: String
  region: String
}

type MediaEdge {
  node: Media!
  cursor: String!
}

enum MediaOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  filename_ASC
  filename_DESC
  localSource_ASC
  localSource_DESC
  uploadUri_ASC
  uploadUri_DESC
  bucket_ASC
  bucket_DESC
  key_ASC
  key_DESC
  region_ASC
  region_DESC
}

type MediaPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  localSource: String!
  uploadUri: String
  bucket: String
  key: String
  region: String
}

input MediaScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  filename: String
  filename_not: String
  filename_in: [String!]
  filename_not_in: [String!]
  filename_lt: String
  filename_lte: String
  filename_gt: String
  filename_gte: String
  filename_contains: String
  filename_not_contains: String
  filename_starts_with: String
  filename_not_starts_with: String
  filename_ends_with: String
  filename_not_ends_with: String
  localSource: String
  localSource_not: String
  localSource_in: [String!]
  localSource_not_in: [String!]
  localSource_lt: String
  localSource_lte: String
  localSource_gt: String
  localSource_gte: String
  localSource_contains: String
  localSource_not_contains: String
  localSource_starts_with: String
  localSource_not_starts_with: String
  localSource_ends_with: String
  localSource_not_ends_with: String
  uploadUri: String
  uploadUri_not: String
  uploadUri_in: [String!]
  uploadUri_not_in: [String!]
  uploadUri_lt: String
  uploadUri_lte: String
  uploadUri_gt: String
  uploadUri_gte: String
  uploadUri_contains: String
  uploadUri_not_contains: String
  uploadUri_starts_with: String
  uploadUri_not_starts_with: String
  uploadUri_ends_with: String
  uploadUri_not_ends_with: String
  bucket: String
  bucket_not: String
  bucket_in: [String!]
  bucket_not_in: [String!]
  bucket_lt: String
  bucket_lte: String
  bucket_gt: String
  bucket_gte: String
  bucket_contains: String
  bucket_not_contains: String
  bucket_starts_with: String
  bucket_not_starts_with: String
  bucket_ends_with: String
  bucket_not_ends_with: String
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  region: String
  region_not: String
  region_in: [String!]
  region_not_in: [String!]
  region_lt: String
  region_lte: String
  region_gt: String
  region_gte: String
  region_contains: String
  region_not_contains: String
  region_starts_with: String
  region_not_starts_with: String
  region_ends_with: String
  region_not_ends_with: String
  AND: [MediaScalarWhereInput!]
  OR: [MediaScalarWhereInput!]
  NOT: [MediaScalarWhereInput!]
}

type MediaSubscriptionPayload {
  mutation: MutationType!
  node: Media
  updatedFields: [String!]
  previousValues: MediaPreviousValues
}

input MediaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MediaWhereInput
  AND: [MediaSubscriptionWhereInput!]
  OR: [MediaSubscriptionWhereInput!]
  NOT: [MediaSubscriptionWhereInput!]
}

input MediaUpdateDataInput {
  filename: String
  localSource: String
  uploadUri: String
  bucket: String
  key: String
  region: String
  user: UserUpdateOneRequiredWithoutPhotoInput
}

input MediaUpdateInput {
  filename: String
  localSource: String
  uploadUri: String
  bucket: String
  key: String
  region: String
  user: UserUpdateOneRequiredWithoutPhotoInput
}

input MediaUpdateManyDataInput {
  filename: String
  localSource: String
  uploadUri: String
  bucket: String
  key: String
  region: String
}

input MediaUpdateManyInput {
  create: [MediaCreateInput!]
  update: [MediaUpdateWithWhereUniqueNestedInput!]
  upsert: [MediaUpsertWithWhereUniqueNestedInput!]
  delete: [MediaWhereUniqueInput!]
  connect: [MediaWhereUniqueInput!]
  disconnect: [MediaWhereUniqueInput!]
  deleteMany: [MediaScalarWhereInput!]
  updateMany: [MediaUpdateManyWithWhereNestedInput!]
}

input MediaUpdateManyMutationInput {
  filename: String
  localSource: String
  uploadUri: String
  bucket: String
  key: String
  region: String
}

input MediaUpdateManyWithWhereNestedInput {
  where: MediaScalarWhereInput!
  data: MediaUpdateManyDataInput!
}

input MediaUpdateOneWithoutUserInput {
  create: MediaCreateWithoutUserInput
  update: MediaUpdateWithoutUserDataInput
  upsert: MediaUpsertWithoutUserInput
  delete: Boolean
  disconnect: Boolean
  connect: MediaWhereUniqueInput
}

input MediaUpdateWithoutUserDataInput {
  filename: String
  localSource: String
  uploadUri: String
  bucket: String
  key: String
  region: String
}

input MediaUpdateWithWhereUniqueNestedInput {
  where: MediaWhereUniqueInput!
  data: MediaUpdateDataInput!
}

input MediaUpsertWithoutUserInput {
  update: MediaUpdateWithoutUserDataInput!
  create: MediaCreateWithoutUserInput!
}

input MediaUpsertWithWhereUniqueNestedInput {
  where: MediaWhereUniqueInput!
  update: MediaUpdateDataInput!
  create: MediaCreateInput!
}

input MediaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  filename: String
  filename_not: String
  filename_in: [String!]
  filename_not_in: [String!]
  filename_lt: String
  filename_lte: String
  filename_gt: String
  filename_gte: String
  filename_contains: String
  filename_not_contains: String
  filename_starts_with: String
  filename_not_starts_with: String
  filename_ends_with: String
  filename_not_ends_with: String
  localSource: String
  localSource_not: String
  localSource_in: [String!]
  localSource_not_in: [String!]
  localSource_lt: String
  localSource_lte: String
  localSource_gt: String
  localSource_gte: String
  localSource_contains: String
  localSource_not_contains: String
  localSource_starts_with: String
  localSource_not_starts_with: String
  localSource_ends_with: String
  localSource_not_ends_with: String
  uploadUri: String
  uploadUri_not: String
  uploadUri_in: [String!]
  uploadUri_not_in: [String!]
  uploadUri_lt: String
  uploadUri_lte: String
  uploadUri_gt: String
  uploadUri_gte: String
  uploadUri_contains: String
  uploadUri_not_contains: String
  uploadUri_starts_with: String
  uploadUri_not_starts_with: String
  uploadUri_ends_with: String
  uploadUri_not_ends_with: String
  bucket: String
  bucket_not: String
  bucket_in: [String!]
  bucket_not_in: [String!]
  bucket_lt: String
  bucket_lte: String
  bucket_gt: String
  bucket_gte: String
  bucket_contains: String
  bucket_not_contains: String
  bucket_starts_with: String
  bucket_not_starts_with: String
  bucket_ends_with: String
  bucket_not_ends_with: String
  key: String
  key_not: String
  key_in: [String!]
  key_not_in: [String!]
  key_lt: String
  key_lte: String
  key_gt: String
  key_gte: String
  key_contains: String
  key_not_contains: String
  key_starts_with: String
  key_not_starts_with: String
  key_ends_with: String
  key_not_ends_with: String
  region: String
  region_not: String
  region_in: [String!]
  region_not_in: [String!]
  region_lt: String
  region_lte: String
  region_gt: String
  region_gte: String
  region_contains: String
  region_not_contains: String
  region_starts_with: String
  region_not_starts_with: String
  region_ends_with: String
  region_not_ends_with: String
  user: UserWhereInput
  AND: [MediaWhereInput!]
  OR: [MediaWhereInput!]
  NOT: [MediaWhereInput!]
}

input MediaWhereUniqueInput {
  id: ID
}

type Mutation {
  createComment(data: CommentCreateInput!): Comment!
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateManyComments(data: CommentUpdateManyMutationInput!, where: CommentWhereInput): BatchPayload!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  createListing(data: ListingCreateInput!): Listing!
  updateListing(data: ListingUpdateInput!, where: ListingWhereUniqueInput!): Listing
  updateManyListings(data: ListingUpdateManyMutationInput!, where: ListingWhereInput): BatchPayload!
  upsertListing(where: ListingWhereUniqueInput!, create: ListingCreateInput!, update: ListingUpdateInput!): Listing!
  deleteListing(where: ListingWhereUniqueInput!): Listing
  deleteManyListings(where: ListingWhereInput): BatchPayload!
  createMedia(data: MediaCreateInput!): Media!
  updateMedia(data: MediaUpdateInput!, where: MediaWhereUniqueInput!): Media
  updateManyMedias(data: MediaUpdateManyMutationInput!, where: MediaWhereInput): BatchPayload!
  upsertMedia(where: MediaWhereUniqueInput!, create: MediaCreateInput!, update: MediaUpdateInput!): Media!
  deleteMedia(where: MediaWhereUniqueInput!): Media
  deleteManyMedias(where: MediaWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  comment(where: CommentWhereUniqueInput!): Comment
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  listing(where: ListingWhereUniqueInput!): Listing
  listings(where: ListingWhereInput, orderBy: ListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Listing]!
  listingsConnection(where: ListingWhereInput, orderBy: ListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ListingConnection!
  media(where: MediaWhereUniqueInput!): Media
  medias(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Media]!
  mediasConnection(where: MediaWhereInput, orderBy: MediaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MediaConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  listing(where: ListingSubscriptionWhereInput): ListingSubscriptionPayload
  media(where: MediaSubscriptionWhereInput): MediaSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String
  lastName: String
  cognitoId: String!
  email: String!
  phone: String!
  listings(where: ListingWhereInput, orderBy: ListingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Listing!]
  photo: Media
  friends(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String
  lastName: String
  cognitoId: String!
  email: String!
  phone: String!
  listings: ListingCreateManyWithoutUserInput
  photo: MediaCreateOneWithoutUserInput
  friends: UserCreateManyInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutListingsInput {
  create: UserCreateWithoutListingsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPhotoInput {
  create: UserCreateWithoutPhotoInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutListingsInput {
  firstName: String
  lastName: String
  cognitoId: String!
  email: String!
  phone: String!
  photo: MediaCreateOneWithoutUserInput
  friends: UserCreateManyInput
}

input UserCreateWithoutPhotoInput {
  firstName: String
  lastName: String
  cognitoId: String!
  email: String!
  phone: String!
  listings: ListingCreateManyWithoutUserInput
  friends: UserCreateManyInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  cognitoId_ASC
  cognitoId_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  firstName: String
  lastName: String
  cognitoId: String!
  email: String!
  phone: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  cognitoId: String
  cognitoId_not: String
  cognitoId_in: [String!]
  cognitoId_not_in: [String!]
  cognitoId_lt: String
  cognitoId_lte: String
  cognitoId_gt: String
  cognitoId_gte: String
  cognitoId_contains: String
  cognitoId_not_contains: String
  cognitoId_starts_with: String
  cognitoId_not_starts_with: String
  cognitoId_ends_with: String
  cognitoId_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  firstName: String
  lastName: String
  cognitoId: String
  email: String
  phone: String
  listings: ListingUpdateManyWithoutUserInput
  photo: MediaUpdateOneWithoutUserInput
  friends: UserUpdateManyInput
}

input UserUpdateInput {
  firstName: String
  lastName: String
  cognitoId: String
  email: String
  phone: String
  listings: ListingUpdateManyWithoutUserInput
  photo: MediaUpdateOneWithoutUserInput
  friends: UserUpdateManyInput
}

input UserUpdateManyDataInput {
  firstName: String
  lastName: String
  cognitoId: String
  email: String
  phone: String
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  cognitoId: String
  email: String
  phone: String
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutListingsInput {
  create: UserCreateWithoutListingsInput
  update: UserUpdateWithoutListingsDataInput
  upsert: UserUpsertWithoutListingsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPhotoInput {
  create: UserCreateWithoutPhotoInput
  update: UserUpdateWithoutPhotoDataInput
  upsert: UserUpsertWithoutPhotoInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutListingsDataInput {
  firstName: String
  lastName: String
  cognitoId: String
  email: String
  phone: String
  photo: MediaUpdateOneWithoutUserInput
  friends: UserUpdateManyInput
}

input UserUpdateWithoutPhotoDataInput {
  firstName: String
  lastName: String
  cognitoId: String
  email: String
  phone: String
  listings: ListingUpdateManyWithoutUserInput
  friends: UserUpdateManyInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutListingsInput {
  update: UserUpdateWithoutListingsDataInput!
  create: UserCreateWithoutListingsInput!
}

input UserUpsertWithoutPhotoInput {
  update: UserUpdateWithoutPhotoDataInput!
  create: UserCreateWithoutPhotoInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  cognitoId: String
  cognitoId_not: String
  cognitoId_in: [String!]
  cognitoId_not_in: [String!]
  cognitoId_lt: String
  cognitoId_lte: String
  cognitoId_gt: String
  cognitoId_gte: String
  cognitoId_contains: String
  cognitoId_not_contains: String
  cognitoId_starts_with: String
  cognitoId_not_starts_with: String
  cognitoId_ends_with: String
  cognitoId_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  listings_every: ListingWhereInput
  listings_some: ListingWhereInput
  listings_none: ListingWhereInput
  photo: MediaWhereInput
  friends_every: UserWhereInput
  friends_some: UserWhereInput
  friends_none: UserWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  cognitoId: String
  email: String
}
`