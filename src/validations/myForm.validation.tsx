const phoneRegex = /^[0-9]{10}$/;

type clinicDetails = {
  name(value: string): string;
  phone(value: string): string;
  age(value: string): string;
  address(value: string): string;
};

export const validateName = (value: string) => {
  if (value.length === 0) return "Please enter valid name.";
  if (value.length < 3) return "Name can't be less than 3 characters.";

  return "";
};

export const validatePhoneNumber = (value: string) => {
  if (value.length === 0) return "Please enter phone number.";
  if (!phoneRegex.test(value)) return "Please provide valid number";
  else return "";
};

export const validateAge = (value: string) => {
  const convertIntoNumber = Number(value);
  if (convertIntoNumber === 0 || convertIntoNumber < 0)
    return "Please enter valid age.";

  return "";
};

export const validateAddress = (value: string) => {
  if (value.length === 0) return "Please enter address.";
  return "";
};

const validator: clinicDetails = {
  name: validateName,
  phone: validatePhoneNumber,
  age: validateAge,
  address: validateAddress,
};

export default validator;
