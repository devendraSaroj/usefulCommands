import React from 'react';
import styled from 'styled-components';

const Prompt = styled.ul`
  padding: 20px;
  background-color: black;
  border-radius: 5px;
  overflow-x: auto;
  /* ... */
`;

const Li = styled.li`
  list-style: none;
  color: whitesmoke;
  font-family: 'Source Code Pro', monospace;
  font-size: 12px;
`;

const TerminalPrompt = (props: any) => {
  return (
    <code>
      <Prompt>
        {/* {React.Children.map(props.children, (child: string) => (
              <>{child}</>
        ))} */}
        {props.children}
      </Prompt>
    </code>
  );
};

TerminalPrompt.li = ({ children }: { children: string }) => {
  return <Li>{children}</Li>;
};

export default TerminalPrompt;
