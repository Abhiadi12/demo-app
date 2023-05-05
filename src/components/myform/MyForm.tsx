import React, { useState } from "react";
import { userInfo } from "@/types";
import { TextField, Button } from "@mui/material";
import validator from "@/validations/myForm.validation";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const formItems = [
  {
    id: "name",
    label: "Name",
    placeholder: "Your Name",
    type: "text",
  },
  {
    id: "phone",
    label: "Phone Number",
    placeholder: "Phone",
    type: "text",
  },
  {
    id: "age",
    label: "Age",
    placeholder: "Your age",
    type: "text",
  },
  {
    id: "address",
    label: "Address",
    placeholder: "Name of address",
    type: "text",
  },
];

function MyForm() {
  const [formFields, setFormFields] = useState<userInfo>({
    name: { value: "", error: "" },
    phone: {
      value: "",
      error: "",
    },
    age: { value: 0, error: "" },
    address: { value: "", error: "" },
  });
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id: name, value } = e.target;
    debugger;
    const errorMessage = validator[name as keyof typeof validator](value);
    setFormFields((prev) => ({
      ...prev,
      [name]: {
        value,
        error: errorMessage,
      },
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "3px dotted red",
        padding: "10px",
      }}
    >
      {formItems.map((formItem, idx) => (
        <TextField
          sx={{ mb: 2 }}
          key={idx}
          {...formItem}
          value={formFields[formItems[idx].id as keyof typeof formFields].value}
          helperText={
            formFields[formItems[idx].id as keyof typeof formFields].error
          }
          onChange={changeHandler}
        />
      ))}
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </div>
      <Button variant="contained">Submit</Button>
    </div>
  );
}

export default MyForm;
