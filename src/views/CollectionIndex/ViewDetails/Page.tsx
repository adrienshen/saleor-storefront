import { Paths } from "@temp/views/CollectionIndex/Page";
import * as React from "react";
import { Link } from "react-router-dom";
import PageHeader from "../../../components/Header/PageHeader";
import { DetailRow } from "@temp/components/Collection/DetailRow";

export const Page = props => {
  const specsDetails = JSON.parse(props.data.collection.extraFields) || [];
  const details =
    specsDetails &&
    specsDetails.specifications &&
    specsDetails.specifications.length > 0 &&
    specsDetails.specifications.map(item =>
      Object.keys(item).map(key => {
        return { key, value: item[key] };
      })
    );
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
        <div className="wrapper-header">Set Details</div>
        {details.map((detail, i) => {
          if (detail && detail[0]) {
            return (
              <DetailRow key={i} name={detail[0].key} value={detail[0].value} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Page;
