import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MyForm from "./MyForm";

describe("MyForm", () => {
  test("should render all form items", () => {
    render(<MyForm />);
    const nameElement = screen.getByLabelText("Name");
    const phoneElement = screen.getByLabelText("Phone Number");
    const ageElement = screen.getByLabelText("Age");
    const addressElement = screen.getByLabelText("Address");
    const dateElement = screen.getByLabelText("Controlled picker");

    expect(nameElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
    expect(ageElement).toBeInTheDocument();
    expect(addressElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
  });

  test("should update form fields when input value changes", () => {
    render(<MyForm />);
    const nameElement = screen.getByLabelText("Name");
    fireEvent.change(nameElement, { target: { value: "CSK" } });
    expect(nameElement).toHaveValue("CSK");

    const phoneElement = screen.getByLabelText("Phone Number");
    fireEvent.change(phoneElement, { target: { value: "7787888890" } });
    expect(phoneElement).toHaveValue("7787888890");

    const ageElement = screen.getByLabelText("Age");
    fireEvent.change(ageElement, { target: { value: "30" } });
    expect(ageElement).toHaveValue("30");

    const addressElement = screen.getByLabelText("Address");
    fireEvent.change(addressElement, { target: { value: "Abakash Puri" } });
    expect(addressElement).toHaveValue("Abakash Puri");

    const dateElement = screen.getByLabelText("Controlled picker");
    fireEvent.change(dateElement, { target: { value: "04/17/2023" } });
    expect(dateElement).toHaveValue("04/17/2023");
  });

  test("should display validation errors when input value is invalid", () => {
    render(<MyForm />);
    const nameElement = screen.getByLabelText("Name");
    fireEvent.change(nameElement, { target: { value: "df" } });
    const nameErrorElement = screen.getByText(
      "Name can't be less than 3 characters."
    );
    expect(nameErrorElement).toBeInTheDocument();

    const phoneElement = screen.getByLabelText("Phone Number");
    fireEvent.change(phoneElement, { target: { value: "77878888" } });
    const phoneErrorElement = screen.getByText("Please provide valid number");
    expect(phoneErrorElement).toBeInTheDocument();

    const ageElement = screen.getByLabelText("Age");
    fireEvent.change(ageElement, { target: { value: "-2" } });
    const ageErrorElement = screen.getByText("Please enter valid age.");
    expect(ageErrorElement).toBeInTheDocument();
  });
});
