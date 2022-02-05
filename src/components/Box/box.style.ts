import styled from 'styled-components';

export const BoxStyle = styled.div`
  width: 400px;
  height: 400px;
  border: 0px solid ${({ theme }) => theme.LIGHT_GREY};
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &:nth-child(1) {
    border-width: 0 2px 2px 0;
  }
  &:nth-child(2) {
    border-width: 0 0 2px 0;
  }
  &:nth-child(3) {
    border-width: 0 2px 0 0;
  }

  &:nth-child(3),
  &:nth-child(4) {
    align-items: flex-end;
  }
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.WHITE};
  background-color: ${({ theme }) => theme.LIGHT_BLUE};
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  margin-block: 0.5rem;
  font-family: sans-serif;
`;
