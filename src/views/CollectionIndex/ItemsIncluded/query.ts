import gql from "graphql-tag";

import { TypedQuery } from "../../../core/queries";
import {
  ProductDetails,
  ProductDetailsVariables,
} from "../../Product/types/ProductDetails";
import {
  VariantList,
  VariantListVariables,
} from "../../Product/types/VariantList";

export const priceFragment = gql`
  fragment Price on TaxedMoney {
    gross {
      amount
      currency
    }
    net {
      amount
      currency
    }
  }
`;

export const basicProductFragment = gql`
  fragment BasicProductFields on Product {
    id
    name
    thumbnail {
      url
      alt
    }
    thumbnail2x: thumbnail(size: 510) {
      url
    }
  }
`;

export const productPricingFragment = gql`
  ${priceFragment}
  fragment ProductPricingField on Product {
    pricing {
      onSale
      priceRangeUndiscounted {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
      priceRange {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
    }
  }
`;

export const selectedAttributeFragment = gql`
  fragment SelectedAttributeFields on SelectedAttribute {
    attribute {
      id
      name
    }
    values {
      id
      name
    }
  }
`;

export const productVariantFragment = gql`
  ${priceFragment}
  fragment ProductVariantFields on ProductVariant {
    id
    sku
    name
    stockQuantity
    isAvailable
    images {
      id
      url
      alt
    }
    pricing {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...Price
      }
    }
    attributes {
      attribute {
        id
        name
      }
      values {
        id
        name
        value: name
      }
    }
  }
`;

export const cabinetCollectionProductsQuery = gql`
  ${basicProductFragment}
  ${selectedAttributeFragment}
  ${productVariantFragment}
  ${productPricingFragment}
  query ProductDetails($collectionId: ID!) {
    products(first: 10, filter: { collections: [$collectionId] }) {
      totalCount
      edges {
        node {
          ...BasicProductFields
          ...ProductPricingField
          images {
            id
            url
          }
          attributes {
            ...SelectedAttributeFields
          }
          variants {
            ...ProductVariantFields
          }
          seoDescription
          seoTitle
          isAvailable
        }
      }
    }
  }
`;

// FIXME: Check how to handle pagination of `productVariants` in the UI.
// We need allow the user view  all cart items regardless of pagination.
// export const productVariantsQuery = gql`
//   ${basicProductFragment}
//   ${productVariantFragment}
//   query VariantList($ids: [ID!]) {
//     productVariants(ids: $ids, first: 100) {
//       edges {
//         node {
//           ...ProductVariantFields
//           stockQuantity
//           product {
//             ...BasicProductFields
//           }
//         }
//       }
//     }
//   }
// `;

interface IVariables {
  collectionId: [string];
}

interface IData {
  products: any | null;
}

export const TypedCabinetCollectionProdductsQuery = TypedQuery<
  IData,
  IVariables
>(cabinetCollectionProductsQuery);

// export const TypedProductVariantsQuery = TypedQuery<
//   VariantList,
//   VariantListVariables
// >(productVariantsQuery);
