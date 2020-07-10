import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { ReusableComponent } from "../ReusableComponent";
import { list } from "./mock";

type ViewProps = RouteComponentProps<{ id: string }>;

const View: React.FC<ViewProps> = ({ history }) => {
  return (
    <div className="home-page">
      <ReusableComponent
        history={history}
        header="Shipping & Return Policy"
        list={list}
      />
    </div>
  );
};

export default View;
