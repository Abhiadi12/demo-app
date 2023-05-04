import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Display from "./Display";
import { deleteUser } from "@/redux/user/userSlice";

const mockStore = configureStore([]);

describe("Display", () => {
  test("Should show no data exist, when user state is empty", () => {
    const store = mockStore({
      user: {
        users: [],
      },
      search: {
        keyword: "",
      },
    });

    render(
      <Provider store={store}>
        <Display />
      </Provider>
    );
    expect(screen.getByText("No Data Exist.")).toBeInTheDocument();
  });

  test("Should dispatch deleteUser action when delete button is clicked", () => {
    const store = mockStore({
      user: {
        users: [
          { id: "1", name: "Alice" },
          { id: "2", name: "Bob" },
        ],
      },
      search: {
        keyword: "",
      },
    });
    render(
      <Provider store={store}>
        <Display />
      </Provider>
    );

    const deleteButton = screen.getAllByRole("button", { name: "delete" });
    fireEvent.click(deleteButton[0]);
    expect(store.getActions()).toEqual([
      deleteUser({ id: "1", name: "Alice" }),
    ]);
  });

  test("Should render 3 li element if store has 3 value", () => {
    const store = mockStore({
      user: {
        users: [
          { id: "1", name: "Alice" },
          { id: "2", name: "Pikachu" },
          { id: "3", name: "Misty" },
        ],
      },
      search: {
        keyword: "",
      },
    });
    render(
      <Provider store={store}>
        <Display />
      </Provider>
    );
    const elements = screen.getAllByRole("listitem");
    expect(elements).toHaveLength(3);
  });
});
