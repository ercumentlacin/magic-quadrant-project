import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const ChartColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const VerticalText = styled.div`
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  padding-top: 1rem;
  padding-left: 0.2rem;
  display: flex;
  align-items: baseline;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;
  padding-top: 0.2rem;
`;

export const Arrow = styled.span<{ direction?: string | undefined }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.2rem;
  ${(props) =>
    props.direction === 'up' ? 'padding-top: 0.2rem;' : 'padding-left: 0.2rem;'}
`;

interface IFlex {
  direction?: 'row' | 'column' | undefined;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | undefined;
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | undefined;
  wrap?: 'wrap' | 'nowrap' | undefined;
  gap?: number | undefined;
}

export const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => props.wrap};
  gap: ${(props) => props.gap}rem;
`;

const Layout = {
  Arrow,
  Container,
  ChartColumn,
  VerticalText,
  Text,
  Flex,
};

export default Layout;
