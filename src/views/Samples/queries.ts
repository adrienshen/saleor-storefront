import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import {
  basicProductFragment,
  productPricingFragment,
} from "../Product/queries";
import {
  Collection,
  CollectionVariables,
} from "../Collection/types/Collection";

export const getAllSamples = gql`
  ${basicProductFragment}
  ${productPricingFragment}
  query Sample($after: String, $pageSize: Int, $catId: ID) {
    products(
      after: $after
      first: $pageSize
      filter: { categories: [$catId] }
    ) {
      totalCount
      edges {
        node {
          ...BasicProductFields
          ...ProductPricingField
          collections {
            id
            slug
          }
          category {
            id
            name
          }
        }
      }
    }
  }
`;

export const TypedAllSampleQuery = TypedQuery<Collection, CollectionVariables>(
  getAllSamples
);
