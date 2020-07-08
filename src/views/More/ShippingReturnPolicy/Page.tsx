import * as React from "react";
import PageHeader from "../../../components/Header/PageHeader";
import { Expander } from "@components/molecules/Expander";
import { list } from "./mock";

export const Page = (props: any) => {
  const handleClick = () => {
    props.history.goBack();
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
          {list?.map(item => (
            <Expander
              title={item.title}
              content={item.content}
              expanded={item.expanded}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
