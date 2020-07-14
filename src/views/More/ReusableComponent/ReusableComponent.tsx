import React, { useState } from "react";
import PageHeader from "../../../components/Header/PageHeader";
import { Expander } from "@components/molecules";
import { IProps } from "./types";
import "../scss/index.scss";

export const ReusableComponent = (props: IProps) => {
  const { header, list } = props;
  const [selectedItem, showContent] = useState({
    index: null,
    expanded: false,
  });

  const handleClick = () => {
    props.history.goBack();
  };

  const handleToggle = (index: number, expanded: boolean) => {
    showContent({ index, expanded: !expanded });
  };

  return (
    <div className="inner-page-wrapper">
      <PageHeader
        back={true}
        cart={false}
        search={true}
        handleClick={handleClick}
      />
      <div className="more-page-wrapper">
        <div className="wrapper-header">{header}</div>
        <div className="shipping-return-wrapper">
          {list.map((item, index) => (
            <Expander
              title={item.title}
              content={item.content}
              expanded={index === selectedItem.index && selectedItem.expanded}
              id={index}
              key={index}
              handleToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReusableComponent;
