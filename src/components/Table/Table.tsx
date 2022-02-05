import { ChangeEvent } from 'react';
import { ICompany } from '../../App';
import Button from '../Button';
import PointList from '../PointList';

interface ITableProps {
  companys: ICompany[];
  addCompany: () => void;
  deleteCompany: (id: number) => void;
  handleCompanyChange: (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
}

export default function Table({
  companys,
  addCompany,
  deleteCompany,
  handleCompanyChange,
}: ITableProps) {
  return (
    <div>
      <Button onClick={addCompany}>Add</Button>
      <div>
        <PointList
          pointListArr={companys}
          deleteCompany={deleteCompany}
          handleCompanyChange={handleCompanyChange}
        />
      </div>
    </div>
  );
}
