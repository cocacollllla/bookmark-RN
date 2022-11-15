import { useState } from "react";
// import { useDispatch } from "react-redux";
import { bookApi } from "../../api/axios";
import Bottom from "../../components/Bottom";
import styled from "styled-components";
// import { headerActions } from "../../store/header/header-slice";

const BookList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(
  //     headerActions.replaceTitle([
  //       { title: "달력", button: [{ edit: "ㅋㅋ" }] },
  //     ])
  //   );
  // }, [dispatch]);

  const onChangeSearchKeywordHandler = (e) => {
    setSearchKeyword(e.target.value);
  };

  const searchHandler = async () => {
    const result = await bookApi.search(searchKeyword, 1);
    setSearchResult(result.data.item);
  };

  return (
    <Container>
      <div></div>
      <Bottom />
    </Container>
  );
};

export default BookList;

const Container = styled.div`
  width: 100%;
`;
