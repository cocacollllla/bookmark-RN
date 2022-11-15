import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Loading from "../../components/Loading";

import styled from "styled-components";
// import ListResult from "../../components/ListResult";

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  let keyword = "";
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") keyword = searchKeyword;
  };

  console.log(searchKeyword);

  return (
    <SearchWrap>
      <input
        type="text"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onPress={handleOnKeyPress}
      />
    </SearchWrap>
  );
};

export default SearchBar;

const SearchWrap = styled.div`
  padding: 80px 20px;
`;

const BookList = styled.div`
  height: ${(props) => (props.keyword ? "100vh" : "auto")};
  .topBtn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 2rem;
    color: ${(props) => props.theme.mainColor};
  }
`;

const Book = styled.div`
  padding: 50px 0;
`;
