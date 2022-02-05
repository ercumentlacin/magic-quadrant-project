import styled from 'styled-components';

export const InnerChartWrapper = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  grid-template-rows: 400px 400px;
  gap: 0px 0px;
  grid-template-areas:
    '. .'
    '. .';
  border: 2px solid ${({ theme }) => theme.DARK_GREY};
  width: max-content;
  position: relative;
`;
