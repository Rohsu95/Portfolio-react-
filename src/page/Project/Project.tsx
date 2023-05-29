import React from "react";
import { styled } from "styled-components";
import theme from "../../styles/Theme";
import { ProjectItem } from "../../components/ProjectItem";

const Project = () => {
  const item = [
    {
      id: 1,
      project: "main",
      url: "/image/mainP.jpg",
    },
    {
      id: 2,
      project: "side",
      url: "/image/side.jpg",
    },
    {
      id: 3,
      project: "port",
      url: "/image/port.jpg",
    },
  ];
  return (
    <main>
      <TitleContainer>
        <MainTitle>Project</MainTitle>
      </TitleContainer>
      <ImgContainer>
        {item.map((el, idx) => (
          <ProjectItem key={idx} project={el.project} url={el.url} id={el.id} />
        ))}
      </ImgContainer>
    </main>
  );
};

const TitleContainer = styled.section`
  display: flex;
  justify-content: center;
  height: 25vh;
  align-items: center;
`;
const MainTitle = styled.h1`
  font-size: 6rem;
  margin-bottom: 3rem;
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
const ImgContainer = styled.article`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Project;
