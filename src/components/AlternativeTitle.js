import React from 'react';
import styled from 'styled-components';
import { colors } from './utils';
const AlternativeTitle = () => {
  return (
    <Wrapper>
      <h1>AlternativeTitle</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    color: ${colors.primary};
    text-align: center;
  }
`;

export default AlternativeTitle;
