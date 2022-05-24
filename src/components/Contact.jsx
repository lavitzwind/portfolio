import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(20, 24, 33);
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Contact = () => {
  return (
    <Container>
      <ContactWrapper></ContactWrapper>
    </Container>
  );
};

export default Contact;
