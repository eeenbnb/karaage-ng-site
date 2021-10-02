import * as React from 'react';

import * as cssStyle from '../../styles/react-items/card-origin.module.wcss'

type prop = {
  isNoPadding?:boolean
}

export const ReactCardOrigin:React.FC<prop> = prop => {
  let style = {
    padding: prop.isNoPadding ? "0px":""
  }
  return (
    <div className={cssStyle.default["card-origin"]} style={style}>
      {prop.children}
    </div>
  );
}
