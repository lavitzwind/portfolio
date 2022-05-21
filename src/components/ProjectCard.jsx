import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import AirplayIcon from "@mui/icons-material/Airplay";

const Container = styled.div`
  margin: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgb(0 0 0 / 20%);
  overflow: hidden;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
    border-style: none;
  }
`;

const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 0 15px 0;
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
    margin: 0 0 0 5px;
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
  }

  p {
    font-size: 1rem;
    margin: 10px 0;
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

const ProjectCard = ({ project }) => {
  return (
    <Container>
      <img src={project.image} alt="" />
      <CardBody>
        <div>
          <span>react</span>
          <span>nodejs</span>
          <span>express</span>
          <span>mongodb</span>
          <span>nextjs</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <button>
          <a href="/">
            <AirplayIcon /> Demo
          </a>
        </button>
        <button>
          <a href="/">
            <GitHubIcon /> Github Code
          </a>
        </button>
      </CardBody>
    </Container>
  );
};

export default ProjectCard;
