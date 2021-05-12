import * as React from 'react';

type prop = {
  isNoPadding?:boolean
}
// padding: var(--size-itemInnerPadding);
// background-color: var(--color-Main);
// border: 3px solid var(--color-Paragraph);
// border-radius: var(--size-cardBorder);
export const ReactCardOrigin:React.FC<prop> = prop => {
  let style = {
    padding: prop.isNoPadding ? "0px":""
  }
  return (
    <div className="card-origin" style={style}>
      {prop.children}
    </div>
  );
}
