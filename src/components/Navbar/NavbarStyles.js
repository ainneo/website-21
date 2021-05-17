import styled from "styled-components";
//write alias so we don't get mixed up the links
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 10;
  background: #171717;

  //mq will excute these styles at this break point
  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%; /* 100% of the max-width 1100px*/
  max-width: 1200px;
  padding: 0 20px;
`;

//name it Link bc that is what we are using in from router
export const NavLogo = styled(LinkR)`
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  /* animation: shake 0.8s; */
  animation: 9s shake infinite alternate;
  /* shakin */
  @keyframes shake {
    0% {
      transform: skewX(-15deg);
    }
    5% {
      transform: skewX(15deg);
    }
    1% {
      transform: skewX(-15deg);
    }
    15% {
      transform: skewX(15deg);
    }
    20% {
      transform: skewX(0deg);
    }
    100% {
      transform: skewX(0deg);
    }
  }

  &:hover {
    color: grey;
    transition: 0.2s ease-in-out;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  // mq will excute Icons at this breakpoint
  @media screen and (max-width: 786px) {
    display: block;
    cursor: pointer;
    color: #fff;
    font-size: 1.5rem;
    padding-top: 10px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const NavMenuItem = styled.li`
  height: 80px;
  /* &.active {
    border-bottom: 3px solid #01bf71;
  } */
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: grey;
    transition: 0.2s ease-in-out;
  }
`;
