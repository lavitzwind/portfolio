import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { desktop, tablet, mobile } from "../responsive";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(20, 24, 33);
  overflow: hidden;
  padding-bottom: 30px;
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: #fff;
  ${desktop(`
    grid-template-columns: 1fr 1fr 1fr;
  `)}
  ${tablet(`
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    margin-bottom: 20px;
  `)}
  ${mobile(`
    grid-template-columns: 1fr;
  `)}

  h3, a {
    ${desktop(`
      font-size: 0.7rem;
    `)}
    ${tablet(`
      font-size: 0.7rem;
    `)}
  }
`;

const Email = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem 0 0;
  ${tablet(`
    padding: 3rem 1rem 0 0;
  `)}
`;

const Github = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem 0 0;
  ${tablet(`
    padding: 3rem 1rem 0 0;
  `)}
`;

const LinkedIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem 0 0;
  ${tablet(`
  grid-column: span 2;
  padding: 3rem 1rem 0 0;
  `)}
  ${mobile(`
  grid-column: span 1;
  `)}
`;

const Contact = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 769px)" });

  return (
    <Container id="contact">
      <ContactWrapper>
        {isTablet ? (
          <>
            <Email>
              <MailOutlineIcon
                style={{ fontSize: "2.5rem", marginRight: "10px" }}
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
              <GitHubIcon style={{ fontSize: "2.5rem", marginRight: "10px" }} />
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
              <LinkedInIcon
                style={{ fontSize: "2.5rem", marginRight: "10px" }}
              />
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
          </>
        ) : (
          <>
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
              <LinkedInIcon
                style={{ fontSize: "3.5rem", marginRight: "10px" }}
              />
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
          </>
        )}
      </ContactWrapper>
    </Container>
  );
};

export default Contact;
