import "./scss/index.scss";
import OrderPage from "@temp/userAccount/views/OrderDetails/Orderpage";

import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Loader } from "@components/atoms";
import { useOrderDetails, useUserDetails } from "@sdk/react";

import Page from "./Page";

const View: React.FC<RouteComponentProps<{ token?: string }>> = ({
  match: {
    params: { token },
  },
}) => {
  const { data: order, loading } = useOrderDetails({ token });
  const { data: user } = useUserDetails();
  const guest = !user;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="order-details">
      {/*<Page guest={guest} order={order} />*/}
      <OrderPage />
    </div>
  );
};

export default View;
