import React, { useState } from "react";
import { CollectionBlock } from "../../components/Collection/CollectionBlock";
import PageHeader from "../../components/Header/PageHeader";
import { SubHeader } from "../../components/Collection/SubHeader";
import "./scss/index.scss";
import { GridViewTypes } from "../../constants";
import { ICollections } from "../Collection/types/Collection";

const Page = (props: ICollections) => {
  const { data, history } = props;
  const [view, changeView] = useState(GridViewTypes.Grid);

  const handleBackButton = () => {
    history.push("/");
  };

  const handleViewChange = (type: GridViewTypes) => {
    changeView(type);
  };

  return (
    <div className="browse-cabinet">
      <PageHeader
        back={true}
        cart={true}
        search={true}
        handleClick={handleBackButton}
      />

      <SubHeader handleViewChange={handleViewChange} title="Browse Cabinets" />

      <div className="collection-block">
        <div
          className={
            view === GridViewTypes.Grid
              ? "collection-block__grid collection-block__wrapper"
              : "collection-block__wrapper collection-wrapper__list"
          }
        >
          {data.collections?.edges?.map((collection, idx) => {
            return (
              <CollectionBlock
                currentView={view}
                key={idx}
                collection={collection.node}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
