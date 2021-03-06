import "./scss/index.scss";

import * as React from "react";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import {
  Button,
  Footer,
  Offline,
  OfflinePlaceholder,
  Online,
  Overlay,
  OverlayContextInterface,
} from "../..";
import { contactUrl } from "../../../checkout/routes";
import { maybe } from "../../../core/utils";
import { TypedProductVariantsQuery } from "../../../views/Product/queries";
import { CartContext } from "../../CartProvider/context";
import { extractCartLines, getLineItemsTotal } from "../../CartProvider/utils";
import { Error } from "../../Error";
import Loader from "../../Loader";
import { ShopContext } from "../../ShopProvider/context";
import Empty from "./Empty";
import ProductList from "./ProductList";
import chevronLeft from "../../../images/chevron-left.svg";

const Cart: React.FC<{ overlay: OverlayContextInterface }> = ({ overlay }) => {
  return (
    <Overlay context={overlay}>
      <CartBasic />
    </Overlay>
  );
};

export function CartBasic() {
  return (
    <>
      <Online>
        <CartContext.Consumer>
          {cart => (
            <ShopContext.Consumer>
              {({ defaultCountry, geolocalization }) => (
                <TypedProductVariantsQuery
                  displayLoader={false}
                  variables={{ ids: cart.lines?.map(line => line.variantId) }}
                  skip={!cart.lines.length}
                  alwaysRender
                >
                  {({ data, loading, error }) => {
                    if (loading) {
                      return (
                        <div className="cart">
                          <Loader full />
                        </div>
                      );
                    }

                    if (error) {
                      return <Error error={error.message} />;
                    }

                    const locale = maybe(
                      () => geolocalization.country?.code,
                      defaultCountry.code
                    );
                    return (
                      <div className="cart">
                        <div className="overlay__header">
                          <ReactSVG
                            path={chevronLeft}
                            onClick={() => history.back()}
                            className="overlay__header__close-icon"
                          />
                        </div>
                        {cart.lines?.length && data ? (
                          <>
                            <ProductList
                              lines={extractCartLines(data, cart.lines, locale)}
                              remove={cart.remove}
                              add={cart.add}
                              subtract={cart.subtract}
                            />
                            <div className="cart__footer">
                              <div className="cart__footer__subtotoal">
                                <div className="cart__footer__price-label">
                                  <span>Subtotal</span>
                                  <small>
                                    (
                                    {cart.lines
                                      .map(line => line.quantity)
                                      .reduce(
                                        (sum, next) => sum + next,
                                        0
                                      )}{" "}
                                    items)
                                  </small>
                                </div>
                                <span className="cart__footer__price">
                                  {getLineItemsTotal(data, cart.lines, locale)}
                                </span>
                              </div>
                              <div className="cart__footer__button">
                                <Link to={contactUrl}>
                                  <Button>Checkout</Button>
                                </Link>
                              </div>
                            </div>
                          </>
                        ) : (
                          <Empty overlayHide={null} />
                        )}
                        <Footer />
                      </div>
                    );
                  }}
                </TypedProductVariantsQuery>
              )}
            </ShopContext.Consumer>
          )}
        </CartContext.Consumer>
      </Online>
      <Offline>
        <div className="cart">
          <OfflinePlaceholder />
        </div>
      </Offline>
    </>
  );
}

export default Cart;
