import * as React from "react";

import { ContactForm } from "../../../components";

interface IProps {
  checkoutId: string;
  checkout: any;
}

const Page: React.FC<IProps> = ({
  checkoutId,
  checkout,
}) => {
  return <div>
    Contact information page

    <ContactForm />
  </div>;
};

export default Page;