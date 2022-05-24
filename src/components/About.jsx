import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: rgb(20, 24, 33);
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5rem 15rem;
  box-shadow: 0 2px 20px rgb(0 0 0 / 15%);

  h2 {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 4rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #fff;
  }

  hr {
    width: 20%;
  }

  p {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1.3rem;
    margin-top: 1.5rem;
    color: #fff;
    width: 80%;
    line-height: 2;

    a {
      color: #0077b5;
      margin-left: 0.5rem;
    }
  }
`;

const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <h2>About</h2>
        <hr />
        <p>
          I'm a web developer and telecom engineer currently located in Peru.
        </p>
        <p>
          I always loved automating, and building stuff that changes the way of
          we do things, and how people live. I really enjoy solving challenging
          problems, over-engineering stuff and building products with people,
          and for the people. Although I'm a web developer, I spent significant
          time on designing a product and preparing it for the market.
        </p>
        <p>
          I can help build or optimize your website or application. Whether it's
          the front, back, or middle of the stack, I'm open to collaborating on
          your digital needs in whatever way I can.
        </p>
        <p>
          If you need help or just wanna meet,
          <a href="#contact">let's connect!</a>
        </p>
      </Wrapper>
    </Container>
  );
};

export default About;
