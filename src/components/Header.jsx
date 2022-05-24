import styled from "styled-components";
import Navbar from "./Navbar";
import TypeIt from "typeit-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  box-shadow: 0 2px 20px rgb(0 0 0 / 55%);
  overflow: hidden;
`;

const HeaderVideo = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center center;
  filter: brightness(0.5);
  z-index: -100;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  padding: 10% 15% 15% 10%;

  h1 {
    z-index: 1;
    font-size: 4.5rem;
    text-shadow: rgb(255 255 255 / 25%) 0px 5px 35px;
    letter-spacing: 0.025em;
    margin: 0 0 2rem 0;
  }

  hr {
    width: 70%;
  }

  p {
    z-index: 1;
    font-size: 2rem;
    text-shadow: 0.1rem 0.1rem 0.5rem black;
    margin: 2rem 0 3rem 0;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
  width: 70%;
  margin: 0 auto;

  a {
    z-index: 1;
    margin: 0 1rem;
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    transform: scale(1.3);

    &:hover {
      color: #bbb;
      transform: scale(1.4);
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <Navbar />
      <HeaderVideo autoPlay loop muted playsInline>
        <source src="assets/headerBg.mp4" type="video/mp4" />
      </HeaderVideo>
      <ContentWrapper>
        <h1>Hello, I'm Leonardo.</h1>
        <hr />
        <p>I'm a web developer and telecom engineer.</p>
        <TypeIt
          element={`p`}
          style={{
            zIndex: 1,
            fontSize: "1.5rem",
            textShadow: "0.1rem 0.1rem 0.5rem black",
            margin: "0 0 3rem 0",
          }}
          options={{
            speed: 100,
            nextStringDelay: 750,
            waitUntilVisible: true,
            startDelete: true,
            loop: true,
          }}
          getBeforeInit={(instance) => {
            instance
              .pause(1500)
              .delete(26)
              .pause(200)
              .type("designing REST API-based applications.")
              .pause(1500)
              .delete(38)
              .pause(200)
              .type("playing with APIs.")
              .pause(1500)
              .delete(18)
              .pause(200)
              .type("building great products for society.");
            // Remember to return it!
            return instance;
          }}
        >
          I love building web applications.
        </TypeIt>
        <IconsContainer>
          <a
            href="https://github.com/lavitzwind"
            target="_black"
            rel="noopener"
            aria-label="Github"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/leojim/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:leojimlavi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <MailOutlineIcon />
          </a>
        </IconsContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Header;
