import styled from 'styled-components';

export const PointWrapper = styled.div<{
  xAxis: number;
  yAxis: number;
  opacity: number;
  isDragging: boolean;
}>`
  position: absolute;
  top: ${(props) => `calc(${props.yAxis}% - 1rem)`};
  left: ${(props) => props.xAxis}%;
  transform: translate(-50%, 50%);
  opacity: ${(props) => props.opacity};
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.DARK_BLUE};
  z-index: 1;
  cursor: pointer;
`;

export const Label = styled.div<{
  xAxis: number;
  yAxis: number;
  opacity: number;
}>`
  position: absolute;
  top: ${(props) => props.yAxis}%;
  left: ${(props) => `calc(${props.xAxis}% + 2rem)`};
  transform: translate(-50%, 50%);
  opacity: ${(props) => props.opacity};
  font-family: sans-serif;
  font-size: 13px;
  color: ${({ theme }) => theme.DARK_BLUE};
`;
