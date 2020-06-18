import * as React from "react";
import PageHeader from "../../../components/Header/PageHeader";
import { RichTextContent } from "@components/atoms";
import { ICollection } from "../../Collection/types/Collection";

export const Page = (props: ICollection) => {
  const { data } = props;

  const handleClick = () => {
    props.history.goBack();
  };

  return (
    <div className="specification-wrapper inner-page-wrapper">
      <PageHeader
        back={true}
        cart={true}
        search={true}
        handleClick={handleClick}
      />
      <div>
        <div className="wrapper-header">
          <span>Set Details</span>
        </div>
        <div className="wrapper-description">
          <div>
            <RichTextContent
              descriptionJson={data.collection.descriptionJson}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
