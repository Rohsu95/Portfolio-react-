import React from "react";
import { styled } from "styled-components";
import theme from "../../styles/Theme";
// import ProjectItem from "../../components/ProjectItem";

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
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  width: 550px;
  height: 400px;
  border-radius: 15px;
  @media ${theme.media.height} {
    width: 400px;
    height: 300px;
  }
  @media ${theme.media.phone} {
    width: 300px;
    height: 250px;
  }
`;
const AMove = styled.a`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  a {
    border: 2px solid ${theme.colors.font};
    color: ${theme.colors.font};
    border-radius: 10px;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${theme.media.phone} {
      width: 150px;
      height: 40px;
    }
  }
`;

const Project = () => {
  const item = [
    {
      id: "1",
      project: "main",
      url: "/image/mainP.jpg",
    },
    {
      id: "2",
      project: "side",
      url: "/image/side.jpg",
    },
    {
      id: "3",
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
        {/* {item.map((el, idx) => (
          <ProjectItem key={idx} project={el.project} url={el.url} id={el.id} />
        ))} */}
        <SectionContainer>
          <Img src="/image/side.jpg" alt="preImg" />
          <AMove>
            <a>더 보기</a>
          </AMove>
        </SectionContainer>
        <SectionContainer>
          <Img src="/image/port.jpg" alt="preImg" />
          <AMove>
            <a>더 보기</a>
          </AMove>
        </SectionContainer>

        <SectionContainer>
          <Img src="/image/port.jpg" alt="preImg" />
          <AMove>
            <a>더 보기</a>
          </AMove>
        </SectionContainer>
      </ImgContainer>
    </main>
  );
};

export default Project;
