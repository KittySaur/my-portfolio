import React from "react";
import {
  StyledNavbar,
  List,
  Link,
  NavBarButton,
  BurgerMenu,
  BurgerLink,
} from "./NavBar.styled";
import { useState } from "react";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <StyledNavbar>
      <List>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About me</Link>
        <Link to={"/projects"}>Projects</Link>
        <NavBarButton open={open} onClick={() => setOpen(!open)}>
          <span key={1} />
          <span key={2} />
          <span key={3} />
        </NavBarButton>

        <BurgerMenu open={open}>
          <div>
            <BurgerLink to={"/"}>Home</BurgerLink>
          </div>
          <div>
            <BurgerLink to={"/about"}>About me</BurgerLink>
          </div>
          <div>
            <BurgerLink to={"/projects"}>Projects</BurgerLink>
          </div>
        </BurgerMenu>
      </List>
    </StyledNavbar>
  );
}

export default NavBar;
