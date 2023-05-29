import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "../../../styles/Theme";
import { FaGithub } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import { SlControlPlay } from "react-icons/sl";
import { MainItem } from "../../../components/GifItem";
import * as s from "../style";

const Main = () => {
  return (
    <div>
      <s.TitleContainer>
        <s.MainTitle>등산하조</s.MainTitle>
      </s.TitleContainer>
      <s.ArticleContainer>
        <MainItem />
        <s.ContentContainer>
          <s.Content>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              부트캠프에서 진행한 메인 프로젝트입니다. 등산 좋아하는 사람들을
              위한 등산 정보 공유 커뮤니티 이며, 디자인부터 직접 프론트엔드
              팀원들과 만들었으며 백엔드와도 협업을 하여 만든 프로젝트 입니다.
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ContentRole font="2rem" color={`${theme.colors.font}`}>
              My Role
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              게시글 작성 페이지 : CKEditor 라이브러리를 사용하여 글 작성
              편집기를 만들었고, M ui 라이브러리를 사용하여 카테고리 창을
              만들었습니다.
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              마이 페이지: 내가 작성한 글,댓글,북마크가 보이며,나의 포인트와
              포인트 획득 조건, 포인트 별 등급 확인이 가능합니다. 회원 탈퇴 기능
              구현.
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ContentRole font="2rem" color={`${theme.colors.font}`}>
              Skill
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              JavaScript, React, Axios, Styled-Components
            </s.ContentRole>
          </s.Content>
          <s.Icon>
            <s.IconContainer>
              <a
                href="https://github.com/codestates-seb/seb41_main_029"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub size="45" color="black" />
              </a>
            </s.IconContainer>
            <s.IconContainer>
              <a
                href="https://github.com/rohsuhyoek"
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
export default Main;
