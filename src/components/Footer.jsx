import styled from "styled-components";
import { tablet, mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(20, 24, 33);
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  color: #fff;
  padding: 1.5rem;
  border-top: 2px solid #555;
  border-radius: 10px;

  span {
    font-size: 0.8rem;
    letter-spacing: 0.065em;
    text-align: center;
    ${tablet(`
      font-size: 0.7rem;
    `)}
    ${mobile(`
      font-size: 0.52rem;
    `)}
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <span>© Leonardo Jimenez | 2022</span>
      </Wrapper>
    </Container>
  );
};

export default Footer;
