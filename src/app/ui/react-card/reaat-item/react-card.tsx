import * as React from 'react';
import styled from 'styled-components';

type prop = {

}

const Wrapper = styled.div`
  padding: var(--size-itemInnerPadding);
  background-color: var(--color-Main);
  border: 3px solid var(--color-Paragraph);
  border-radius: var(--size-cardBorder);
`

export const RCComponent:React.FC<prop> = prop => {
  return (
    <Wrapper>
      sample text.
    </Wrapper>
  );
}
