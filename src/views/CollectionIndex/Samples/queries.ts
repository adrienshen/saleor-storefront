import gql from "graphql-tag";

import { TypedQuery } from "../../../core/queries";
import { basicProductFragment, productPricingFragment } from "../../Product/queries";
import { Collection, CollectionVariables } from "../../Collection/types/Collection";

export const collectionSampleQuery = gql`
  ${basicProductFragment}
  ${productPricingFragment}
  query Collection(
    $id: ID!
    $after: String
    $pageSize: Int
  ) {
    collection(id: $id) {
      id
      slug
      name
      seoDescription
      seoTitle
      backgroundImage {
        url
      }
    }
    products(
      after: $after
      first: $pageSize
      filter: {
        collections: [$id]
      }
    ) {
      totalCount
      edges {
        node {
          ...BasicProductFields
          ...ProductPricingField
          category {
            id
            name
          }
        }
      }      
    }    
  }
`;

export const TypedCollectionSampleQuery = TypedQuery<
  Collection,
  CollectionVariables
  >(collectionSampleQuery);
