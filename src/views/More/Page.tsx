import * as React from "react";
import PageHeader from "../../components/Header/PageHeader";
import { Link } from "react-router-dom";
import { Footer } from "../../components";
import ModeIcon from "images/outline-brightness_2-24px.svg";
import EditIcon from "images/baseline-edit.svg";
import ReturnPolicyIcon from "images/outline-kitchen-24px.svg";
import TermsConditionIcon from "images/outline-book-24px.svg";
import FAQIcon from "images/outline-local_library-24px.svg";
import OurTeamIcon from "images/outline-group-24px.svg";
import ContactUsIcon from "images/outline-question_answer-24px.svg";
import ToggleIcon from "images/toggle.svg";
import H from "history";
import "./scss/index.scss";

interface IProps {
  history: H.History;
}

export const Lists = [
  {
    path: "/more",
    text: "Dark Mode",
    image: ModeIcon,
  },
  {
    path: "/more",
    text: "How to Measure",
    image: EditIcon,
  },
  {
    path: "/return-policy",
    text: "Shipping & Return Policy",
    image: ReturnPolicyIcon,
  },
  {
    path: "/more",
    text: "Terms & Conditions",
    image: TermsConditionIcon,
  },
  {
    path: "/faq",
    text: "FAQ",
    image: FAQIcon,
  },
  {
    path: "/more",
    text: "Our Team",
    image: OurTeamIcon,
  },
  {
    path: "/more",
    text: "Contact Us",
    image: ContactUsIcon,
  },
];

export const Page = (props: IProps) => {
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
            <Link
              to={`${item.path}`}
              key={idx}
              className="myAccount-wrapper-link"
            >
              <div className="more-wrapper-link">
                <img src={item.image} />
                <div className="more-wrapper-link-name">
                  <button type="button" className="more-wrapper-link--btn">
                    {item.text}
                  </button>
                  {idx === 0 && <img src={ToggleIcon} />}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
