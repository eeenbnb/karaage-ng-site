import * as React from 'react';

import { ReactCardOrigin } from './card-origin'
import { KaraageArticle } from 'src/@types/karaage-article';

import * as cssStyle from '../../styles/react-items/card-origin-article.module.wcss'

type prop = {
  article:KaraageArticle
}

export const ReactCardOriginArticle:React.FC<prop> = prop => {
  return (
    <ReactCardOrigin>
      <div className={cssStyle.default["card-origin-article"]}>
        <div className={cssStyle.default["card-origin-article__image"]}>
          <img  className={cssStyle.default["card-origin-article__image__img"]} src={prop.article.thumbnail} alt={"記事の画像"}/>
        </div>

        <div className={cssStyle.default["card-origin-article__content"]}>
          <h2 className={cssStyle.default["card-origin-article__content__title"]}>
            {prop.article.title}
          </h2>

          <button className={cssStyle.default["card-origin-article__content__button"]}>
            見る
          </button>
        </div>
      </div>
    </ReactCardOrigin>
  );
}
