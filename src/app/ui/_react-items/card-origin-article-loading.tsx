import * as React from 'react';

import { ReactCardOrigin } from './card-origin'
import * as cssStyle from '../../styles/react-items/card-origin-article-loading.module.wcss'

export const ReactCardOriginArticleLoading:React.FC = () => {
  return (
    <ReactCardOrigin>
      <div className={cssStyle.default["card-origin-article-loading"]}>
        <div className={cssStyle.default["card-origin-article-loading__image"]}/>

        <div className={cssStyle.default["card-origin-article-loading__content"]}>
          <div className={cssStyle.default["card-origin-article-loading__content__title"]}/>
        </div>
      </div>
    </ReactCardOrigin>
  );
}
