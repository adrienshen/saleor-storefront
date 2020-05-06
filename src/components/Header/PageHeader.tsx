import * as React from "react";
import ReactSVG from "react-svg";
import arrowLeftIcon from "../../images/arrow-left.svg";
import cartIcon from "../../images/cart-icon.svg";
import searchIcon from "../../images/search-icon.svg";
import { Link } from 'react-router-dom';

export const PageHeader = (props) => {
  const { handleClick, back, search, cart, itemsCount } = props;
  const totItems = localStorage.getItem("cartItems")

  return (
    <div className="browse-cabinet__header">
      <div className="browse-cabinet__header-left" onClick={handleClick}>
        {back && <ReactSVG path={arrowLeftIcon} className="browse-cabinet__header-icon"/>}
      </div>
      <div className="browse-cabinet__header-right">
        {cart &&
        <div className="cart-main">
          <Link to="/cart">
            <span className="cart-main-item">{itemsCount ? itemsCount : totItems}</span>
            <ReactSVG path={cartIcon} className="browse-cabinet__header-icon cart-icon"/>
          </Link>
        </div>
        }
        {search && <ReactSVG path={searchIcon} className="browse-cabinet__header-icon search-icon"/>}
      </div>
    </div>
  );
};