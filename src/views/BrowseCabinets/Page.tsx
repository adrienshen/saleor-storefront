import React, { useState } from "react";
import { CollectionBlock } from "../../components/Collection/CollectionBlock";
import PageHeader from "../../components/Header/PageHeader";
import { SubHeader } from "../../components/Collection/SubHeader";
import "./scss/index.scss";
import { GridViewTypes } from "../../constants";

const Page = props => {
  const { data, history } = props;
  const [view, changeView] = useState(GridViewTypes.Grid);

  const handleBackButton = () => {
    history.push("/");
  };

  const handleViewChange = type => {
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
          {data.collections.edges.map((collection, i) => {
            return (
              <CollectionBlock
                currentView={view}
                key={i}
                collect={collection.node}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
