import React from "react";
import { Button } from "@temp/components";
import { TextField } from "@components/molecules";
import ReactSVG from "react-svg";
import logo from "images/logo1.svg";
import eyeIcon from "images/baseline-lock.svg"
import PageHeader from "@temp/components/Header/PageHeader";
import "./scss/index.scss";

interface IPageProps {
  history: any;
}

const Page = (props: IPageProps) => {
  const loading = false;

  const handleOnSubmit =  (evt: React.FormEvent<any>) => {
    evt.preventDefault();
  };

  const handleBackButton =  () => {
    props.history.push('/landing')
  };

  return (
      <div className="sign-up">
        <PageHeader
          back={true}
          cart={false}
          search={false}
          handleClick={handleBackButton}
        />

        <ReactSVG
          path={logo}
          className="logo"
        />
        <form onSubmit={handleOnSubmit}>
          <TextField
            name="fullName"
            label="Full Name"
            type="text"
            value=""
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            value=""
          />
          <div className="password">
            <TextField
              name="password"
              label="Password"
              type="password"
              value=""
            >
            </TextField>
            <ReactSVG className="eye-icon"
              path={eyeIcon}
            />
          </div>
          <div className="confirm-password">
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value=""
            />
            <ReactSVG  className="eye-icon"
              path={eyeIcon}
            />
          </div>
          <div className="sign-up__button">
            <Button type="submit" {...(loading && { disabled: true })}>
              {loading ? "Loading" : "Sign In"}
            </Button>
          </div>
          <div className="term-condition">
            <p>By signing up you agree with our</p>
            <p>Terms and Conditions</p>
            </div>
        </form>
      </div>
  );
};

export default Page;
