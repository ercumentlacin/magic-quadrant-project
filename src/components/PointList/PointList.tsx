import { ChangeEvent } from 'react';
import { ICompany } from '../../App';
import Button from '../Button';

interface PointListProps {
  pointListArr: ICompany[];
  deleteCompany: (id: number) => void;
  handleCompanyChange: (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
}

export default function PointList({
  pointListArr,
  deleteCompany,
  handleCompanyChange,
}: PointListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Label</th>
          <th>Vision</th>
          <th>Ability</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {pointListArr?.map((pointList, index) => {
          return (
            <tr key={index} title='pointList'>
              <td>
                <input
                  data-id='label'
                  title='pointList.label'
                  type='text'
                  name='label'
                  id='label'
                  value={pointList.label}
                  onChange={(event) => handleCompanyChange(event, pointList.id)}
                />
              </td>
              <td>
                <input
                  type='number'
                  name='vision'
                  id='vision'
                  value={pointList.vision}
                  onChange={(event) => handleCompanyChange(event, pointList.id)}
                  max='100'
                  min='2'
                />
              </td>
              <td>
                <input
                  type='number'
                  name='ability'
                  id='ability'
                  value={pointList.ability}
                  onChange={(event) => handleCompanyChange(event, pointList.id)}
                  max='100'
                  min='2'
                />
              </td>
              <td>
                <Button onClick={() => deleteCompany(pointList.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
