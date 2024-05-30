import { BurgerButton } from "./Burger.styled";

export const Burger = ({ toggleNav, showNav }) => {
  return (
    <BurgerButton showNav={showNav} onClick={toggleNav}>
      <div />
      <div />
      <div />
    </BurgerButton>
  );
};
