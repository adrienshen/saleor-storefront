import * as React from "react";
import ReactSVG from "react-svg";
import AccountIcon from "../../images/account-icon.svg";
import CartIcon from "../../images/cart-icon.svg";
import HomeIcon from "../../images/home-icon.svg";
import MoreIcon from "../../images/more-icon.svg";
import "./scss/index.scss";

interface FooterProps {
  activeItem: string;
}

const Footer: React.FC<FooterProps> = ({ activeItem }: FooterProps) => (
  <div className="footer" id="footer">
    <div className="footer-small">
      <div
        className={`footer-small__icon ${activeItem === "home" &&
          "footer-small__icon-selected"}`}
      >
        <ReactSVG path={HomeIcon} />
        <span className="footer-small__icon-name">Home</span>
      </div>

      <div
        className={`footer-small__icon ${activeItem === "cart" &&
          "footer-small__icon-selected"}`}
      >
        <ReactSVG path={CartIcon} />
        <span className="footer-small__icon-name">Cart</span>
      </div>

      <div
        className={`footer-small__icon ${activeItem === "account" &&
          "footer-small__icon-selected"}`}
      >
        <ReactSVG path={AccountIcon} />
        <span className="footer-small__icon-name">Account</span>
      </div>

      <div
        className={`footer-small__icon ${activeItem === "more" &&
          "footer-small__icon-selected"}`}
      >
        <ReactSVG path={MoreIcon} />
        <span className="footer-small__icon-name">More</span>
      </div>
    </div>
  </div>
);

export default Footer;
