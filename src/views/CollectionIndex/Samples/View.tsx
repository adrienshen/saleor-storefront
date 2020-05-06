import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { TypedCollectionSampleQuery } from "./queries";
import Page from "./Page";

type ViewProps = RouteComponentProps<{ id: string }>;

const View: React.FC<ViewProps> = ({ match, history }) => {
  const variables = {
    "id": match.params.id,
    "pageSize": 2,
  }

  return (
    <div className="home-page">
      <TypedCollectionSampleQuery errorPolicy="all" variables={variables}>
        {({ data }) => {
          return (
            <div>
              <Page data={data} history={history}/>
            </div>
          );
        }}
      </TypedCollectionSampleQuery>
    </div>
  )
};

export default View;
