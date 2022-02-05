import { Dispatch, SetStateAction } from 'react';
import { ICompany } from '../../App';
import { Label, PointWrapper } from './point.style';

interface PointProps extends ICompany {
  handlePointDrag: (event: React.DragEvent<HTMLDivElement>, id: number) => void;
  isDragging: boolean;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
}

export default function Point(props: PointProps) {
  const { ability, label, vision, handlePointDrag, isDragging, setIsDragging } =
    props;

  if (ability === undefined || vision === undefined) return null;

  return (
    <div>
      <PointWrapper
        xAxis={vision}
        yAxis={ability}
        isDragging={isDragging}
        opacity={1}
        onDrag={(event) => handlePointDrag(event, props.id)}
        onDragOver={(e) => e.preventDefault()}
        onDragStart={(event) => setIsDragging(true)}
        onDragEnd={(e) => setIsDragging(false)}
        draggable
      />
      <Label xAxis={vision} yAxis={ability} opacity={1}>
        {label}
      </Label>
    </div>
  );
}
