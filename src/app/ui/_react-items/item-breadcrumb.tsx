import * as React from 'react';
import styled from 'styled-components'

import { ReactCardOrigin } from './card-origin'
import { KaraageBreadcrumbs } from 'src/@types/karaage-breadcrumb';

type prop = {
  breadcrumbs:KaraageBreadcrumbs
}

const List = styled.ol`
  list-style: none;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
`

const One = styled.li`
  margin-left: 4px;
  white-space: nowrap;
  a{
    color: var(--color-Highlight);
    font-size: 16px;
  }
  &:not(:last-of-type):after{
    content: " > ";
    margin-right: 4px;
  }
`

export const ReactItemBreadcrumb:React.FC<prop> = prop => {
  return (
    <ReactCardOrigin>
      <List attr-itemscope attr-itemtype="https://schema.org/BreadcrumbList">
        {
          prop.breadcrumbs.map((breadcrumb,i)=>{
            return (
              <One attr-itemprop="itemListElement" attr-itemscope attr-itemtype="https://schema.org/ListItem">
                <a attr-itemprop="item" href={breadcrumb.path.join("/")}>
                  <span attr-itemprop="name">{breadcrumb.name}</span>
                </a>
                <meta attr-itemprop="position" attr-content={i}/>
              </One>
            )
          })
        }
      </List>
    </ReactCardOrigin>
  );
}
