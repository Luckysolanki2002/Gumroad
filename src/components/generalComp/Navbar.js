import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gumroad from "../../assets/618ea7afd990103829d614ff_gumroad-logo.svg";

const Section = styled.div`
  display: flex;
  /* border: 1px solid red; */
  border-bottom: 2px solid #000;
  padding-left: 2vw;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 100;
`;

const Menu = styled.div`
  /* border: 1px solid black; */
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
`;

const MenuItems = styled.span`
  /* border: 1px solid red; */
  margin: 0rem 2rem 0 0;
  font-size: 1.5rem;
  font-family: Darker Grotesque;
  font-weight: 500;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0%;
    top: auto;
    right: auto;
    bottom: 0%;
    width: 0%;
    background-color: black;
    height: 1px;
    transition: all 0.15s linear;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const Logo = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10vw;
  cursor: pointer;

  img {
    /* border: 1px solid red; */
  }
`;

const Options = styled.div``;

const Navbar = () => {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    console.log(path);
    if (path === "/") {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, []);

  return (
    <Section>
      {isHome ? (
        <Logo>
          <Link to="/">
            <img src={Gumroad} alt="" />
          </Link>
        </Logo>
      ) : null}
      <Menu>
        <MenuItems>
          <Link to="/features">Features</Link>
        </MenuItems>
        <MenuItems>
          <Link to="/pricing">Pricing</Link>
        </MenuItems>
        <MenuItems>
          <Link to="/university">University</Link>
        </MenuItems>
        <MenuItems>
          <Link to="/blog">Blog</Link>
        </MenuItems>
        <MenuItems>Discover</MenuItems>
      </Menu>
      <Options></Options>
    </Section>
  );
};

export default Navbar;
