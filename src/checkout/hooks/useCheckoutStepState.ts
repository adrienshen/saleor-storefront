import { useEffect, useState } from "react";

import { VariantsProducts_productVariants } from "@sdk/queries/types/VariantsProducts";

import { CardData } from "../types/CardData";
import { Checkout } from "../types/Checkout";

export enum CheckoutStep {
  // ContactDetails = 1,
  ShippingAddress = 1,
  ShippingOption,
  BillingAddress,
  Payment,
  Review,
}

export const useCheckoutStepState = (
  checkout: Checkout,
  variantsProducts: VariantsProducts_productVariants,
  cardData: CardData,
  dummyStatus: string
): CheckoutStep => {
  // const isShippingRequiredForProducts = () => {
  //   // Shipping is always required
  //   return true;
  // };

  const getStep = () => {
    // if (!checkout && variantsProducts && isShippingRequiredForProducts()) {
    //   return CheckoutStep.ShippingAddress;
    // } else if (!checkout && variantsProducts) {
    //   return CheckoutStep.BillingAddress;
    // } else if (!checkout) {
    //   return null;
    // }

    // const isShippingOptionStep =
    //   checkout.availableShippingMethods.length && !!checkout.shippingAddress;
    // const isBillingStep =
    //   (isShippingOptionStep && !!checkout.shippingMethod) ||
    //   !checkout.isShippingRequired;
    // const isPaymentStep = isBillingStep && !!checkout.billingAddress;
    // const isReviewStep = isPaymentStep && !!(cardData || dummyStatus);

    // if (isReviewStep) {
    //   return CheckoutStep.Review;
    // } else if (isPaymentStep) {
    //   return CheckoutStep.Payment;
    // } else if (isBillingStep) {
    //   return CheckoutStep.BillingAddress;
    // } else if (isShippingOptionStep) {
    //   return CheckoutStep.ShippingOption;
    // } else {
    //   return CheckoutStep.ShippingAddress;
    // }
    return 1;
  };

  const [step, setStep] = useState(getStep());

  useEffect(() => {
    const newStep = getStep();
    if (step !== newStep) {
      setStep(newStep);
    }
  }, [checkout, variantsProducts, cardData, dummyStatus]);

  return step;
};
