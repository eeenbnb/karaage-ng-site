import * as React from 'react';
import { ReactCardOrigin } from './card-origin'

import * as cssStyle from '../../styles/react-items/item-pagination.module.wcss'

type prop = {
  count: number,
  maxCount: number,
  onClick: Function
}

export const ReactItemPagination:React.FC<prop> = prop => {
  return (
    <div className={cssStyle.default["item-pagination"]}>
      {
        [...Array(prop.maxCount)].map((_,i)=>{
          return (
            <div className={cssStyle.default["item-pagination__item"]}>
              <ReactCardOrigin isNoPadding={true}>
                <a className={cssStyle.default["item-pagination__item__inner"]} href={ i != 0 ? '/?page=' + (i + 1):"/" } onClick={(e)=>{
                  e.preventDefault();
                  prop.onClick(e,i + 1)
                }}>
                  {i + 1}
                </a>
              </ReactCardOrigin>
            </div>
          )
        })
      }
    </div>
  );
}
