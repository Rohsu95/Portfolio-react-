import React from "react";
import { styled } from "styled-components";
import { FaGithub } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import theme from "../../styles/Theme";

const Home = () => {
  return (
    <MainContainer>
      <ImgContainer>
        <img src="/image/main.jpg" alt="mainImg" />
      </ImgContainer>

      <ArticleContainer>
        <TitleContainer>Web Developer</TitleContainer>
        <SectionContainer>노력은 배신하지 않습니다.</SectionContainer>
        <SectionContainer>
          느리더라도 포기 하지 않는 변함없는 개발자가 되겠습니다.
        </SectionContainer>
        <Icon>
          <IconContainer>
            <a
              href="https://github.com/Rohsu95"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaGithub size="45" color="black" />
            </a>
          </IconContainer>
          <IconContainer>
            <a
              href="https://universal-finch-bc7.notion.site/6903eccb1e784dee8ff8fecd1c5f3eee"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RxNotionLogo size="45" color="black" />
            </a>
          </IconContainer>
        </Icon>
      </ArticleContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;

  @media ${theme.media.mobile} {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
  }
`;
const ArticleContainer = styled.article`
  height: 91vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${theme.media.mobile} {
    justify-content: initial; // initial는 초기화
    height: initial;
  }
`;

const TitleContainer = styled.h1`
  font-size: 6rem;
  margin-bottom: 3rem;
  background-clip: border-box;
  background: linear-gradient(to right top, #b9eddd, #c9a7eb, #2cd3e1);
  color: transparent;
  -webkit-background-clip: text;
  @media ${theme.media.tablet} {
    font-size: 3rem;
  }
  @media ${theme.media.phone} {
    font-size: 2.5rem;
  }
`;
const SectionContainer = styled.section`
  font-size: 1.5rem;
  @media ${theme.media.tablet} {
    font-size: 1rem;
  }
  @media ${theme.media.phone} {
    font-size: 0.75rem;
  }
`;
const ImgContainer = styled.section`
  display: flex;
  align-items: center;
  img {
    border-radius: 15px;

    @media ${theme.media.tablet} {
      width: 300px;
      height: 400px;
    }
    @media ${theme.media.phone} {
      width: 250px;
      height: 300px;
    }
  }
  @media ${theme.media.mobile} {
    display: flex;
    justify-content: center;
  }
`;
const IconContainer = styled.div`
  padding: 2rem;

  svg {
    &:hover {
      color: white !important;
    }
  }
`;
const Icon = styled.div`
  display: flex;
`;

export default Home;
