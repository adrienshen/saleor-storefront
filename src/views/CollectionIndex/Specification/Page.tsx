import * as React from "react";
import { PageHeader } from "../../../components/Header/PageHeader";

export const Page = (props) => {
  const { data } = props;
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
            <p className="wrapper-data">{data.collection.description}</p>
            <p className="wrapper-data">{data.collection.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;