import React, { useState } from "react";
import PageHeader from "../../../components/Header/PageHeader";
import { Expander } from "@components/molecules/Expander";
import { list } from "./mock";

export const Page = (props: any) => {
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
    <div className="inner-page-wrapper faq-wrapper">
      <PageHeader
        back={true}
        cart={true}
        search={true}
        handleClick={handleClick}
      />
      <div>
        <div className="wrapper-header">Frequently Asked Questions</div>
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

export default Page;
