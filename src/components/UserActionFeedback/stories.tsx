import React from "react";
import { storiesOf } from "@storybook/react";
import { UserActionFeedback } from ".";

const DEFAULT_PROPS = {
  page: "message_sent",
  history: {},
};

storiesOf("@components/UserActionFeedback", module)
  .addParameters({ component: UserActionFeedback })
  .add("default", () => <UserActionFeedback {...DEFAULT_PROPS} />);
