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
      <div className="info contact-info">
        <h3>Contact Information</h3>
        <div className="user-info">{fullName}</div>
        <div className="user-info">{email}</div>
        <div className="user-info">{phoneNumber}</div>
      </div>
      <div className="info address-info">
        <h3>Shipping & Billing</h3>
        <div className="user-info">{addressLineOne}</div>
        <div className="user-info">{addressLineTwo}</div>
        <div className="user-info">{addressLineThree}</div>
      </div>
      <div className="card-info">
        <h3>Card Details</h3>
        <div className="credit-card">
          <div className="credit-card__icon">
            <CreditCardIcon creditCardProvider="visa" />
          </div>
          <div className="credit-card__info">{creditCardEnding}</div>
        </div>
      </div>
    </div>
  );
};
