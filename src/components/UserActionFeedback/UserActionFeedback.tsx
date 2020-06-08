import * as React from "react";
import ReactSVG from "react-svg";
import { IProps } from "./types";
import { PageFeedbackTypes } from "./PageFeedbackTypes";
import crossIcon from "images/cross-clear.svg";
import pinkBackground from "images/pink-background.svg";
import Button from "@temp/components/Button";
import "./scss/index.scss";

export const UserActionFeedback: React.FC<IProps> = ({
  page,
  history,
}: IProps) => {
  const handleBack = () => {
    history.goBack();
  };

  const handleButtonClick = () => {
    history.push("/");
  };

  return (
    <div className="message-page__empty inner-page-wrapper">
      <div className="message-page__empty-close">
        <ReactSVG
          path={crossIcon}
          className="empty-icon"
          onClick={handleBack}
        />
      </div>
      <div
        className="message-page__empty-icon"
        style={{ backgroundImage: `url(${pinkBackground})` }}
      >
        <div className="message-page__empty-icon-circle">
          <ReactSVG
            path={PageFeedbackTypes[page]?.icon}
            className="empty-icon"
          />
        </div>
      </div>
      <h4>{PageFeedbackTypes[page]?.message}</h4>
      <p>{PageFeedbackTypes[page]?.detail}</p>
      <div className="message-page__empty__action">
        <Button className="btn" onClick={handleButtonClick}>
          {PageFeedbackTypes[page]?.buttonText}
        </Button>
      </div>
    </div>
  );
};
