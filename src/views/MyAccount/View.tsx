import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Page from "./Page";

type ViewProps = RouteComponentProps<{ id: string }>;

export const View: React.FC<ViewProps> = ({ history }) => {
  return (
    <div className="home-page">
      <div>
        <Page history={history} />
      </div>
    </div>
  );
};

export default View;
