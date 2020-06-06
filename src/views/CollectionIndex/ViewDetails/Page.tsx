import * as React from "react";
import PageHeader from "../../../components/Header/PageHeader";
import { DetailRow } from "@temp/components/Collection/DetailRow";

export const Page = props => {
  const specsDetails =
    (props.data &&
      props.data.collection &&
      JSON.parse(props.data.collection.extraFields)) ||
    [];

  const getDetails = data => {
    return (
      data &&
      data.specifications &&
      data.specifications.length > 0 &&
      data.specifications.map(item =>
        Object.keys(item).map(key => ({ key, value: item[key] }))
      )
    );
  };

  const details = getDetails(specsDetails);

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
        {details.map((detail, idx) => {
          if (detail && detail[0]) {
            return (
              <DetailRow
                key={idx}
                name={detail[0].key}
                value={detail[0].value}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Page;
