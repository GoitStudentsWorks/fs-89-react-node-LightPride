import React from 'react';
import { StyledSignForm } from './Styled';

const Button = ({ margin, backgroundColor, color, width, title, type }) => {
  return (
    <StyledSignForm
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      margin={margin}
    >
      <button className="universalBtn" type={type}>
        {title}
      </button>
    </StyledSignForm>
  );
};

export default Button;
