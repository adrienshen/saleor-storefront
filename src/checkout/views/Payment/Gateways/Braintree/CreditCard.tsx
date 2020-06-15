import React from "react";

import { CreditCardForm } from "@components/organisms";

import { PROVIDERS } from "@temp/core/config";
import {
  braintreePayment,
  ErrorData,
  IPaymentCardError,
  PaymentData,
} from "@temp/core/payments/braintree";
import { maybe, removeEmptySpaces } from "@temp/core/utils";
import { ICardErrors, ICardInputs } from "src/core/payments/braintree";

import { ProviderProps } from "../../View";

const INITIAL_CARD_ERROR_STATE = {
  fieldErrors: {
    cvv: null,
    expirationMonth: null,
    expirationYear: null,
    number: null,
  } as ICardErrors,
  nonFieldError: "",
};

const CreditCard = ({
  checkout: {
    update,
    checkout: {
      billingAddress: { postalCode },
    },
  },
  formRef,
  loading,
  setLoadingState,
  paymentGatewayConfig,
  processPayment,
}: ProviderProps) => {
  {
    const [cardErrors, setCardErrors] = React.useState<ErrorData>(
      INITIAL_CARD_ERROR_STATE
    );

    const setCardErrorsHelper = (errors: IPaymentCardError[]) =>
      errors.map(({ field, message }: IPaymentCardError) =>
        setCardErrors(({ fieldErrors }) => ({
          fieldErrors: {
            ...fieldErrors,
            [field]: { field, message },
          },
        }))
      );

    const tokenizeCcCard = async (creditCard: any) => {
      setCardErrors(INITIAL_CARD_ERROR_STATE);
      try {
        const cardData = (await braintreePayment(
          paymentGatewayConfig.find(({ field }) => field === "client_token")
            .value,
          creditCard
        )) as PaymentData;
        await update({ cardData });
        return cardData.token;
      } catch (errors) {
        setCardErrorsHelper(errors);
        return null;
      }
    };

    const handleSubmit = async (formData: ICardInputs) => {
      setLoadingState(true);
      const creditCard = {
        billingAddress: { postalCode },
        cvv: removeEmptySpaces(maybe(() => formData.ccCsc, "")),
        expirationDate: removeEmptySpaces(maybe(() => formData.ccExp, "")),
        number: removeEmptySpaces(maybe(() => formData.ccNumber, "")),
      };
      const token = await tokenizeCcCard(creditCard);
      processPayment(token, PROVIDERS.BRAINTREE.label);
      setLoadingState(false);
    };

    return (
      <CreditCardForm
        formRef={formRef}
        cardErrors={cardErrors.fieldErrors}
        labelsText={{
          ccCsc: "CVC",
          ccExp: "ExpiryDate",
          ccNumber: "Number",
        }}
        disabled={loading}
        handleSubmit={handleSubmit}
      />
    );
  }
};

export default CreditCard;
