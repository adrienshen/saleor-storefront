import * as React from "react";
import PageHeader from "../../../components/Header/PageHeader";
import { DetailRow } from "@temp/components/Collection/DetailRow";
import { ICollection } from "../../Collection/types/Collection";

export const Page = (props: ICollection) => {
  if (!props.data?.collection?.setDetails?.fields) {
    return null;
  }

  const fields = JSON.parse(props.data?.collection?.setDetails.fields);
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
        {Object.keys(fields).map((key: string, idx: number) => {
          return <DetailRow key={idx} name={key} value={fields[key]} />;
        })}
      </div>
    </div>
  );
};

export default Page;
