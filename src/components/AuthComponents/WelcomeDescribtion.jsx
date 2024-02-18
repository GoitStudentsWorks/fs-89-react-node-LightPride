import React from 'react';
import { StyledSignForm } from './Styled';

const WelcomeDescription = () => {
  return (
    <StyledSignForm>
      <p className="welcomeDescription">
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
    </StyledSignForm>
  );
};

export default WelcomeDescription;
