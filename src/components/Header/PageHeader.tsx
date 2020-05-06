import * as React from 'react';
import ReactSVG from "react-svg";
import arrowLeftIcon from "../../images/arrow-left.svg";
import cartIcon from "../../images/cart-icon.svg";
import searchIcon from "../../images/search-icon.svg";

export const PageHeader = (props) => {
  const { handleClick, back, search, cart, itemsCount } = props

  return(
    <div className="browse-cabinet__header">
      <div className="browse-cabinet__header-left" onClick={handleClick}>
        { back && <ReactSVG path={arrowLeftIcon} className="browse-cabinet__header-icon"/> }
      </div>
      <div className="browse-cabinet__header-right">
        { cart &&
          <div className="cart-main">
            <span className="cart-main-item">{itemsCount}</span>
            <ReactSVG path={cartIcon} className="browse-cabinet__header-icon cart-icon"/>
          </div>
        }
        { search && <ReactSVG path={searchIcon} className="browse-cabinet__header-icon search-icon"/> }
      </div>
    </div>
  )
}