import styled from "styled-components";

export const BurgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: relative;
    padding: 0;
    margin-left: 16px;
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 2px;
      background-color: #000;
      transition: all 0.3s ease-in-out;

      &:nth-child(1) {
        transform: ${({ showNav }) =>
          showNav
            ? "translate(-50%, -50%) rotate(45deg)"
            : "translate(-50%, 150%) rotate(0deg)"};
      }

      &:nth-child(2) {
        opacity: ${({ showNav }) => (showNav ? 0 : 1)};
      }

      &:nth-child(3) {
        transform: ${({ showNav }) =>
          showNav
            ? "translate(-50%, -50%) rotate(-45deg)"
            : "translate(-50%, -250%) rotate(0deg)"};
      }
    }
  }
`;
