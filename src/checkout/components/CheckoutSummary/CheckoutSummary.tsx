import * as React from "react";
import { IProps } from "./types";
import { CreditCardIcon } from "@components/atoms";
import "./scss/index.scss";

export const CheckoutSummary: React.FC<IProps> = ({
  fullName,
  email,
  phoneNumber,
  addressLineOne,
  addressLineTwo,
  addressLineThree,
  creditCardEnding,
}: IProps) => {
  return (
    <div className="checkout-summary">
      <div className="contact-info">
        <h3>Contact Information</h3>
        <div>{fullName}</div>
        <div>{email}</div>
        <div>{phoneNumber}</div>
      </div>
      <div className="address-info">
        <h3>Shipping & Billing</h3>
        <div>{addressLineOne}</div>
        <div>{addressLineTwo}</div>
        <div>{addressLineThree}</div>
      </div>
      <div className="card-info">
        <h3>Card Details</h3>
        <div>
          {" "}
          <CreditCardIcon creditCardProvider="visa" />
          {creditCardEnding}
        </div>
      </div>
    </div>
  );
};
