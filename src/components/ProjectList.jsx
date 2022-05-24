import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { projects } from "../projects";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5rem;
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);

  h2 {
    font-size: 5rem;
    font-weight: bold;
    margin-bottom: 5rem;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <h2>Projects</h2>
        <ProjectWrapper>
          {projects.map((project) => {
            return <ProjectCard project={project} key={project._id} />;
          })}
        </ProjectWrapper>
      </Wrapper>
    </Container>
  );
};

export default Projects;
