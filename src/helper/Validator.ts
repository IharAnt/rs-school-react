import IValid from '../types/interfaces/IValid';

export default class Validator {
  static validateEmail(email?: string): IValid {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      return { isValid: false, error: 'Email is not valid' };
    }

    return { isValid: true, error: '' };
  }

  static validateName(name?: string): IValid {
    if (!name || name.length < 3) {
      return { isValid: false, error: 'At least 3 chars' };
    }

    if (!/^[A-ZА-Я]/.test(name)) {
      return { isValid: false, error: 'Name should start from uppercase' };
    }

    return { isValid: true, error: '' };
  }

  static validateBirthday(noValidYears: number, date?: string): IValid {
    if (!date) {
      return { isValid: false, error: 'Please, enter your birthday' };
    }
    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - noValidYears);
    const selectedDate = new Date(date);
    if (currentDate < selectedDate) {
      return { isValid: false, error: `You should be older then ${noValidYears} years` };
    }

    return { isValid: true, error: '' };
  }

  static validateAgree(isAgree?: boolean): IValid {
    if (!isAgree) {
      return { isValid: false, error: 'You should give agree to the processing of personal data' };
    }
    return { isValid: true, error: '' };
  }
}
