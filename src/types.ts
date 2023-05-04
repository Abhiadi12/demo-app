export interface formField {
  value: string | number;
  error: string;
}

export interface userInfo {
  name: formField;
  phone: formField;
  age: formField;
  address: formField;
}