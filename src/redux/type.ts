export const GET_ARTICLES_REQUESTED = "GET_ARTICLES_REQUESTED";
export const GET_ARTICLES_SUCCESS = "GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAIL = "GET_ARTICLES_FAIL";
export const GET_ARTICLES_SORT_REQUESTED = "GET_ARTICLES_SORT_REQUESTED";
export const GET_ARTICLES_SORT_SUCCESS = "GET_ARTICLES_SORT_SUCCESS";
export const GET_ARTICLES_SORT_FAIL = "GET_ARTICLES_SORT_FAIL";
export interface RootArticle {
  articles: Array<ArticleType>;
  isLoading: boolean;
  message: string;
}
export interface ArticleType {
  createdAt?: string;
  title: string;
  image: any;
  content: string;
  id: string;
}
