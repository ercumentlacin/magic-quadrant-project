import { memo, ReactNode } from 'react';
import { SButton } from './button.style';

interface IButtonProps {
  children: ReactNode;
  onClick?: (id?: number) => void;
  id?: number;
  role?: string;
  name?: string;
}

function Button(props: IButtonProps) {
  const { children, id, onClick = () => {}, ...rest } = props;
  return (
    <SButton onClick={() => onClick(id)} {...rest}>
      {children}
    </SButton>
  );
}

export default memo(Button);
