import React from "react";
import { FunctionComponent } from "react";
import { ArticleType } from "../../redux/type";
import "./styles.scss";

interface ArticlesProps {
  arrArticle: Array<ArticleType>;
}

const Articles: FunctionComponent<ArticlesProps> = ({ arrArticle }) => {
  return (
    <>
      {arrArticle.map((item: ArticleType) => {
        const { title, content, image, id } = item;
        return (
          <ul className="list-unstyled" key={id}>
            <li className="media">
              <img src={image} className="mr-3" alt="..." />
              <div className="media-body">
                <h5 className="mt-0 mb-1">{title}</h5>
                {content}
              </div>
            </li>
          </ul>
        );
      })}
    </>
  );
};

export default React.memo(Articles);
