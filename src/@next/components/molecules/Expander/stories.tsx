import { storiesOf } from "@storybook/react";
import React from "react";
import { Expander } from ".";

storiesOf(`@components/atoms/Expander`, module).add("default", () => (
  <Expander
    title="title"
    content="content"
    expanded={false}
    handleToggle={() => {}}
    id={1}
  />
));
