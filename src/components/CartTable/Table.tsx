import { smallScreen } from "../../globalStyles/scss/variables.scss";
import "./scss/index.scss";

import * as React from "react";
import Media from "react-media";
import ProductRow, { EditableProductRowProps, LineI } from "./ProductRow";

interface TableProps extends EditableProductRowProps {
  lines: LineI[];
  subtotal: React.ReactNode;
  deliveryCost?: React.ReactNode;
  totalCost?: React.ReactNode;
  discount?: React.ReactNode;
  discountName?: string;
}

const Table: React.FC<TableProps> = ({
  subtotal,
  deliveryCost,
  totalCost,
  discount,
  discountName,
  lines,
  ...rowProps
}) => (
  <Media query={{ minWidth: smallScreen }}>
    {(mediumScreen: boolean) => (
      <main className="cart-table">
        <div>
          {lines?.map((line, idx) => (
            <ProductRow
              key={idx}
              line={line}
              mediumScreen={mediumScreen}
              {...rowProps}
            />
          ))}
        </div>
      </main>
    )}
  </Media>
);

export default Table;
