import * as React from "react";
import { PageHeader } from "../../../components/Header/PageHeader";

export const Page = (props) => {
  const { data } = props;
  const description = JSON.parse(data.collection.descriptionJson)

  const handleClick = () => {
    props.history.goBack();
  };
  localStorage.setItem('show', "true")

  return (
    <div className="specification-wrapper inner-page-wrapper">
      <PageHeader back={true} cart={true} search={true} handleClick={handleClick}/>
      <div>
        <div className="wrapper-header">
          <span>Set Details</span>
        </div>
        <div className="wrapper-description">
          <div>
            <p className="wrapper-data">{description.blocks[0].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;