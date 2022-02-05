import styled from 'styled-components';

export const SButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.LIGHT_GREY};
  color: #000;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.DARK_GREY};
    color: ${({ theme }) => theme.WHITE};
  }
`;
