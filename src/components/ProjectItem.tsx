import React from "react";
import { styled } from "styled-components";
import theme from "../styles/Theme";
import { HashLink } from "react-router-hash-link";

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
const AMove = styled(HashLink)`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  span {
    border: 2px solid ${theme.colors.font};
    color: ${theme.colors.font};
    border-radius: 10px;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
interface ProjectItemProps {
  project: string;
  url: string;
  id: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, url, id }) => {
  return (
    <SectionContainer key={id}>
      <Img src={url} alt="mainImg" />
      <AMove to={`/${project}`}>
        <span>더 보기</span>
      </AMove>
    </SectionContainer>
  );
};
export default ProjectItem;
