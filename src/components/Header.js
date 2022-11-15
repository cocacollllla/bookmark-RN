import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../config/keys";
import { getAuth, signOut } from "firebase/auth";
import { FaBookmark } from "react-icons/fa";
import { MdArrowBackIosNew } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import styled from "styled-components";

const Header = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const currentMenu = location.pathname.split("/")[1];

  console.log(currentMenu);

  const input = useRef();

  const handleInput = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") searchHandler();
  };

  const searchHandler = () => {
    if (searchKeyword === "") {
      alert("검색어를 입력해주세요");
    } else {
      if (currentMenu === "search") {
        navigate("/search", { state: searchKeyword });
      } else {
        navigate("/booklist", { state: searchKeyword });
      }
    }
  };

  useEffect(() => {
    if (currentMenu === "search" || currentMenu === "booklist") {
      // input.current.focus();
    }
  }, [currentMenu]);

  const goBack = () => {
    if (currentMenu === "search" || currentMenu === "booklist") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  const headerLeft = () => {
    if (currentMenu === "" || currentMenu === "booklist") {
      return (
        <Logo>
          <FaBookmark className="icon logo" />
          <Title>내 기록</Title>
        </Logo>
      );
    } else if (currentMenu === "recommend") {
      return <Title>추천</Title>;
    } else if (currentMenu === "mypage") {
      return <Title>마이페이지</Title>;
    } else {
      return <MdArrowBackIosNew className="icon back" onClick={goBack} />;
    }
  };

  // const headerRight = () => {
  //   if (currentMenu === "" || currentMenu === "booklist") {
  //     return (
  //       <>
  //         <input
  //           type="text"
  //           onChange={handleInput}
  //           onKeyPress={handleOnKeyPress}
  //           autoFocus
  //           placeholder="내 독서기록에서 검색"
  //         />
  //         <HiOutlineSearch className="icon search" onClick={searchHandler} />
  //       </>
  //     );
  //   }
  // };

  return (
    // <HeaderContainer>
    //   <div>title</div>
    //   <NavBar>
    //     <div onClick={() => signOut(auth)}>logout</div>
    //     <div onClick={() => navigate("/")}>home</div>
    //     <div onClick={() => navigate("/search")}>search</div>
    //     <div onClick={() => navigate("/welcome")}>welcome</div>
    //     <div onClick={() => navigate("/login")}>login</div>
    //     <div onClick={() => navigate("/signup")}>signup</div>
    //   </NavBar>
    // </HeaderContainer>
    <HeaderContainer>
      <HeaderTopWrap>
        <HeaderLeftContainer>{headerLeft()}</HeaderLeftContainer>
        {/* <div onClick={() => signOut(auth)}>logout</div> */}
        <HeaderRightContainer>
          {(currentMenu === "" || currentMenu === "booklist") && (
            <HiOutlineSearch
              className="icon search"
              onClick={() => navigate("/booklist")}
            />
          )}
        </HeaderRightContainer>
      </HeaderTopWrap>

      <SearchBar>
        {(currentMenu === "booklist" || currentMenu === "search") && (
          <input
            type="text"
            onChange={handleInput}
            onKeyPress={handleOnKeyPress}
            ref={input}
            placeholder={
              currentMenu === "search"
                ? "알라딘에서 검색"
                : "내 독서기록에서 검색"
            }
          />
        )}
      </SearchBar>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 15px 10px 15px;
  // border-bottom: 1px solid #ddd;
  background-color: white;
  position: fixed;
  top: 0;
  z-index: 9;

  .icon {
    font-size: 24px;
  }
`;

const HeaderTopWrap = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  align-items: center;
`;

const SearchBar = styled.div`
  input {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #f1f1f1;
    border-radius: 6px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderLeftContainer = styled.div`
  width: 100%;

  .logo {
    color: ${(props) => props.theme.mainColor};
    margin-right: 10px;
  }
`;

const HeaderRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 100%;
    height: 35px;
    margin-right: 15px;
    padding-left: 10px;
    border: none;
    border-radius: 10px;
    background-color: #eee;
    vertical-align: text-top;

    &:focus {
      outline: none;
    }
  }
`;
const Title = styled.div`
  font-weight: 500;
`;
