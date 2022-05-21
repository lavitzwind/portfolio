import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 4rem;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 4rem 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const ItemRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    margin: 0 2rem 0 0;
    padding: 0;

    li {
      margin-left: 2rem;
      font-size: 1.5rem;
      cursor: pointer;

      a {
        text-decoration: none;
        color: rgb(107 114 128 / 1);
        padding-bottom: 0.5rem;
        transition: all 0.1s ease-in;

        &:hover {
          color: rgb(17 24 39 / 1);
          border-bottom: 1px solid rgb(107 114 128 / 1);
          border-bottom-width: 4px;
        }
      }
    }
  }
`;

const navbar = () => {
  return (
    <Container>
      <Wrapper>
        <ItemRight>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </ItemRight>
      </Wrapper>
    </Container>
  );
};

export default navbar;
