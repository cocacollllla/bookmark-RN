import { useState } from "react";
import { bookApi } from "../../api/axios";

const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const onChangeSearchKeywordHandler = (e) => {
    setSearchKeyword(e.target.value);
  };

  const searchHandler = async () => {
    const result = await bookApi.search(searchKeyword, 1);
    setSearchResult(result.data.item);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="검색"
        value={searchKeyword}
        onChange={onChangeSearchKeywordHandler}
      />
      <div onClick={searchHandler}>검색</div>

      <div>
        {searchResult.map((el) => (
          <div key={el.isbn}>
            <div>{el.title}</div>
            <div>{el.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
