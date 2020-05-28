import { FilterCollection } from "@temp/components/Collection/FilterCollection";
import * as React from "react";
import PageHeader from "@temp/components/Header/PageHeader";
import accessTime from "../../../images/access_time.svg";
import doneAll from "../../../images/done_all.svg";

const OrderPage = ({ history }) => {
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="inner-page-wrapper order-page-wrapper">
      <PageHeader back={true} search={true} handleClick={handleClick} />
      <div>
        <div className="wrapper-header order-wrapper-header">My Orders</div>
        <div className="filter-icon">
          <FilterCollection />
        </div>
        <div className="order-card">
          <div className="order-no">
            <span>Order No:</span>
            <span>1234567899</span>
          </div>
          <div className="pending-status ">
            <img src={accessTime} />
            <span className="status-name">Pending</span>
          </div>
          <div className="order-detail">
            <div className="order-info">
              <span>Order Date:</span>
              <span>01/05/2020</span>
            </div>
            <div className="order-info">
              <span>SKU:</span>
              <span>W1230-CYOHH, W1230-CYOHH2</span>
            </div>
            <div className="order-info">
              {" "}
              <span>Categories:</span>
              <span>Kitchen, Outdoor</span>
            </div>
            <div className="order-info">
              <span>Top Cabinet:</span>
              <span>Summer Wine</span>
            </div>
            <div className="order-info">
              <span>Bottom Cabinet:</span>
              <span>Soft White</span>
            </div>
            <div className="order-info">
              <span>Quantity:</span>
              <span>11</span>
            </div>
          </div>
          <div className="order-price">
            <span>Total</span>
            <span className="price">$34,298</span>
          </div>
        </div>

        <div className="order-card">
          <div className="order-no">
            <span>Order No:</span>
            <span>1234567899</span>
          </div>
          <div className="pending-status ">
            <img src={doneAll} />
            <span className="status-name">Completed</span>
          </div>
          <div className="order-detail">
            <div className="order-info">
              <span>Order Date:</span>
              <span>01/05/2020</span>
            </div>
            <div className="order-info">
              <span>SKU:</span>
              <span>W1230-CYOHH, W1230-CYOHH2</span>
            </div>
            <div className="order-info">
              {" "}
              <span>Categories:</span>
              <span>Kitchen, Outdoor</span>
            </div>
            <div className="order-info">
              <span>Top Cabinet:</span>
              <span>Summer Wine</span>
            </div>
            <div className="order-info">
              <span>Bottom Cabinet:</span>
              <span>Soft White</span>
            </div>
            <div className="order-info">
              <span>Quantity:</span>
              <span>11</span>
            </div>
          </div>
          <div className="order-price">
            <span>Total</span>
            <span className="price">$34,298</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
