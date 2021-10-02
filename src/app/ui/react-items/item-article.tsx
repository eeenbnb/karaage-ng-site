import * as React from 'react';
import * as ReactMarkdown from 'react-markdown'
import * as RehypeRaw from 'rehype-raw'
import { ReactCardOrigin } from './card-origin'

type prop = {
  articleText:string
}

export const ReactItemArticle:React.FC<prop> = prop => {
  return (
    <ReactCardOrigin>
      <ReactMarkdown
        className="markdown-body"
        linkTarget="_blank"
        children={prop.articleText}
        skipHtml={false}
        rehypePlugins={[RehypeRaw]}
      />
    </ReactCardOrigin>
  );
}
