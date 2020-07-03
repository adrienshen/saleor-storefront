import * as React from "react";
import { generatePath, RouteComponentProps } from "react-router";

import { Money } from "@components/containers";

import { Button } from "../../../components";
import { CartSummary, Option, Steps } from "../../components";
import {
  CheckoutContext,
  CheckoutContextInterface,
  CheckoutStep,
} from "../../context";
import { billingUrl } from "../../routes";
import { TypedUpdateCheckoutShippingOptionsMutation } from "./queries";
import "./scss/index.scss";
import { updateCheckoutShippingOptions } from "./types/updateCheckoutShippingOptions";

class View extends React.Component<
  RouteComponentProps<{ token?: string }>,
  { selectedShipping: string }
> {
  state = { selectedShipping: "" };

  proceedToBilling(
    data: updateCheckoutShippingOptions,
    update: (checkoutData: CheckoutContextInterface) => void
  ) {
    const canProceed = !data.checkoutShippingMethodUpdate.errors.length;

    if (canProceed) {
      update({ checkout: data.checkoutShippingMethodUpdate.checkout });
    }
  }

  handleShippngChange = (shippingId: string) => {
    this.setState({ selectedShipping: shippingId });
  };

  render() {
    const { selectedShipping } = this.state;
    const {
      params: { token },
    } = this.props.match;

    return (
      <CheckoutContext.Consumer>
        {({ checkout, update }) => (
          <div className="checkout-shipping-options">
            <CartSummary checkout={checkout}>
              <Steps
                step={CheckoutStep.ShippingOption}
                token={token}
                checkout={checkout}
              >
                <ChooseShippingMethodContent
                  update={update}
                  token={token}
                  checkout={checkout}
                  selectedShipping={selectedShipping}
                  handleShippngChange={this.handleShippngChange}
                  proceedToBilling={this.proceedToBilling}
                  history={this.props.history}
                />
              </Steps>
            </CartSummary>
          </div>
        )}
      </CheckoutContext.Consumer>
    );
  }
}

function ChooseShippingMethodContent({
  update,
  token,
  checkout,
  selectedShipping,
  handleShippngChange,
  proceedToBilling,
  history,
}: any) {
  return (
    <>
      <TypedUpdateCheckoutShippingOptionsMutation
        onCompleted={data => {
          proceedToBilling(data, update, token);
          history.push(generatePath(billingUrl, { token }));
        }}
      >
        {(updateCheckoutShippingOptions, { loading }) => {
          const shippingMethods = checkout?.availableShippingMethods || [];
          return (
            <>
              <div className="checkout-shipping-options__form">
                {shippingMethods.map((method: any) => (
                  <Option
                    key={method.id}
                    selected={selectedShipping === method.id}
                    onSelect={() => handleShippngChange(method.id)}
                    value={method.id}
                    label={
                      <>
                        {`${method.name} | +`}
                        <Money defaultValue="0" money={method.price} />
                      </>
                    }
                  />
                ))}
              </div>
              <Button
                type="submit"
                onClick={event => {
                  updateCheckoutShippingOptions({
                    variables: {
                      checkoutId: checkout.id,
                      shippingMethodId: selectedShipping,
                    },
                  });
                  event.preventDefault();
                }}
                disabled={
                  loading ||
                  !checkout.availableShippingMethods.length ||
                  !selectedShipping
                }
              >
                {loading ? "Loading" : "Continue to billing"}
              </Button>
            </>
          );
        }}
      </TypedUpdateCheckoutShippingOptionsMutation>
    </>
  );
}

export default View;
