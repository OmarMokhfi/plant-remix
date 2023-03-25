import { gql } from "graphql-request";

export const GetPlantsQuery = gql`
  {
    plants {
      slug
      title
      description
      price
      images {
        id
        fileName
        url
      }
    }
  }
`;

export const GetLatestPlantsQuery = gql`
  {
    plants(first: 3) {
      slug
      title
      description
      images {
        id
        fileName
        url
      }
    }
  }
`;

export const GetPlantBySlug = gql`
  query PlantPageQuery($slug: String!) {
    plant(where: { slug: $slug }) {
      title
      description
      price
      slug
      images {
        id
        fileName
        url
      }
    }
  }
`;
