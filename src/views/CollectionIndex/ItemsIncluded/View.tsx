import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TypedCabinetCollectionProdductsQuery } from "./query";
import Page from "./Page";

type ViewProps = RouteComponentProps<{ id: string }>;

const View: React.FC<ViewProps> = ({ match, history }) => {
  return (
    <TypedCabinetCollectionProdductsQuery
      variables={{
        collectionId: [match.params.id],
      }}
    >
      {({ loading, data, error }) => {
        // console.log('DATA >> >> >> ', data);
        if (error) {
          console.warn("Error >> ", error);
          return null;
        }
        return (
          <div className="home-page">
            <Page products={data.products.edges} history={history} />
          </div>
        );
      }}
    </TypedCabinetCollectionProdductsQuery>
  );
};

export default View;
