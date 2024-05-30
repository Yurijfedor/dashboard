import { useState } from "react";
import {
  InputWrapper,
  InputStyled,
  InputIcon,
  IconWrapp,
} from "./Filter.styled";

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    event.target.value === "" && onSearch("");
  };

  return (
    <InputWrapper>
      <IconWrapp onClick={handleSearch}>
        <InputIcon name={"icon-search-1-min"} />
      </IconWrapp>

      <InputStyled
        placeholder="Search"
        type="text"
        value={searchTerm}
        onChange={handleChange}
      />
    </InputWrapper>
  );
};
