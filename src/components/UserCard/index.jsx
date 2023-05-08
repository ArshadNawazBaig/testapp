import * as React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import {
  StyledArrowForwardIcon,
  StyledAvatar,
  StyledCard,
  StyledCardHeader,
} from "./styles";
import Typo from "../Typo";
import Image from "next/image";
import { ArrowRight } from "../Icons";

const UserCard = ({ variant = "userCard", title, date, avatarIcon }) => {
  return (
    <StyledCard variant={variant}>
      <StyledCardHeader
        variant={variant}
        avatar={
          variant == "userCard" ? (
            <Avatar aria-label="recipe">
              <Image src="/images/user.png" height={48} width={48} />
            </Avatar>
          ) : (
            <StyledAvatar bgClr="#E38869">
              <Image src={avatarIcon} height={24} width={24} />
            </StyledAvatar>
          )
        }
        action={
          <IconButton aria-label="settings">
            <ArrowRight color={variant == "userCard" ? "#ffffff" : "#333333"} />
          </IconButton>
        }
        title={
          <Typo component="h2" variant="cardHeading">
            {title}
          </Typo>
        }
        subheader={
          <Typo component="span" variant="cardText">
            {date}
          </Typo>
        }
      />
    </StyledCard>
  );
};

export default UserCard;
