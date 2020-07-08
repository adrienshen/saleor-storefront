import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Page from "./Page";

type ViewProps = RouteComponentProps<{ id: string }>;

const View: React.FC<ViewProps> = ({ history }) => {
  return (
    <div className="home-page">
      <Page history={history} />
    </div>
  );
};

export default View;
