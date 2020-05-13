import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TypedCollectionSampleQuery } from "./queries";
import { PRODUCTS_PER_PAGE } from "../../../core/config";
import Page from "./Page";

type ViewProps = RouteComponentProps<{ id: string }>;

const STATIC_CAT_SAMPLE_ID = "Q2F0ZWdvcnk6MjM=";

const View: React.FC<ViewProps> = ({ match, history }) => {
  const variables = {
    catId: STATIC_CAT_SAMPLE_ID,
    id: match.params.id,
    pageSize: PRODUCTS_PER_PAGE,
  };

  return (
    <div className="home-page">
      <TypedCollectionSampleQuery errorPolicy="all" variables={variables}>
        {({ data }) => {
          return (
            <div>
              <Page
                data={data}
                history={history}
                collectionId={match.params.id}
              />
            </div>
          );
        }}
      </TypedCollectionSampleQuery>
    </div>
  );
};

export default View;
