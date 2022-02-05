import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

interface IThemeWrapper {
  children: ReactNode;
}

export default function ThemeWrapper({ children }: IThemeWrapper) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
