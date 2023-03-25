import { describe, it } from 'vitest';
import Validator from '../../helper/Validator';

describe('Validator test', () => {
  it('validateEmail. notemail string should not retern valid data', () => {
    const notEmailString = 'notemail';
    expect(Validator.validateEmail(notEmailString).isValid).toEqual(false);
  });

  it('validateEmail. test@mail.com should retern valid data', () => {
    const emailString = 'test@mail.com';
    expect(Validator.validateEmail(emailString).isValid).toEqual(true);
  });

  it('validateName. empty name should not retern valid data', () => {
    const badName = '';
    expect(Validator.validateName(badName).isValid).toEqual(false);
  });

  it('validateName. short string should not retern valid data', () => {
    const badName = 'not';
    expect(Validator.validateName(badName).isValid).toEqual(false);
  });

  it('validateName. got name should retern valid data', () => {
    const goodName = 'Jekot';
    expect(Validator.validateName(goodName).isValid).toEqual(true);
  });

  it('validateBirthday. empty date should not retern valid data', () => {
    const badDate = '';
    expect(Validator.validateBirthday(10, badDate).isValid).toEqual(false);
  });

  it('validateBirthday should not retern valid data', () => {
    const badDate = '2022-12-12';
    expect(Validator.validateBirthday(10, badDate).isValid).toEqual(false);
  });

  it('validateBirthday should retern valid data', () => {
    const goodDate = '2012-12-12';
    expect(Validator.validateBirthday(10, goodDate).isValid).toEqual(true);
  });

  it('validateAgree. checked should retern valid data', () => {
    expect(Validator.validateAgree(true).isValid).toEqual(true);
  });

  it('validateAgree. unchecked should not retern valid data', () => {
    expect(Validator.validateAgree(false).isValid).toEqual(false);
  });
});
