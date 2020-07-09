import React from "react";
import { storiesOf } from "@storybook/react";
import { IPosition } from "./types";
import { ColorSelection } from ".";

storiesOf(`@components/molecules/CreditCardWithIcon`, module).add(
  "default",
  () => (
    <ColorSelection
      collectionId={"12345"}
      colors={[]}
      position={IPosition.Top}
    />
  )
);
