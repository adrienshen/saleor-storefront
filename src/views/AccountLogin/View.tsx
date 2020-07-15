import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Page from "./Page";

type ViewProps = RouteComponentProps<{ slug: string }>;

export const View: React.FC<ViewProps> = ({
  match: {
    params: {},
  },
  history,
}) => (
  <div className="login-page">
    <Page history={history} />;
  </div>
);

export default View;
