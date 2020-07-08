import * as React from "react";
import PageHeader from "../../../components/Header/PageHeader";
import { Expander } from "@components/molecules/Expander";
import { list } from "./mock";
import { useState } from "react";
import { findIndex } from "lodash";

export const Page = (props: any) => {
  const [listOfItems, showContent] = useState({ value: list });

  const handleClick = () => {
    props.history.goBack();
  };

  const handleToggle = (index: number, expanded: boolean) => {
    const alreadyOpenItemIndex = findIndex(listOfItems.value, {
      expanded: true,
    });
    const toggleItem = listOfItems.value[index];
    if (alreadyOpenItemIndex > -1 && !expanded) {
      listOfItems.value.splice(alreadyOpenItemIndex, 1, {
        ...listOfItems.value[alreadyOpenItemIndex],
        expanded: false,
      });
    }
    listOfItems.value.splice(index, 1, { ...toggleItem, expanded: !expanded });
    showContent({ value: listOfItems.value });
  };

  return (
    <div className="inner-page-wrapper">
      <PageHeader
        back={true}
        cart={true}
        search={true}
        handleClick={handleClick}
      />
      <div>
        <div className="wrapper-header">Shipping & Return Policy</div>
        <div className="shipping-return-wrapper">
          {listOfItems.value.map((item, index) => (
            <Expander
              title={item.title}
              content={item.content}
              expanded={item.expanded}
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
