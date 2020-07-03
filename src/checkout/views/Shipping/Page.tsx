import * as React from "react";

import { FormAddressType } from "../../../components";
import { CartLineInterface } from "../../../components/CartProvider/context";
import { maybe } from "../../../core/utils";
import { CartSummary, GuestAddressForm, Steps } from "../../components";
import { CheckoutStep } from "../../context";
import { ICheckoutData, ICheckoutUserArgs } from "../../types";
import { IShippingPageProps } from "./types";
import { createCheckoutMutation } from "@temp/@sdk/mutations/checkout";

import { withApollo } from "react-apollo";

import { CountryCode } from "types/globalTypes";
import { useLocalStorage } from "@temp/@next/hooks";

const computeCheckoutData = (
  data: FormAddressType,
  lines: CartLineInterface[],
  email?: string
): ICheckoutData => ({
  email: data.email || email,
  shippingAddress: {
    city: data.city,
    companyName: data.companyName,
    country: (data.country.value || data.country.code) as CountryCode,
    countryArea: data.countryArea,
    firstName: data.firstName,
    lastName: data.lastName,
    phone: data.phone,
    postalCode: data.postalCode,
    streetAddress1: data.streetAddress1,
    streetAddress2: data.streetAddress2,
  },
  ...(lines && {
    lines: lines.map(({ quantity, variantId }) => ({
      quantity,
      variantId,
    })),
  }),
});

const Page: React.FC<IShippingPageProps> = ({
  client,
  checkoutId,
  checkout,
  proceedToNextStepData,
  shop,
  user,
  lines,
  updateShippingAddress: [
    updateAddress,
    { loading: updateAddressLoading, error: updateAddressError },
  ],
}) => {
  const errors = maybe(() => updateAddressError.extraInfo.userInputErrors, []);
  const loading = updateAddressLoading;
  const email = maybe(() => user.email, null);

  const { storedValue: contactFields } = useLocalStorage("contactFields");

  const onSaveShippingAddressHandler = async (formData: FormAddressType) => {
    formData = {
      ...formData,
      firstName: contactFields.firstName,
      lastName: "",
      phone: contactFields.phone,
    };
    if (!checkoutId) {
      const data = computeCheckoutData(formData, lines);
      const result = await client.mutate({
        mutation: createCheckoutMutation,
        variables: {
          input: {
            email: contactFields.email,
            lines: data.lines,
            shippingAddress: data.shippingAddress,
          },
        },
      });

      return result && result.data;
    }
    const data = computeCheckoutData(formData, null, email);
    return updateAddress({
      checkoutId,
      email: contactFields.email,
      shippingAddress: data.shippingAddress,
    });
  };

  const onProceedToShippingSubmit = async (formData: FormAddressType) => {
    const { update, history, token } = proceedToNextStepData;

    const result = await onSaveShippingAddressHandler(formData);
    if (result) {
      await update({
        checkout: result?.checkoutCreate?.checkout || checkout,
        shippingAsBilling: maybe(() => formData.asBilling, false),
      });
    }
  };

  const getShippingProps = (userCheckoutData: ICheckoutUserArgs) => ({
    buttonText: "Next",
    errors,
    loading,
    proceedToNextStep: onProceedToShippingSubmit,
    ...userCheckoutData,
  });

  const shippingProps = getShippingProps({
    checkout,
    user,
  });
  return (
    <CartSummary checkout={checkout}>
      <div className="checkout-shipping">
        <Steps
          step={CheckoutStep.ShippingAddress}
          token={proceedToNextStepData.token}
          checkout={checkout}
        >
          <GuestAddressForm {...shippingProps} shop={shop} />
        </Steps>
      </div>
    </CartSummary>
  );
};

export default withApollo(Page);
