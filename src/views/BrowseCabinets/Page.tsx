import * as React from "react";
import { CollectionBlock } from "../../components/Collection/CollectionBlock";
import { FilterCollection } from "../../components/Collection/FilterCollection";
import { GridCollection } from "../../components/Collection/GridCollection";
import { ListCollection } from "../../components/Collection/ListCollection";
import PageHeader from "../../components/Header/PageHeader";
import "./scss/index.scss";
import { SubHeader } from "../../components/Collection/SubHeader";

const Page = props => {
  const { data, history } = props;

  const handleBackButton = () => {
    history.push("/");
  };

  return (
    <div className="browse-cabinet">
      <PageHeader
        back={true}
        cart={true}
        search={true}
        handleClick={handleBackButton}
      />

      <SubHeader title="Browse Cabinets" />

      <div className="collection-block">
        <div className="collection-block__wrapper">
          {data.collections.edges.map((collection, i) => {
            return <CollectionBlock key={i} collect={collection.node} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
