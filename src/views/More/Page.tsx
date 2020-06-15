import * as React from "react";
import PageHeader from "../../components/Header/PageHeader";
import { Footer } from "../../components";
import ModeIcon from "images/outline-brightness_2-24px.svg";
import EditIcon from "images/baseline-edit.svg";
import ReturnPolicyIcon from "images/outline-kitchen-24px.svg";
import TermsConditionIcon from "images/outline-book-24px.svg";
import FAQIcon from "images/outline-local_library-24px.svg";
import OurTeamIcon from "images/outline-group-24px.svg";
import ContactUsIcon from "images/outline-question_answer-24px.svg";
import ToggleIcon from "images/toggle.svg";
import "./scss/index.scss";

export const Lists = [
  {
    text: "Dark Mode",
    image: ModeIcon,
  },
  {
    text: "How to Measure",
    image: EditIcon,
  },
  {
    text: "Shipping & Return Policy",
    image: ReturnPolicyIcon,
  },
  {
    text: "Terms & Conditions",
    image: TermsConditionIcon,
  },
  {
    text: "FAQ",
    image: FAQIcon,
  },
  {
    text: "Our Team",
    image: OurTeamIcon,
  },
  {
    text: "Contact Us",
    image: ContactUsIcon,
  },
];

export const Page = props => {
  const handleClick = () => {
    props.history.goBack();
  };

  return (
    <div className="more-page-wrapper">
      <PageHeader
        back={true}
        cart={false}
        search={true}
        handleClick={handleClick}
      />
      <div>
        <div className="more-wrapper">
          {Lists.map((item, idx) => (
            <div key={idx} className="more-wrapper-link">
              <img src={item.image} />
              <div className="more-wrapper-link-name">
                <button type="button" className="more-wrapper-link--btn">
                  {item.text}
                </button>
                {idx === 0 && <img src={ToggleIcon} />}
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
