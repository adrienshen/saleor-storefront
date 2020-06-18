import urljoin from "url-join";

import { searchUrl } from "../../../app/routes";
import { ProductsList_shop } from "@temp/views/Home/types/ProductsList";

export const structuredData = (shop: ProductsList_shop) => {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    description: shop ? shop.description : "",
    name: shop ? shop.name : "",
    potentialAction: {
      "@type": "SearchAction",
      "query-input": "required name=q",
      target: urljoin(location.href, searchUrl, "?q={q}"),
    },
    url: location.href,
  });
};
