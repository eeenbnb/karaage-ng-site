import * as React from 'react';
import styled from 'styled-components'

import { ReactCardOrigin } from './card-origin'
import { KaraageArticle } from 'src/@types/karaage-article';

// FIXME: minxin to css in js file
//import "../../styles/mixins/line-clamp.scss";

type prop = {
  article:KaraageArticle
}

const Inner = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-gap: 0 var(--size-itemDistanceMargin);
`
const InnerImage = styled.div`
  width: 120px;
  height: 120px;
`
const InnerImageImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
`
const ContentTitle = styled.h2`
  color: var(--color-Paragraph);
  font-size: 16px;
  @include line-clamp(2);
`
const ContentButton = styled.button`
  margin-top: auto;
  width: 100%;
  height: 40px;
  border: none;
  background-color: var(--color-Button);
  color: var(--color-Paragraph);
  font-size: 14px;
`

export const ReactCardOriginArticle:React.FC<prop> = prop => {
  return (
    <ReactCardOrigin>
      <Inner>
        <InnerImage>
          <InnerImageImg src={prop.article.thumbnail} alt={"記事の画像"}/>
        </InnerImage>

        <Content>
          <ContentTitle>
            {prop.article.title}
          </ContentTitle>

          <ContentButton>
            見る
          </ContentButton>
        </Content>
      </Inner>
    </ReactCardOrigin>
  );
}
