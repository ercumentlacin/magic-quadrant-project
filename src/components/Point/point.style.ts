import styled from 'styled-components';

interface PointWrapperProps {
  xAxis: number;
  yAxis: number;
  opacity: number;
  isDragging: boolean;
}

interface PointLabelProps {
  xAxis: number;
  yAxis: number;
  opacity: number;
}

export const PointWrapper = styled.div<PointWrapperProps>`
  bottom: ${(props) => `calc(${props.yAxis}% - 1rem)`};
  left: ${(props) => props.xAxis}%;
  opacity: ${(props) => props.opacity};
  background-color: ${(props) => props.theme.DARK_BLUE};
  position: absolute;
  transform: translate(-50%, 50%);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  z-index: 1;
  cursor: pointer;
`;

export const Label = styled.div<PointLabelProps>`
  bottom: ${(props) => `calc(${props.yAxis}% - 2rem)`};
  left: ${(props) => `calc(${props.xAxis}% + 2rem)`};
  opacity: ${(props) => props.opacity};
  position: absolute;
  transform: translate(-50%, 50%);
  font-family: sans-serif;
  font-size: 13px;
  color: ${({ theme }) => theme.DARK_BLUE};
`;
