import * as React from "react";

import { META_DEFAULTS } from "../../core/config";
import { default as MetaConsumer } from "./consumer";
import { MetaContextInterface, Provider as MetaProvider } from "./context";

const removeEmpty = (obj: any) => {
  const newObj: any = {};
  Object.keys(obj).forEach(prop => {
    const key = obj[prop];
    if (obj[prop] && obj[prop] !== "") {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

interface MetaWrapperProps {
  meta: MetaContextInterface;
  children: React.ReactNode;
}

const MetaWrapper: React.FC<MetaWrapperProps> = ({ children, meta }) => (
  <MetaProvider value={{ ...META_DEFAULTS, ...removeEmpty(meta) }}>
    <MetaConsumer>{children}</MetaConsumer>
  </MetaProvider>
);

export default MetaWrapper;
