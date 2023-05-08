import UserCard from "@/components/UserCard";
import React from "react";
import { MainHeadingWrapper, SubHeadingWrapper, Wrapper } from "./styles";
import Typo from "@/components/Typo";
import { actionCards, cards, lastCards } from "./cardData";
import Carousel from "@/components/Carousel";
import SliderCard from "@/components/SliderCard";

const Cards = () => {
  return (
    <Wrapper>
      <MainHeadingWrapper>
        <Typo component="h2" variant="mainHeading">
          Hi, [Kyle]!
        </Typo>
      </MainHeadingWrapper>
      {cards.map((item, key) => (
        <UserCard
          key={item.date}
          variant={item.variant}
          title={item.title}
          date={item.date}
        />
      ))}
      <SubHeadingWrapper>
        <Typo variant="subHeading">Action Items</Typo>
      </SubHeadingWrapper>
      {actionCards.map((item, key) => (
        <UserCard
          variant={item.variant}
          title={item.title}
          date={item.date}
          avatarIcon={item.icon}
        />
      ))}
      <SubHeadingWrapper>
        <Typo variant="subHeading">Get the care you need</Typo>
      </SubHeadingWrapper>
      {lastCards.map((item, key) => (
        <UserCard
          variant={item.variant}
          title={item.title}
          date={item.date}
          avatarIcon={item.icon}
        />
      ))}
      <Carousel>
        <SliderCard cardDesc="Get birth control online through Zealthy, all from the comfort of your home." />
        <SliderCard cardDesc="Get birth control online through Zealthy, all from the comfort of your home." />
        <SliderCard cardDesc="Get birth control online through Zealthy, all from the comfort of your home." />
        <SliderCard cardDesc="Get birth control online through Zealthy, all from the comfort of your home." />
      </Carousel>
    </Wrapper>
  );
};

export default Cards;
