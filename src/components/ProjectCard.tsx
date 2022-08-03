import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import AirplayIcon from "@mui/icons-material/Airplay";
import { desktop, tablet } from "../responsive";
import { ProjectCardProps } from "../types/projectCardProps";

const Container = styled.div`
  margin: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);
  overflow: hidden;
  width: 350px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  ${desktop(`
    width: 320px;
  `)}
  ${tablet(`
    width: 320px;
  `)}

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    border-style: none;
    filter: brightness(1);

    &:hover {
      cursor: pointer;
      filter: brightness(1.15);
    }
  }
`;

const CardBody = styled.div`
  position: relative;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  overflow: hidden;
  ${desktop(`
    padding: 1rem;
  `)}
  ${tablet(`
    padding: 1rem;
  `)}

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 0 25px 0;
  }

  span:nth-child(1) {
    background: var(--react);
    border-radius: 50px;
    font-size: 12px;
    margin: 0 0 0 5px;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }

  span:nth-child(2) {
    background: var(--node);
    border-radius: 50px;
    font-size: 12px;
    margin: 0 0 0 5px;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }

  span:nth-child(3) {
    background: var(--express);
    border-radius: 50px;
    font-size: 12px;
    margin: 0 0 0 5px;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }

  span:nth-child(4) {
    background: var(--mongodb);
    border-radius: 50px;
    font-size: 12px;
    margin: 0 0 0 5px;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }

  span:nth-child(5) {
    background: var(--nextjs);
    border-radius: 50px;
    font-size: 12px;
    margin: 0 0 -20px 5px;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      filter: brightness(1.2);
    }
  }

  h3 {
    font-size: 1.5rem;
    ${tablet(`
      font-size: 1.3rem;
    `)}
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 0.9rem;
    margin: 10px 0;
    color: #666;
    line-height: 1.6;
  }

  button {
    background: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1rem;
    margin: 2px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
    }

    a {
      width: 100%;
      height: 35px;
      color: #000;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      letter-spacing: 1.5px;

      &:hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
`;

const CenterBtn = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Container>
      <a href={project.demo} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt="" />
      </a>
      <CardBody>
        <div>
          {project.technologies.map((tech, index) => {
            return <span key={index}>{tech}</span>;
          })}
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <CenterBtn>
          <button>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <AirplayIcon /> Demo
            </a>
          </button>
          <button>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> Github Code
            </a>
          </button>
        </CenterBtn>
      </CardBody>
    </Container>
  );
};

export default ProjectCard;
