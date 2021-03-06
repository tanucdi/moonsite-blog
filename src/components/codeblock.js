import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Pre } from "./styles";

const CodeBlock = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "";

  return (
    <Highlight {...defaultProps} code={children.props.children.trim}  language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
  );
};

export default CodeBlock;