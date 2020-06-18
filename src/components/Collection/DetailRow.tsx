import * as React from "react";
import "./scss/index.scss";

interface IPops {
  name: string;
  value: string;
}

export const DetailRow = ({ name, value }: IPops) => {
  return (
    <div>
      <div className="d-flex flex-row data-table">
        <div className="data-table-info data-left">
          <span className="data-table-info-box data-table-info-left">
            {name}:
          </span>
        </div>
        <div className="data-table-info">
          <span className="data-table-info-box data-table-info-right">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};
