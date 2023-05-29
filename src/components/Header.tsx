import React from "react";
import { styled } from "styled-components";
import theme from "../styles/Theme";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <NameContainer to="/">Su-Hyeok</NameContainer>
      <Nav />
    </HeaderContainer>
  );
};

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
const NameContainer = styled(Link)`
  margin-left: 2rem;
  color: ${theme.colors.font};
  text-decoration: none;
  font-size: 2rem;
  font-weight: 1000;
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

export default Header;
