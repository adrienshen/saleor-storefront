import React from "react";
import { storiesOf } from "@storybook/react";
import { IPosition } from "./types";
import { ColorSelection } from ".";

storiesOf(`@components/molecules/CreditCardWithIcon`, module).add(
  "default",
  () => <ColorSelection colors={[]} position={IPosition.Top} />
);
