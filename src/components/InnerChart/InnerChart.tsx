import { Dispatch, DragEvent, RefObject, SetStateAction } from 'react';
import { ICompany } from '../../App';
import Box from '../Box';
import Point from '../Point';
import { InnerChartWrapper } from './innerChart.style';

const INNER_CHARTS = ['Challengers', 'Leaders', 'Players', 'Visionaries'];

interface InnerChartProps {
  companys: ICompany[];
  draggableArea: RefObject<HTMLDivElement>;
  handlePointDrag: (event: DragEvent<HTMLDivElement>, id: number) => void;
  isDragging: boolean;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
}

export default function InnerChart({
  companys,
  draggableArea,
  handlePointDrag,
  isDragging,
  setIsDragging,
}: InnerChartProps) {
  return (
    <InnerChartWrapper ref={draggableArea}>
      {INNER_CHARTS.map((label) => (
        <Box label={label} key={label} />
      ))}
      {companys.map((company) => (
        <Point
          key={company.id}
          {...company}
          handlePointDrag={handlePointDrag}
          isDragging={isDragging}
          setIsDragging={setIsDragging}
        />
      ))}
    </InnerChartWrapper>
  );
}
