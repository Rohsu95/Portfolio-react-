import React from "react";
import * as s from "../page/Item/style";

const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const MainItem = () => {
  const Main = [
    {
      id: 11,
      url: "/image/main1.gif",
      alt: "메인 페이지",
    },
    {
      id: 12,
      url: "/image/main2.gif",
      alt: "회원 가입",
    },
    {
      id: 13,
      url: "/image/main3.gif",
      alt: "로그인",
    },
    {
      id: 14,
      url: "/image/main4.gif",
      alt: "커뮤니티",
    },
    {
      id: 15,
      url: "/image/main5.gif",
      alt: "세부 조회 페이지",
    },
    {
      id: 16,
      url: "/image/main6.gif",
      alt: "게시글 작성",
    },
    {
      id: 17,
      url: "/image/main7.gif",
      alt: "게시글 수정",
    },
    {
      id: 18,
      url: "/image/main8.gif",
      alt: "마이 페이지",
    },
    {
      id: 19,
      url: "/image/main9.gif",
      alt: "메인 페이지 수정",
    },
    {
      id: 20,
      url: "/image/main10.gif",
      alt: "등산 지도",
    },
  ];
  return (
    <s.SliderStyle {...settings}>
      {Main.map((item) => (
        <s.Img key={item.id} src={item.url} alt={item.alt} />
      ))}
    </s.SliderStyle>
  );
};

export const SideItem = () => {
  const Side = [
    {
      id: 21,
      url: "/image/side1.gif",
      alt: "회원 가입, 로그인",
    },
    {
      id: 22,
      url: "/image/side2.gif",
      alt: "게시글 작성, 좋아요, 삭제",
    },
    {
      id: 23,
      url: "/image/side3.gif",
      alt: "회원 정보 수정,이미지 업로드, 로그 아웃",
    },
    {
      id: 24,
      url: "/image/side4.gif",
      alt: "댓글 작성,삭제, 게시글 수정",
    },
  ];
  return (
    <s.SliderStyle {...settings}>
      {Side.map((item) => (
        <s.Img key={item.id} src={item.url} alt={item.alt} />
      ))}
    </s.SliderStyle>
  );
};
export const PortItem = () => {
  const Port = [
    {
      id: 31,
      url: "/image/port1.gif",
      alt: "About 페이지",
    },
    {
      id: 32,
      url: "/image/port2.gif",
      alt: "Project 페이지",
    },
    {
      id: 33,
      url: "/image/port3.gif",
      alt: "contact 페이지",
    },
  ];
  return (
    <s.SliderStyle {...settings}>
      {Port.map((item) => (
        <s.Img key={item.id} src={item.url} alt={item.alt} />
      ))}
    </s.SliderStyle>
  );
};
