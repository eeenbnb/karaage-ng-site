import * as React from 'react';
import styled from 'styled-components'

import { ReactCardOrigin } from './card-origin'

type prop = {
  title:string
}

const Title = styled.h1`
`

export const ReactCardOriginTitle:React.FC<prop> = prop => {
  return (
    <ReactCardOrigin>
      <Title>
        {prop.title}
      </Title>
    </ReactCardOrigin>
  );
}
