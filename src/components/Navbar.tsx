import styled from "styled-components";
import { useState, useEffect } from "react";
import { desktop, tablet, mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4rem;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 4rem 0;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  ${desktop(`
      padding: 0 0 0 0;
  `)}
`;

const ItemRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  ${tablet(`
    justify-content: center;
  `)}
  ${mobile(`
    display: none;
  `)}

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
          color: rgb(255 255 255 / 1);
          border-bottom: 1px solid rgb(107 114 128 / 1);
          border-bottom-width: 4px;
        }
      }
    }
  }
`;

const Hamburger = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
  display: none;
  ${mobile(`
    display: flex;
  `)}

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;

    li {
      div {
        background: transparent;
        border: none;
        outline: none;
        top: 15px;
        right: 30px;
        position: absolute;
        width: 35px;
        z-index: 100;

        &:hover {
          cursor: pointer;
        }
      }
      div span {
        background: #fff;
        content: "";
        display: block;
        height: 4px;
        border-radius: 3px;
        margin: 7px 0;
        transition: all 0.5s;
      }
    }
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  background-color: hsl(220, 45%, 9%);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: -100vw;
  margin: 0;
  padding: 0;
  list-style: none;

  ul {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    list-style: none;
    margin: 0 0 0 30px;
    padding: 0;

    li {
      margin: 0;
      padding: 0;
      font-size: 4rem;
      font-weight: bold;

      a {
        text-decoration: none;
        color: rgb(255 255 255 / 1);
        padding-bottom: 0.3rem;
        transition: all 0.1s ease-in;

        &:hover {
          color: rgb(255 255 255 / 1);
          border-bottom: 1px solid rgb(107 114 128 / 1);
          border-bottom-width: 3px;
        }
      }
    }
  }
`;

const Navbar = () => {
  const [navSize, setNavSize] = useState("4rem");
  const [navColor, setNavColor] = useState("transparent");
  const [open, setOpen] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 150
      ? setNavColor("rgba(0,0,0, 0.8)")
      : setNavColor("transparent");
    window.scrollY > 150 ? setNavSize("2rem") : setNavSize("4rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <Container
      style={{
        backgroundColor: navColor,
        padding: navSize,
        transition: "all 0.7s",
      }}
    >
      <Wrapper>
        <ItemRight>
          <ul>
            <li>
              <a href="/portfolio/#">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </ItemRight>
        <Hamburger>
          <ul>
            <li>
              <div onClick={() => setOpen(!open)}>
                <span
                  style={{
                    transform: open
                      ? "translateY(12px) rotate(135deg)"
                      : "translateY(0) rotate(0)",
                    transition: "all 0.5s",
                  }}
                ></span>
                <span
                  style={{
                    transform: open ? "scale(0)" : "scale(1)",
                    transition: "all 0.5s",
                  }}
                ></span>
                <span
                  style={{
                    transform: open
                      ? "translateY(-10px) rotate(-135deg)"
                      : "translateY(0) rotate(0)",
                    transition: "all 0.5s",
                  }}
                ></span>
              </div>
            </li>
          </ul>
        </Hamburger>
      </Wrapper>
      <Menu
        style={{
          transform: open ? "translateX(100vw)" : "translateX(-100vw)",
        }}
      >
        <ul>
          <li onClick={() => setOpen(false)}>
            <a href="/#">Home</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="/#projects">Projects</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="/#about">About</a>
          </li>
          <li onClick={() => setOpen(false)}>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export default Navbar;
