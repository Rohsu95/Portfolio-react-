import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "../../../styles/Theme";
import { FaGithub } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import { SlControlPlay } from "react-icons/sl";
import { SideItem } from "../../../components/GifItem";
import * as s from "../style";

const Side = () => {
  return (
    <div>
      <s.TitleContainer>
        <s.MainTitle>Real-World</s.MainTitle>
      </s.TitleContainer>
      <s.ArticleContainer>
        <SideItem />
        <s.ContentContainer>
          <s.Content>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              부트캠프에서 배운 내용들을 정리 하기 위해 수료 후 만든 1인
              프로젝트 입니다. Fire Base를 사용하였으며 사용자 인증 기능 및
              CRUD가 포함 커뮤니티 페이지입니다.
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ContentRole font="2rem" color={`${theme.colors.font}`}>
              My Role
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              회원 가입, 로그인 페이지 : Fire Base를 사용자 인증 기능이 있으며,
              유효성 검사 후 로그인.
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              게시글 작성 페이지 : 게시글 작성 (제목, 소제목, 내용, 태그) 기능
              구현
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              커뮤니티 페이지 : 내가 작성한 글만 보기 기능, 내가 작성한 글 삭제
              기능, 좋아요 기능,
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              특정 게시글 조회 페이지 : 선택한 게시글 조회, 댓글 작성, 삭제 기능
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              게시글 수정 페이지 : 작성한 게시글 수정 기능
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              마이 페이지 : 프로필 이미지 업로드, 로그 아웃 기능
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              개인 정보 수정 페이지 : 닉네임, 이메일, 패스워드 수정 기능
            </s.ContentRole>
          </s.Content>
          <s.Content>
            <s.ContentRole font="2rem" color={`${theme.colors.font}`}>
              Skill
            </s.ContentRole>
            <s.ContentRole font_height="1rem" font_mobile="1.25rem">
              JavaScript, React, FireBase, Styled-Components
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
                href="https://universal-finch-bc7.notion.site/Real-World-248480c6ec99403d8af906888a429e9b"
                target="_blank"
                rel="noreferrer noopener"
              >
                <RxNotionLogo size="45" color="black" />
              </a>
            </s.IconContainer>
            <s.IconContainer>
              <a
                href="https://side-project-wty4.vercel.app/"
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
export default Side;
