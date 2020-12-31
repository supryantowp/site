import Highlight, { defaultProps } from 'prism-react-renderer';
import React from 'react';

const Snippet = ({ children, className }) => {
  const language = className.replace(/language-/, '');
  console.log({ children });

  return (
    <Highlight {...defaultProps} code={`${children}`} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Snippet;
