
import { Application } from "https://deno.land/x/oak/mod";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { applyGraphQL, gql } from "https://deno.land/x/oak_graphql/mod";
import {
    GraphQLScalarType,
    Kind,
  }  from "https://raw.githubusercontent.com/adelsz/graphql-deno/v15.0.0/mod";

export {
    Application,
    GraphQLScalarType,
    Kind,
    gql,
    applyGraphQL,
    config
}