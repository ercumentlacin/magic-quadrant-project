import { fireEvent, render, screen } from '@testing-library/react';
import { ICompany } from '../App';
import Table from '../components/Table';
import { companyLayer } from '../utils';

let companys: ICompany[] = [
  {
    label: 'label',
    vision: 0,
    ability: 0,
    id: 0,
  },
];

let props = {
  companys,
  addCompany: jest.fn(() => {
    companys = companyLayer.addCompany(companys);
  }),
  deleteCompany: jest.fn(),
  handleCompanyChange: jest.fn(),
};

beforeEach(() => {
  jest.clearAllMocks();
});

beforeAll(() => {
  jest.useFakeTimers();
});

test('Add button must be on the screen', () => {
  render(<Table {...props} />);

  const addButton = screen.getByRole('button', { name: 'Add' });
  expect(addButton).toBeInTheDocument();
});

test('Add button click after must be companys length to be 2', async () => {
  render(<Table {...props} />);

  const addButton = screen.getByRole('button', { name: 'Add' });
  fireEvent.click(addButton);
  expect(props.addCompany).toHaveBeenCalledTimes(1);
});

test('Delete button click after must be companys length to be 1', async () => {
  render(<Table {...props} />);

  const deleteButton = screen.getByRole('button', { name: 'Delete' });
  fireEvent.click(deleteButton);
  expect(props.deleteCompany).toHaveBeenCalledTimes(1);
});
