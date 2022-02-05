import { BoxStyle, Label } from './box.style';

interface IBox {
  label: string;
}

export default function Box({ label }: IBox) {
  return (
    <BoxStyle>
      <Label>{label}</Label>
    </BoxStyle>
  );
}
