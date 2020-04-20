import * as React from "react";
import styled from 'styled-components';
import Stepper from 'react-stepper-horizontal';
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
    <CheckoutTitle>Contact Information</CheckoutTitle>
    <CheckoutStepper />
    <ContactForm />
  </div>;
};

const CheckoutTitle = styled.h1`
  color: #af9a50;
  font-size: 1.5rem;
  margin: 2rem 0;
`;

function CheckoutStepper(props) {
  return <StepperDiv>
    <Stepper
      steps={[
        {title: 'CONTACT'},
        {title: 'SHIPPING'},
        {title: 'PAYMENT'},
        {title: 'CONFIRMATION'},
      ]}
      activeStep={0}
      size={10}
      circleFontSize={0}
      activeColor="#af9a50"
      defaultColor="#808080"
      completeColor="#808080"
      titleFontSize={9}
      defaultTitleColor="#808080"
    />
  </StepperDiv>;
};

const StepperDiv = styled.div`
  margin-bottom: 4rem;
`;

export default Page;