import styled from "styled-components";

export const NavBarContainer = styled.nav``;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 8px 11px 11px;
  border-radius: 8px;
  color: #9197b3;
  transition: background-color 0.2s;
  ${({ active }) =>
    active &&
    `
      background-color: #5932ea;
      color: #ffffff;

      svg {
        fill: #ffffff;
        stroke: #ffffff;
      }
    `}
  &:hover {
    background-color: #5932ea;
    color: #ffffff;

    svg {
      stroke: #ffffff;
      fill: #ffffff;
    }
  }
  & svg {
    stroke: #9197b3;
    fill: #9197b3;
  }
`;

export const NavTextWrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const NavItemText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: inherit;
  margin: 0;
  &::first-letter {
    text-transform: uppercase;
  }
`;
