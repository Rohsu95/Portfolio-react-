import React from "react";
import theme from "../../styles/Theme";
import { styled } from "styled-components";
import Slider from "react-slick";
import { StyleProps } from "../../types/project";

export const TitleContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  align-items: center;
  @media ${theme.media.phone} {
    height: 15vh;
  }
`;
export const MainTitle = styled.h1`
  font-size: 6rem;
  /* margin-bottom: 3rem; */
  background-clip: border-box;
  background: linear-gradient(to right top, #b9eddd, #c9a7eb, #2cd3e1);
  color: transparent;
  -webkit-background-clip: text;

  @media ${theme.media.mobile} {
    font-size: 5rem;
  }
  @media ${theme.media.phone} {
    font-size: 4rem;
  }
`;
export const ArticleContainer = styled.article`
  display: flex;
  justify-content: space-around;

  @media ${theme.media.laptop} {
    flex-direction: column;
    display: flex;
    align-items: center;
  }
`;
export const Img = styled.img`
  width: 400px;
  height: 580px;

  @media ${theme.media.height} {
    height: 35vh;
    height: 400px;
  }
  @media ${theme.media.phone} {
    height: 300px;
    width: 300px;
  }
`;
export const SliderStyle = styled(Slider)`
  width: 800px;
  height: 620px;

  .slick-arrow {
    &::before {
      color: ${theme.colors.font};
    }
  }
  .slick-prev {
    left: 1% !important;
    z-index: 1000;
  }
  .slick-next {
    right: 3% !important;
    z-index: 0;
    @media ${theme.media.height} {
      right: 1% !important;
    }
  }
  .slick-prev::before {
    font-size: 30px;

    @media ${theme.media.height} {
      font-size: 20px;
    }
  }
  .slick-next::before {
    font-size: 30px;

    @media ${theme.media.height} {
      font-size: 20px;
    }
  }
  .slick-dots {
    li button:before {
      font-size: 18px;
      color: ${theme.colors.font};

      @media ${theme.media.phone} {
        font-size: 13px;
      }
    }
  }
  @media ${theme.media.laptop} {
    width: 63.78vw;
  }
  @media ${theme.media.height} {
    width: 400px;
    height: 450px;
    display: flex;
    align-items: center;
  }
  @media ${theme.media.phone} {
    width: 300px;
    height: 380px;
  }
`;
export const ContentContainer = styled.article`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  width: 35vw;

  @media ${theme.media.laptop} {
    margin-top: 4rem;
    width: 63.78vw;
  }
`;
export const ContentRole = styled.section<StyleProps>`
  padding: 1rem 0;
  font-size: ${(props) => props.font || "1.5rem"};
  color: ${(props) => props.color || ""};

  @media ${theme.media.mobile} {
    font-size: ${(props) => props.font_mobile || "1.375rem"};
  }
  @media ${theme.media.height} {
    font-size: ${(props) => props.font_height || "1.25rem"};
  }
`;
export const Content = styled.section`
  padding-bottom: 2rem;
  border-bottom: 1px solid ${theme.colors.font};
`;
export const IconContainer = styled.div`
  padding: 2rem;

  svg {
    &:hover {
      color: white !important;
    }
    @media ${theme.media.phone} {
      width: 30px;
      height: 30px;
    }
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
`;
