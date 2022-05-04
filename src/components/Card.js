import React from 'react';
import styled from 'styled-components';
const Card = () => {
  return (
    <Wrapper>
      <img
        src='https://i.wpimg.pl/730x0/m.autokult.pl/autowpru-dodge-challenge-1d835db.jpg'
        alt='dodge'
      />
      <div className='card-footer'>
        <h3>Product</h3>
        <span>$15</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 90vw;
  max-width: 400px;
  margin: 2rem auto;
  transition: all 0.3s linear;
  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem;
  }
  &:hover {
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  }
  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export default Card;
