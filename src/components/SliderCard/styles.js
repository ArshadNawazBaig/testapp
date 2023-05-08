import styled from "@emotion/styled";
import { Box, Card, CardHeader, CardMedia } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const StyledCard = styled(Card)`
  width: 568px;
  max-width: 100%;
  height: 400px;
  background-color: #00210b;
`;
export const StyledCardMedia = styled(CardMedia)`
  height: 286px;
`;

export const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  color: white;
`;

export const BottomText = styled(Box)`
  padding: 33px 24px;
  color: white;
  width: 80%;
`;
export const Arrow = styled(Box)`
  width: 10%;
  padding: 0;
`;
export const StyledCardHeader = styled(CardHeader)`
  padding: 0;
  max-width: 100%;
  width: 100%;
  height: 114px;
  padding: 0;

  & .MuiCardHeader-action {
    width: 10%;
    align-items: center;
    display: flex;
    height: 114px;
  }
`;
