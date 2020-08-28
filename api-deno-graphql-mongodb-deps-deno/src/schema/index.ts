import { gql } from "../config/deps";
import { UserTypes } from "./user";
import { AuthorTypes } from "./author";


export const Schema = (gql as any)`
    type Query{
        _empty: String
    }
    type Mutation {
        _empty: String
    }
    ${UserTypes}
    ${AuthorTypes}
`;