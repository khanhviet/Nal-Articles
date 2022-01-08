import {
  RootArticle,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_SORT_SUCCESS,
  GET_ARTICLES_FAIL,
  GET_ARTICLES_REQUESTED,
  GET_ARTICLES_SORT_REQUESTED,
  GET_ARTICLES_SORT_FAIL,
} from "../type";

const initialState: RootArticle = {
  articles: [],
  isLoading: false,
  message: "",
};

const Articles = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ARTICLES_SORT_REQUESTED:
    case GET_ARTICLES_REQUESTED:
      return {
        ...state,
        articles: [],
        isLoading: true,
      };

    case GET_ARTICLES_SUCCESS:
    case GET_ARTICLES_SORT_SUCCESS:
      return {
        ...state,
        articles: action.article,
        isLoading: false,
      };
    case GET_ARTICLES_SORT_FAIL:
    case GET_ARTICLES_FAIL:
      return {
        ...state,
        message: action.message,
      };

    default:
      return state;
  }
};
export default Articles;
