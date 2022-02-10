import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import { ICompany } from '../App';
import PointList from '../components/PointList';

import userEvent from '@testing-library/user-event';
import { companyLayer } from '../utils';

const setup = () => {
  let companys: ICompany[] = [
    {
      label: 'label test value',
      vision: 0,
      ability: 0,
      id: 0,
    },
  ];
  let props = {
    pointListArr: companys,
    deleteCompany: jest.fn(),
    handleCompanyChange: jest.fn((event) => {
      companys = companyLayer.handleCompanyChange(event, companys, 0);
    }),
  };
  const utils = render(
    <PointList
      deleteCompany={props.deleteCompany}
      handleCompanyChange={props.handleCompanyChange}
      pointListArr={props.pointListArr}
    />
  );

  const input = screen.getAllByRole('textbox')[0] as HTMLInputElement;

  return {
    input,
    props,
    ...utils,
  };
};

test('Change input must be called', () => {
  let { input, props, ...utils } = setup();
  fireEvent.change(input, { target: { value: 'Google' } });
  expect(props.handleCompanyChange).toHaveBeenCalledTimes(1);
  const l = screen.getAllByRole('textbox')[0] as HTMLInputElement;
  expect(l.value).toBe('Google');
});
