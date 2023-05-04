import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import AddName from "./AddName";
import { addUser } from "@/redux/user/userSlice";
import { Provider } from "react-redux";

describe("AddName", () => {
  const mockStore = configureStore([]);
  const store = mockStore({ user: { users: [] } }) as MockStoreEnhanced<
    unknown,
    {}
  >;
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <AddName />
      </Provider>
    );
    const nameInput = screen.getByPlaceholderText("Enter Name");
    const addButton = screen.getByRole("button", { name: "Add" });

    expect(nameInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test("should show typed value", () => {
    render(
      <Provider store={store}>
        <AddName />
      </Provider>
    );
    const nameInput = screen.getByPlaceholderText("Enter Name");
    fireEvent.change(nameInput, { target: { value: "Abhisek" } });
    expect(nameInput).toHaveValue("Abhisek");
  });

  test("should add user to store when Add button is clicked", () => {
    render(
      <Provider store={store}>
        <AddName />
      </Provider>
    );

    const nameInput = screen.getByPlaceholderText("Enter Name");
    const addButton = screen.getByRole("button", { name: "Add" });

    fireEvent.change(nameInput, { target: { value: "Annie" } });
    fireEvent.click(addButton);

    const actions = store.getActions();
    expect(actions).toEqual([
      addUser({ id: expect.any(String), name: "Annie" }),
    ]);

    expect(nameInput).toHaveValue("");
  });
});
