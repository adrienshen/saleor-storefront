import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TypedCollectionProductsQuery } from "../../Collection/queries";
import Page from "./Page";

type ViewProps = RouteComponentProps<{ id: string }>;

const View: React.FC<ViewProps> = ({ match, history }) => {
  const variables = {
    "id": match.params.id,
  }

  return (
    <div className="home-page">
      <TypedCollectionProductsQuery errorPolicy="all" variables={variables}>
        {({ data }) => {
          console.log("data", data);
          return (
            <div>
              <Page history={history}/>
            </div>
          );
        }}
      </TypedCollectionProductsQuery>
    </div>
  )
};

export default View;
