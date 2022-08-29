import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #000033;
  width: 100vw;
  padding: 15px;
`;

export const List = styled.ul`
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Link = styled(NavLink)`
  margin-right: 50px;
  color: #efa500;
  font-size: 1.5rem;

  &:hover {
    border-bottom: 3px solid #efa500;
  }

  &.active {
    border-bottom: 3px solid #efa500;
  }

  @media (max-width: 540px) {
    display: none;
  }
`;

export const NavBarButton = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  cursor: pointer;

  span {
    width: 100%;
    height: 2px;
    background-color: #efa500;
    transform-origin: 1px;
    transition: all 0.3s linear;
    display: inline-block;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(30deg) " : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "scale(0.1)" : "")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-30deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 540px) {
    display: none;
  }
`;

export const BurgerLink = styled(NavLink)`
  color: #efa500;
  font-family: 1rem;

  &.active {
    border-bottom: 1px solid #efa500;
  }
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  display: ${({ open }) => (open ? "block" : "none")};

  div {
    text-align: center;
  }

  @media (min-width: 540px) {
    display: none;
  }
`;
