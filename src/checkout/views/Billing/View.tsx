import * as React from "react";
import { RouteComponentProps } from "react-router";

import {
  useCreateCheckout,
  useUpdateCheckoutBillingAddress,
  useUserDetails,
} from "@sdk/react";

import { CartContext } from "../../../components/CartProvider/context";
import { ShopContext } from "../../../components/ShopProvider/context";
import { maybe } from "../../../core/utils";
import { CheckoutContext } from "../../context";
import Page from "./Page";

const View: React.FC<RouteComponentProps<{ token?: string }>> = ({
  history,
  match: {
    params: { token },
  },
}) => {
  const updateCheckoutBillingAddress = useUpdateCheckoutBillingAddress();

  const { data: user } = useUserDetails();

  const { update, checkout, shippingAsBilling } = React.useContext(
    CheckoutContext
  );
  const { lines: cardLines } = React.useContext(CartContext);
  const createCheckout = useCreateCheckout();

  return (
    <ShopContext.Consumer>
      {shop => (
        <Page
          isShippingRequired={true}
          shippingAsBilling={shippingAsBilling}
          checkoutId={maybe(() => checkout.id, null)}
          checkout={checkout}
          shop={shop}
          createCheckout={createCheckout}
          update={update}
          user={user}
          updateCheckoutBillingAddress={updateCheckoutBillingAddress}
          proceedToNextStepData={{
            history,
            token,
            update,
          }}
          lines={cardLines}
        />
      )}
    </ShopContext.Consumer>
  );
};

export default View;
