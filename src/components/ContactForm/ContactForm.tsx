import "./scss/index.scss";

// import classNames from "classnames";
import * as React from "react";

import { Form, TextField } from "..";
// import { FormAddressType, IShippingAddressFormProps } from "./types";

import { CheckoutNextButton } from "../Button";

const ContactForm: React.FC<any> = ({
  data,
  buttonText,
  errors,
  loading,
  onSubmit,
  children,
  shippingAsBilling = false,
  noShipping = false,
  type = "shipping",
}) => (
  <div className="address-form">
    <Form<any>
      errors={errors}
      onSubmit={(evt, data) => {
        evt.preventDefault();
        // onSubmit(data);
        console.log('Submitting...');
      }}
      data={null}
    >
      {children}
      <fieldset className="form-fieldset">
        <TextField
          label="First Name"
          type="given-name"
          name="firstName"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last Name"
          type="family-name"
          name="lastName"
          autoComplete="family-name"
          required
        />
        <TextField
          label="Phone"
          type="phone"
          name="phone"
          autoComplete="phone"
          required
        />
        <TextField
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </fieldset>
      <CheckoutNextButton className="btn-checkout-continue" type="submit" disabled={loading}>
        {loading ? "Loading" : buttonText}
      </CheckoutNextButton>
    </Form>
  </div>
);

export default ContactForm;
