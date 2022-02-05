import { createEvent, fireEvent } from '@testing-library/react';
import { adabteRange, companyLayer } from '../utils';

test('should number range in [2, 100]', () => {
  expect(adabteRange(0)).toBe(2);
  expect(adabteRange(100)).toBe(100);
  expect(adabteRange(101)).toBe(100);
  expect(adabteRange(101)).toBe(100);
  expect(adabteRange(-1)).toBe(2);
  expect(adabteRange(-100)).toBe(2);
  expect(adabteRange(-101)).toBe(2);
});
const companys = [
  { id: 1, label: '', vision: 50, ability: 50 },
  { id: 2, label: '', vision: 50, ability: 50 },
];

test('When the addCompany function is called, the companies length must be 3', () => {
  const companysAfterAdd = companyLayer.addCompany(companys);
  expect(companysAfterAdd.length).toBe(3);
  expect(companysAfterAdd[0].id).toBe(1);
  expect(companysAfterAdd[1].id).toBe(2);
  expect(companysAfterAdd[2].id).toBe(Date.now());
});

test('When the deleteCompany function is called, should return the companys length is 2', () => {
  const companysAfterDelete = companyLayer.deleteCompany(companys, 1);
  expect(companysAfterDelete.length).toBe(1);
  expect(companysAfterDelete[0].id).toBe(2);
});

test('When the deleteCompany function is called with wrong id should return the companys length is 2', () => {
  const companysAfterDelete = companyLayer.deleteCompany(companys, 3);
  expect(companysAfterDelete.length).toBe(2);
});
