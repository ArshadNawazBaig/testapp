import React from "react";
import { StyledHeading } from "./styles";

const Typo = ({ variant, component, children }) => {
  return (
    <StyledHeading variant={variant} component={component}>
      {children}
    </StyledHeading>
  );
};

export default Typo;
