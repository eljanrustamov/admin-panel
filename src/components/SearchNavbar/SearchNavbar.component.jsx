import React from "react";
import {SearchNavbarBox} from './SearchNavbar.style'
import { AiOutlineSearch } from "react-icons/ai";

const SearchNavbar = ({focusStyle, width, border}) => {
  return (
    <SearchNavbarBox focusStyle={focusStyle} width={width} border={border}>
      <button>
        <AiOutlineSearch />
      </button>
      <input type={"text"} placeholder="Search here..." />
    </SearchNavbarBox>
  );
};

export default SearchNavbar;
