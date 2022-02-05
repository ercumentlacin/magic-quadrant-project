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
  return (
    <div>
      <PointWrapper
        xAxis={ability}
        yAxis={vision}
        isDragging
        opacity={1}
        onDrag={(event) => handlePointDrag(event, props.id)}
        onDragOver={(e) => e.preventDefault()}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={(e) => {
          setIsDragging(false);
          console.log('e :>> ', e);
        }}
        draggable
      />
      <Label xAxis={ability} yAxis={vision} opacity={1}>
        {label}
      </Label>
    </div>
  );
}
