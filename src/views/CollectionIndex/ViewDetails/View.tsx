import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TypedCollectionSlugQuery } from "../queries";
import Page from "./Page";

type ViewProps = RouteComponentProps<{ id: string }>;

const View: React.FC<ViewProps> = ({ match, history }) => {
  const variables = {
    id: match.params.id,
  };

  return (
    <TypedCollectionSlugQuery errorPolicy="all" variables={variables}>
      {({ data }) => {
        return (
          <div className="home-page">
            <div>
              <Page history={history} data={data} />
            </div>
          </div>
        );
      }}
    </TypedCollectionSlugQuery>
  );
};

export default View;
