import { useState } from "react";
import {
  NavBarContainer,
  NavList,
  NavItem,
  NavItemText,
  NavTextWrapp,
} from "./NavBar.styled";
import { Icon } from "../../icon/Icon";

export const NavBar = ({ setPage }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const pages = [
    "dashboard",
    "product",
    "customers",
    "income",
    "promote",
    "help",
  ];

  const handleClick = (index, page) => {
    setActiveIndex(index === activeIndex ? -1 : index);
    setPage(page);
  };

  return (
    <NavBarContainer>
      <NavList>
        {pages.map((page, index) => (
          <NavItem
            key={page}
            active={index === activeIndex}
            onClick={() => handleClick(index, page)}
          >
            <NavTextWrapp>
              <Icon
                name={page}
                fill={index === activeIndex && "#ffffff"}
                stroke={index === activeIndex && "#ffffff"}
              />
              <NavItemText>{page}</NavItemText>
            </NavTextWrapp>
            <Icon
              name="icon-chevron-right-2-min"
              fill={index === activeIndex && "#ffffff"}
              stroke={index === activeIndex && "#ffffff"}
            />
          </NavItem>
        ))}
      </NavList>
    </NavBarContainer>
  );
};
