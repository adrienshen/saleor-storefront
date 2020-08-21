import React from "react";
import "./scss/index.scss";
import ReactSVG from "react-svg";
import logo from "images/logo1.svg";
import facebookIcon from "images/Facebook.svg"
import twitterIcon from "images/Twitter.svg"
import googleIcon from "images/Google.svg"
import emailIcon from "images/Email-white.svg"
import { Button } from "@components/atoms";
import { History } from "history";

interface IProps {
  history: History;
}

const Page = (props:IProps) => {
  return (
      <div className="landing">
        <ReactSVG
          path={logo}
          className="logo"
        />
        <div className="item">
          <ReactSVG className="item-logo"
            path={facebookIcon}
          />
          <div className="item-name">Sign up with Facebook</div>
        </div>
        <div className="item">
          <ReactSVG className="item-logo"
          path={twitterIcon}
          />
          <div className="item-name">Sign up with Twitter</div>
        </div>
        <div className="item">
           <ReactSVG className="item-logo"
            path={googleIcon}
           />
            <div className="item-name">Sign up with Google</div>
        </div>
        <div className="email">
          <div className="or-tag">Or</div>
          <Button onClick={()=>props.history.push("/signup")}>
          <ReactSVG
            path={emailIcon}
          />
          <div className="email-btn-name">Sign up with Email</div>
          </Button>
          <div className="have-account-link" onClick={()=>props.history.push("/login")}>I Have an Account</div>
        </div>
      </div>
  );
};

export default Page;
