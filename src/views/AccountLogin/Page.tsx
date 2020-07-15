// @ts-ignore
import React, { useState } from "react";
import "./scss/index.scss";
import { LoginForm } from "@temp/components";

interface IPageProps {
  history: any;
}

enum ViewChoices {
  Register,
  SignIn,
}

const Page = (props: IPageProps) => {
  console.log("props >> ", props);
  const [view, setView] = useState(ViewChoices.Register);
  if (view === ViewChoices.Register) {
    return (
      <div className="RegisterContainer">
        <LoginForm form={ViewChoices.Register} />
      </div>
    );
  }
  return (
    <div>
      This is the signin_container
      <LoginForm form={ViewChoices.SignIn} />
    </div>
  );
};

export default Page;
