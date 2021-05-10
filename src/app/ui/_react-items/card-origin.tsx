import * as React from 'react';
import styled from 'styled-components';

type prop = {
  isNoPadding?:boolean
}

const Wrapper = styled.div`
  padding: var(--size-itemInnerPadding);
  background-color: var(--color-Main);
  border: 3px solid var(--color-Paragraph);
  border-radius: var(--size-cardBorder);
`

export const ReactCardOrigin:React.FC<prop> = prop => {
  let style = {
    padding: prop.isNoPadding ? "0px":""
  }
  return (
    <Wrapper style={style}>
      {prop.children}
    </Wrapper>
  );
}
