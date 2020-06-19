import "./scss/index.scss";

import * as React from "react";
import ReactSVG from "react-svg";

import {
  LoginForm,
  Offline,
  OfflinePlaceholder,
  Online,
  Overlay,
  OverlayContextInterface,
  OverlayTheme,
  OverlayType,
} from "../..";
import RegisterForm from "./RegisterForm";

import closeImg from "../../../images/x.svg";
import ForgottenPassword from "./ForgottenPassword";

interface IProps {
  overlay: OverlayContextInterface;
  active?: "login" | "register";
}

class Login extends React.Component<IProps, { active: "login" | "register" }> {
  static defaultProps = {
    active: "login",
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  changeActiveTab = (active: "login" | "register") => {
    this.setState({ active });
  };

  render() {
    const { overlay } = this.props;
    const { show, hide } = overlay;

    return (
      <Overlay context={overlay}>
        <div className="login">
          <Online>
            <div className="overlay__header">
              <p className="overlay__header-text">Saleor account</p>
              <ReactSVG
                path={closeImg}
                onClick={hide}
                className="overlay__header__close-icon"
              />
            </div>
            <div className="login__tabs">
              <span
                onClick={() => this.changeActiveTab("login")}
                className={this.state.active === "login" ? "active-tab" : ""}
              >
                Sign in to account
              </span>
              <span
                onClick={() => this.changeActiveTab("register")}
                className={this.state.active === "register" ? "active-tab" : ""}
              >
                Register new account
              </span>
            </div>
            <div className="login__content">
              {this.state.active === "login" ? (
                <>
                  <LoginForm hide={hide} />
                  <ForgottenPassword
                    onClick={() => {
                      show(OverlayType.password, OverlayTheme.right);
                    }}
                  />
                </>
              ) : (
                <RegisterForm hide={hide} />
              )}
            </div>
          </Online>
          <Offline>
            <OfflinePlaceholder />
          </Offline>
        </div>
      </Overlay>
    );
  }
}

export default Login;
