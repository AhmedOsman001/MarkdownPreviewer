import React from 'react';
import * as marked from 'marked';

const MarkdownRenderer = ({ content }) => {
  const htmlContent = marked.marked(content);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default MarkdownRenderer