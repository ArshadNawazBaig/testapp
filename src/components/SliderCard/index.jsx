import * as React from "react";
import Typo from "../../components/Typo/index";
import {
  Arrow,
  BottomText,
  StyledCard,
  StyledCardHeader,
  StyledCardMedia,
} from "./styles";
import { ArrowRight } from "../Icons";

const SliderCard = ({ cardDesc }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image="/images/medicine.jpg"
        alt="Live from space album cover"
      />
      <StyledCardHeader
        subheader={
          <BottomText>
            <Typo variant="cardHeading">{cardDesc}</Typo>
          </BottomText>
        }
        action={
          <Arrow>
            <ArrowRight color="#ffffff" />
          </Arrow>
        }
      />
    </StyledCard>
  );
};

export default SliderCard;
