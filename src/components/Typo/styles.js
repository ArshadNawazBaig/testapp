import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const variants = {
  mainHeading: {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "40px",
    fontFamily: "Abril Text",
  },
  subHeading: {
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "26px",
    fontFamily: "Inter",
  },
  cardHeading: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
    fontFamily: "Inter",
  },
  cardText: {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
    fontFamily: "Inter",
  },
};
export const StyledHeading = styled(Typography)`
  font-size: ${({ variant }) => variants[variant].fontSize};
  font-weight: ${({ variant }) => variants[variant].fontWeight};
  line-height: ${({ variant }) => variants[variant].lineHeight};
  font-family: ${({ variant }) => variants[variant].fontFamily};
`;
