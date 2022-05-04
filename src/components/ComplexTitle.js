import React from 'react';
import styled from 'styled-components';
const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1 className='title'>{title}</h1>
      <div className='underline'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0;

  h1 {
    text-align: center;
    text-transform: uppercase;
  }
  .title {
    color: #777;
  }
  .underline {
    height: 0.25rem;
    width: 5rem;
    background: red;
    margin: 2rem auto;
  }
`;

export default ComplexTitle;
