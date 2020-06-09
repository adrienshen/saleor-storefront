import * as React from "react";
import ReactSVG from "react-svg";
import ModeIcon from "../../images/outline-brightness_2-24px.svg";
import EditIcon from "../../images/baseline-edit.svg";
import ReturnPolicyIcon from "../../images/outline-kitchen-24px.svg";
import TermsConditionIcon from "../../images/outline-book-24px.svg";
import FAQIcon from "../../images/outline-local_library-24px.svg";
import OurTeamIcon from "../../images/outline-group-24px.svg";
import ContactUsIcon from "../../images/outline-question_answer-24px.svg";
import "./scss/index.scss";

const dataList = [
  { icon: ModeIcon, name: "Dark Mode" },
  { icon: EditIcon, name: "How to Measure" },
  { icon: ReturnPolicyIcon, name: "Shipping & Return Policy" },
  { icon: TermsConditionIcon, name: "Terms & Conditions" },
  { icon: FAQIcon, name: "FAQ" },
  { icon: OurTeamIcon, name: "Our Team" },
  { icon: ContactUsIcon, name: "Contact Us" },
];

const View: React.FC<{}> = () => {
  return (
    <>
      <div className="">
        {dataList.map((item, idx) => (
          <div className="" key={idx}>
            <ReactSVG path={item.icon} className="" />
            <div className="">{item.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default View;
