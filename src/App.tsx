import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Articles from "./components/articles";
import {
  GET_ARTICLES_REQUESTED,
  GET_ARTICLES_SORT_REQUESTED,
} from "./redux/type";
interface RootState {
  articles: any;
}

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState<number>(1);
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const { articles = [], isLoading } = useSelector(
    (state: RootState) => state.articles
  );

  const sortBy = useMemo(
    () => [
      {
        id: "1",
        text: "CreateAt Desc",
        value: "desc",
      },
      {
        id: "2",
        text: "CreateAt Asc",
        value: "asc",
      },
    ],
    []
  );

  const onGetArticles = useCallback(
    (page = 1) => {
      dispatch({
        type: GET_ARTICLES_REQUESTED,
        payload: { page },
      });
    },
    [dispatch]
  );

  const onGetSortBy = (name: any, order: any) => {
    dispatch({
      type: GET_ARTICLES_SORT_REQUESTED,
      payload: { name, order, page },
    });
  };

  const handleClickSort = (value: string) => {
    onGetSortBy("createdAt", value);
  };

  const handleOption = (value: string) => {
    setIsShowDropdown(false);
    handleClickSort(value);
  };

  useEffect(() => {
    onGetArticles(page);
  }, [dispatch, onGetArticles, page]);
  return (
    <div className="App">
      <div
        className="dropdown"
        onClick={() => setIsShowDropdown((prev) => !prev)}
      >
        <span>Sort By</span>
        {isShowDropdown && (
          <div className="dropdown-content">
            {sortBy.map((item) => (
              <p
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOption(item.value);
                }}
              >
                {item.text}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend"></div>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      {isLoading && <p>loding...</p>}
      {!isLoading && <Articles arrArticle={articles} />}

      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link">Previous</button>
          </li>
          {Array.from(Array(10).keys()).map((item) => (
            <li
              className="page-item"
              key={item}
              onClick={(e) => {
                e.preventDefault();
                setPage(item + 1);
              }}
            >
              <button className="page-link">{item + 1}</button>
            </li>
          ))}

          <li className="page-item">
            <button className="page-link">Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
