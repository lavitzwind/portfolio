import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(20, 24, 33);
  overflow: hidden;
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #fff;
`;

const Email = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
`;

const Github = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkedIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <ContactWrapper>
        <Email>
          <MailOutlineIcon
            style={{ fontSize: "3.5rem", marginRight: "10px" }}
          />
          <div>
            <h3>Email</h3>
            <a
              href="mailto:leojimlavi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              style={{
                color: "#0077B5",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              leojimlavi@gmail.com
            </a>
          </div>
        </Email>
        <Github>
          <GitHubIcon style={{ fontSize: "3.5rem", marginRight: "10px" }} />
          <div>
            <h3>Github</h3>
            <a
              href="https://github.com/lavitzwind"
              target="_black"
              rel="noopener"
              aria-label="Github"
              style={{
                color: "#0077B5",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              https://github.com/lavitzwind
            </a>
          </div>
        </Github>
        <LinkedIn>
          <LinkedInIcon style={{ fontSize: "3.5rem", marginRight: "10px" }} />
          <div>
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/leojim/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              style={{
                color: "#0077B5",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              https://www.linkedin.com/in/leojim/
            </a>
          </div>
        </LinkedIn>
      </ContactWrapper>
    </Container>
  );
};

export default Contact;
