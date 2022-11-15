import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import Loading from "../../components/Loading";
import Target from "./Target";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { bookApi, getBookListData } from "../../api/axios";
import styled from "styled-components";
import Loading from "../../components/Loading";
// import ListResult from "../../components/ListResult";

const Search = () => {
  // const [searchKeyword, setSearchKeyword] = useState("");
  // const [searchKeyword2, setSearchKeyword2] = useState(() => {
  //   return window.sessionStorage.getItem("keyword") || "";
  // });
  // const [searchKeyword2, setSearchKeyword2] = useState("");
  const [searchResultList, setSearchResultList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalResult, setTotalResult] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const keyword = location.state;

  console.log(location);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await bookApi.search(keyword, page);
      if (page === 1) {
        setSearchResultList(result.data.item);
        console.log(result);
        window.scrollTo(0, 0);
      } else {
        setSearchResultList((prev) => [...prev, ...result.data.item]);
      }
      setTotalResult(result.data.totalResults);
      setLoading(false);
    };

    if (keyword !== null) {
      getData();
    }
  }, [page, keyword]);

  useEffect(() => {
    setPage(1);
    setTotalResult(null);
    setSearchResultList([]);
  }, [keyword]);

  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     const result = await bookApi.search(keyword, page);
  //     if (page === 1) {
  //       setSearchResultList(result.data.item);
  //       window.scrollTo(0, 0);
  //     } else {
  //       setSearchResultList((prev) => [...prev, ...result.data.item]);
  //     }
  //     setTotalResult(result.data.totalResults);
  //     setLoading(false);
  //   };

  //   if (keyword !== null) {
  //     getData();
  //   }
  // }, [page, keyword]);

  // useEffect(() => {
  //   setPage(1);
  //   setTotalResult(null);
  //   setSearchResultList([]);
  // }, [keyword]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookInfoClickHandler = (id) => {
    navigate(`/bookinfo/${id}`);
  };

  // if (loading) {
  //   return <Loading />;
  // }
  console.log(loading);
  return (
    <>
      {page === 1 && loading ? (
        <Loading />
      ) : (
        <SearchWrap>
          {/* <SearchBar /> */}
          {/* <SearchBar>
        <input
          type="text"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          onKeyPress={handleOnKeyPress}
          autoFocus
        />
      </SearchBar> */}

          <BookList>
            {/* <ListResult bookList={searchResultList} /> */}
            {searchResultList !== undefined &&
              searchResultList.map((book) => (
                <Book
                  key={book.isbn}
                  onClick={() => bookInfoClickHandler(book.isbn)}
                >
                  {book.title}
                </Book>
              ))}
            {page >= 2 && (
              <BsArrowUpCircleFill className="topBtn" onClick={scrollToTop} />
            )}
          </BookList>
          {searchResultList !== undefined &&
            totalResult !== searchResultList.length &&
            searchResultList.length !== 0 && (
              <Target loading={loading} setPage={setPage} />
            )}
        </SearchWrap>
      )}
    </>
  );
};

export default Search;

const SearchWrap = styled.div`
  padding: 10px 0;
`;

const SearchBar = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  padding: 10px;
  background-color: white;

  input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 6px;
    background-color: #f3f3f3;

    &:focus {
      outline: none;
    }
  }
`;

const BookList = styled.div`
  height: ${(props) => (props.keyword ? "100vh" : "auto")};
  margin-top: 10px;
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
