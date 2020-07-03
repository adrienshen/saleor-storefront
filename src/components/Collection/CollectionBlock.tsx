import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";
import heartFillIcon from "../../images/favorite-fill.svg";
import heartIcon from "../../images/favorite.svg";
import { GridViewTypes } from "@temp/constants";

interface IProps {
  currentView: GridViewTypes;
  key: number;
  collection: any;
}

export const CollectionBlock = (props: IProps) => {
  const { collection } = props;
  const [heart, setWishlist] = useState(heartIcon);

  const handleWishlist = (e: any) => {
    const img = e.target.getAttribute("data-src");

    if (img === "/images/favorite.svg") {
      setWishlist(heartFillIcon);
    } else {
      setWishlist(heartIcon);
    }
  };

  return (
    <div className="block">
      <div className="block-img">
        <ReactSVG
          path={heart}
          className="block-img__heartIcon"
          onClick={handleWishlist}
        />
        <Link to={`/collections/cabinets/${collection.id}/${collection.slug}`}>
          <img src={collection.backgroundImage?.url} />
        </Link>
      </div>
    </div>
  );
};
