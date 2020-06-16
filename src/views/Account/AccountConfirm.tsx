import * as React from "react";
import { useAlert } from "react-alert";

import { StringParam, useQueryParams } from "use-query-params";

import { BASE_URL } from "../../core/config";

import { RouteComponentProps } from "react-router";
import { TypedAccountConfirmMutation } from "./queries";
import {
  AccountConfirm_accountConfirm_errors,
  IResult,
} from "./types/AccountConfirm";

import "./scss/index.scss";

const AccountConfirm: React.FC<RouteComponentProps> = ({ history }) => {
  const [query] = useQueryParams({
    email: StringParam,
    token: StringParam,
  });

  const alert = useAlert();

  const displayConfirmationAlert = (
    anyErrors: AccountConfirm_accountConfirm_errors[]
  ) => {
    alert.show(
      {
        content:
          anyErrors.length > 0
            ? anyErrors.map(error => error.message).join(" ")
            : "You can now log in",
        title: anyErrors.length > 0 ? "Error" : "Account confirmed",
      },
      { type: anyErrors.length > 0 ? "error" : "success", timeout: 5000 }
    );
  };

  React.useEffect(() => {
    this.accountManagerFn({
      variables: { email: query.email, token: query.token },
    })
      .then((result: IResult) => {
        const possibleErrors = result.data.confirmAccount.errors;
        displayConfirmationAlert(possibleErrors);
      })
      .catch(() => {
        const errors: any[] = [
          {
            message: "Something went wrong while activating your account.",
          },
        ];
        displayConfirmationAlert(errors);
      })
      .finally(() => {
        history.push(BASE_URL);
      });
  }, []);

  return (
    <TypedAccountConfirmMutation>
      {accountConfirm => {
        this.accountManagerFn = accountConfirm;
        return <div />;
      }}
    </TypedAccountConfirmMutation>
  );
};

export default AccountConfirm;
