import React from "react";
import { styled } from "styled-components";
import theme from "../styles/Theme";
import Nav from "./Nav";

const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.main};
  @media ${theme.media.mobile} {
    justify-content: center;
  }
`;
const NameContainer = styled.h1`
  margin-left: 2rem;
  color: ${theme.colors.font};
  &:hover {
    color: ${theme.colors.font_hover};
  }

  @media ${theme.media.laptop} {
    font-size: 1.5rem;
  }
  @media ${theme.media.mobile} {
    display: none;
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <NameContainer>Su-Hyeok</NameContainer>
      <Nav />
    </HeaderContainer>
  );
};
export default Header;
