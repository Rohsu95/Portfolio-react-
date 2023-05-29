import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "../../../styles/Theme";
import { FaGithub } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import { SlControlPlay } from "react-icons/sl";
import { SideItem } from "../../../components/GifItem";
import * as s from "../style";

const Port = () => {
  return (
    <div>
      <s.TitleContainer>
        <s.MainTitle>PortFolio</s.MainTitle>
      </s.TitleContainer>
      <s.ArticleContainer>
        <SideItem />
        <s.ContentContainer>
          <s.Content>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              이력서와 함께 제출하기 위해 구현한 웹 포토폴리오 사이트입니다.
              Slick을 사용하여 슬라이드 형식으로 프로젝트 이미지를 확인할 수
              있으며 EmailJs 라이브러리를 사용하여 저의 이메일로 메일을 보낼 수
              있게 하였습니다.
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ContentRole font="2rem" color={`${theme.colors.font}`}>
              My Role
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              about 페이지 : 저의 프로필 이미지와 GitHub와 notion을
              연결하였습니다.
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              Project 페이지 : 각각의 Project 페이지로 이동 가능하며 Slick을
              사용하여 슬라이드 형식의 이미지를 확인할 수 있습니다.
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              Contact 페이지 : EmailJs 라이브러리 사용하여 저의 이메일로 메일을
              보낼 수 있습니다
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ContentRole font="2rem" color={`${theme.colors.font}`}>
              Skill
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              TypeScript, React, Styled-Components
            </s.ContentRole>
          </s.Content>
          <s.Icon>
            <s.IconContainer>
              <a
                href="https://github.com/rohsuhyoek/Side-Project"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub size="45" color="black" />
              </a>
            </s.IconContainer>
            <s.IconContainer>
              <a
                href="https://www.notion.so/Real-World-248480c6ec99403d8af906888a429e9b"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RxNotionLogo size="45" color="black" />
              </a>
            </s.IconContainer>
            <s.IconContainer>
              <a
                href="http://pre41-deploy-test.s3-website.ap-northeast-2.amazonaws.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <SlControlPlay size="45" color="black" />
              </a>
            </s.IconContainer>
          </s.Icon>
        </s.ContentContainer>
      </s.ArticleContainer>
    </div>
  );
};
export default Port;
