import styled from "@emotion/styled";
import { Avatar, Card, CardHeader } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

const variants = {
  userCard: {
    bgClr: "#00210B",
    clr: "#ffffff",
  },
  scheduleCard: {
    bgClr: "#FFEAE3",
    clr: "#1b1b1b",
  },
  appointmentCard: {
    bgClr: "#ffffff",
    clr: "1b1b1b",
  },
};
export const StyledCard = styled(Card)`
  background-color: ${({ variant, theme = { spacing } }) =>
    variants[variant].bgClr};
  border: 1px solid #cccccc;
  padding: 24px;
  max-width: 568px;
  width: 100%;
  border-radius: 16px;
  margin: 16px 0;
  cursor: pointer;
`;
export const StyledCardHeader = styled(CardHeader)`
  color: ${({ variant }) => variants[variant].clr};
  padding: 0;

  & .MuiCardHeader-subheader {
    color: ${({ variant }) => (variant === "userCard" ? "#ffffff" : "#333333")};
  }
`;
export const StyledAvatar = styled(Avatar)`
  background-color: ${({ bgClr }) => bgClr + " !important"};
  height: 48px;
  width: 48px;
`;
export const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: ${({ color }) => color};
`;
