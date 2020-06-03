import React from "react";
import { storiesOf } from "@storybook/react";
import { CheckoutSummary } from ".";

const DEFAULT_PROPS = {
  fullName: "Mark Watson",
  email: "markw@email.com",
  phoneNumber: "+123456789",
  addressLineOne: "Some Street 13,San Francisco",
  addressLineTwo: "22132 CA",
  addressLineThree: "USA",
  creditCardEnding: "Visa Card ending **00",
};

storiesOf("@components/checkout/CheckoutSummary", module)
  .addParameters({ component: CheckoutSummary })
  .add("default", () => (
    <div style={{ width: "400px" }}>
      <CheckoutSummary {...DEFAULT_PROPS} />
    </div>
  ));
