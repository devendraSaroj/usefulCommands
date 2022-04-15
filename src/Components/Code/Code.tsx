import React from 'react';

import styled from 'styled-components';

const UL = styled.pre`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  /* ... */
`;

const Li = styled.li`
  list-style: none;
  color: whitesmoke;
  font-family: 'Source Code Pro', monospace;
  font-size: 12px;
`;

const Code = (props: { children: string }) => {
  return (
    <UL>
      {/* {React.Children.map(props.children, (child: string) => (
        <>{child}</>
      ))} */}
      ```js
      {props.children}
      ```
    </UL>
  );
};

Code.li = ({ children }: { children: string }) => {
  return <Li>{children}</Li>;
};
export default Code;
