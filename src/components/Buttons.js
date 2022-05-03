import styled from 'styled-components';

export const DefaultButton = styled.button`
  padding: 0.375rem 1.5rem;
  background-color: #f12505;
  color: #fff;
  cursor: pointer;
  display: block;
  border: transparent;
  border-radius: 10px;
  margin: 1rem auto;
  text-transform: capitalize;
  font-size: 1rem;
  letter-spacing: 0.1rem;
`;

export const SpecialButton = styled(DefaultButton)`
  height: 2rem;
  background-color: #afc456;
  width: 100%;
`;
