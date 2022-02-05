import { useCallback, useState } from 'react';
import { ICompany } from '../App';

export function useLocalStorage(
  key: string,
  initialValue: ICompany[]
): [ICompany[], (companys: ICompany[]) => ICompany[] | void] {
  const [value] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setItem = useCallback(
    (companys: ICompany[]) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(companys));
      } catch (error) {
        console.log(error);
      }
    },
    [key]
  );

  return [value, setItem];
}
