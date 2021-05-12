import * as React from 'react';
import styled from 'styled-components'

import { ReactCardOrigin } from './card-origin'
import { KaraageArticle } from 'src/@types/karaage-article';

// FIXME: minxin to css in js file
//import "../../styles/mixins/line-clamp.scss";

type prop = {
  article:KaraageArticle
}

export const ReactCardOriginArticle:React.FC<prop> = prop => {
  return (
    <ReactCardOrigin>
      <div className="card-origin-article">
        <div className="card-origin-article__image">
          <img  className="card-origin-article__image__img" src={prop.article.thumbnail} alt={"記事の画像"}/>
        </div>

        <div className="card-origin-article__content">
          <h2 className="card-origin-article__content__title">
            {prop.article.title}
          </h2>

          <button className="card-origin-article__content__button">
            見る
          </button>
        </div>
      </div>
    </ReactCardOrigin>
  );
}
