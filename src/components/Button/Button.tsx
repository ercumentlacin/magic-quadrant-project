import { memo, ReactNode } from 'react';
import { SButton } from './button.style';

interface IButtonProps {
  children: ReactNode;
  onClick?: (id?: number) => void;
  id?: number;
}

function Button({ children, id, onClick = () => {} }: IButtonProps) {
  return <SButton onClick={() => onClick(id)}>{children}</SButton>;
}

export default memo(Button);
