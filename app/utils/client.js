import { GraphQLClient } from "graphql-request";

const BACKEND_URL =
  process.env.GRAPHCMS_API ||
  "https://api-eu-central-1.graphcms.com/v2/cl52w2x0x2jfp01ugeue2hw1b/master";

export const graphcms = new GraphQLClient(BACKEND_URL);
