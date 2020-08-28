export * from './user';
import { UserResolvers } from "./user";
import { AuthorResolvers } from "./author";

export const resolvers = [ UserResolvers, AuthorResolvers ];
