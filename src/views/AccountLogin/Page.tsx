// @ts-nocheck
import React, { useState } from "react";
import "./scss/index.scss";
import { Button } from "@temp/components";
import ReactSVG from "react-svg";
import logo from "images/logo1.svg";
import { TextField } from "@components/molecules";
import eyeIcon from "images/baseline-lock.svg";
import ToggleIcon from "images/toggle.svg";

interface IPageProps {
  history: any;
}

const Page = (props: IPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = false;

  const handleOnSubmit = async (evt: React.FormEvent<any>) => {
    props.history.push("/");
    evt.preventDefault();
  }

  return (
    <div className="sign-up">
      <ReactSVG
        path={logo}
        className="logo"
      />
      <form onSubmit={handleOnSubmit}>
        <TextField
          name="email"
          label="Email"
          type="email"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <div className="password">
          <TextField
            name="password"
            label="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          >
          </TextField>
          <ReactSVG className="eye-icon"
            path={eyeIcon}
          />
        </div>
        <div className="forgot-pass">Forgot Password</div>
        <div className="keep-me-log">
          <span>Keep me logged in</span>
          <ReactSVG className="eye-icon"
                    path={ToggleIcon}
          />
        </div>

        <div className="sign-up__button">
          <Button type="submit" {...(loading && { disabled: true })}>
            {loading ? "Loading" : "Log In"}
          </Button>
        </div>
        <div className="create-acc">
          <a href="/signup">Create Account</a>
        </div>
      </form>
    </div>
  )
}

export default Page;
