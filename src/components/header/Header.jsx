import { Logo } from "./logo/Logo";
import { NavBar } from "./navBar/NavBar";
import { Profile } from "./profile/Profile";
import { Burger } from "./burger/BurgerMenu";
import { HeaderContainer, NavWrapp, NavWrapperMobile } from "./Header.styled";
import { useState, useEffect } from "react";

export const Header = ({ setPage, user }) => {
  const [showNav, setShowNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => setShowNav(!showNav);

  return (
    <HeaderContainer>
      <NavWrapp>
        <Logo />
        {windowWidth > 768 && <NavBar setPage={setPage} />}{" "}
        <Burger showNav={showNav} toggleNav={toggleNav} />
      </NavWrapp>
      <Profile user={user} />
      {showNav && (
        <NavWrapperMobile>
          <NavBar setPage={setPage} />
        </NavWrapperMobile>
      )}
    </HeaderContainer>
  );
};
