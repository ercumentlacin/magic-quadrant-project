import { ChangeEvent, MutableRefObject } from 'react';
import { ICompany } from '../App';

function adabteRange(number: number) {
  return Math.max(Math.min(number, 100), 2);
}

function addCompany(companys: ICompany[]) {
  return [...companys, { id: Date.now(), label: '', vision: 50, ability: 50 }];
}

function deleteCompany(companys: ICompany[], id: number) {
  return companys.filter((company) => company.id !== id);
}

function handleCompanyChange(
  event: ChangeEvent<HTMLInputElement>,
  companys: ICompany[],
  id: number
) {
  const { name, value } = event.target;
  return companys.map((company) => {
    if (company.id === Number(id)) {
      return { ...company, [name]: value };
    }
    return company;
  });
}

function handlePointDrag(
  event: React.DragEvent<HTMLDivElement>,
  companys: ICompany[],
  id: number,
  draggableArea: MutableRefObject<HTMLDivElement | null>
) {
  if (!draggableArea.current) return companys;

  const { clientX, clientY } = event;
  const { left, top } = draggableArea.current.getBoundingClientRect();

  return companys.map((company) => {
    if (company.id === Number(id)) {
      const ability =
        100 - Math.floor((-1 * +Math.round(clientY - top).toFixed() + 800) / 8);
      const vision = Math.floor(
        (-1 * -Math.round(clientX - left).toFixed()) / 8
      );

      return {
        ...company,
        ability: adabteRange(ability),
        vision: adabteRange(vision),
      };
    }
    return company;
  });
}

export const companyLayer = {
  addCompany,
  deleteCompany,
  handleCompanyChange,
  handlePointDrag,
};
