import * as React from "react";

import { OverlayContext, OverlayType } from "..";
import Cart from "./Cart";
import Modal from "./Modal";
import Notification from "./Notification";
import Search from "./Search";

const OverlayManager: React.FC = () => (
  <OverlayContext.Consumer>
    {overlay => {
      switch (overlay.type) {
        case OverlayType.modal:
          return <Modal overlay={overlay} />;

        case OverlayType.message:
          return <Notification overlay={overlay} />;

        case OverlayType.cart:
          return <Cart overlay={overlay} />;

        case OverlayType.search:
          return <Search overlay={overlay} />;

        default:
          return null;
      }
    }}
  </OverlayContext.Consumer>
);

export default OverlayManager;
