import * as React from 'react';

import { ReactCardOrigin } from './card-origin'

type prop = {
  title:string
}

export const ReactCardOriginTitle:React.FC<prop> = prop => {
  return (
    <ReactCardOrigin>
      <h1>
        {prop.title}
      </h1>
    </ReactCardOrigin>
  );
}
