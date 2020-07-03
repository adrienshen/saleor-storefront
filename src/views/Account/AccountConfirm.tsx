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

let accountManagerFn: any;

const AccountConfirm: React.FC<RouteComponentProps> = ({ history }) => {
  const [query] = useQueryParams({
    email: StringParam,
    token: StringParam,
  });

  const alert = useAlert();

  const displayConfirmationAlert = (
    anyErrors: AccountConfirm_accountConfirm_errors[]
  ) => {
    const isError = anyErrors?.length > 0;
    alert.show(
      {
        content: isError
          ? anyErrors.map(error => error.message).join(" ")
          : "You can now log in",
        title: isError ? "Error" : "Account confirmed",
      },
      { type: isError ? "error" : "success", timeout: 5000 }
    );
  };

  React.useEffect(() => {
    accountManagerFn({
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
        accountManagerFn = accountConfirm;
        return <div />;
      }}
    </TypedAccountConfirmMutation>
  );
};

export default AccountConfirm;
