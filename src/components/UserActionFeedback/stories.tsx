import React from "react";
import { storiesOf } from "@storybook/react";
import { pageType } from "./types";
import { UserActionFeedback } from ".";

const DEFAULT_PROPS = {
  page: pageType.MESSAGE_SENT,
  history: {},
};

storiesOf("@components/UserActionFeedback", module)
  .addParameters({ component: UserActionFeedback })
  .add("default", () => <UserActionFeedback {...DEFAULT_PROPS} />);
