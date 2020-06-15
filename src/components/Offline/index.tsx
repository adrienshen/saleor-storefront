import * as React from "react";

import NetworkStatus from "./";

const Offline: React.FC = ({ children }) => (
  <NetworkStatus>
    {(online: boolean) => (online ? null : children)}
  </NetworkStatus>
);

export default Offline;
