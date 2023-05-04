import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import Search from "./Search";
import { changeKeyWord } from "@/redux/search/searchSlice";

describe("Search", () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    search: {
      keyword: "",
    },
  }) as MockStoreEnhanced<unknown, {}>;
  test("renders correctly", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const nameInput = screen.getByPlaceholderText("Search");

    expect(nameInput).toBeInTheDocument();
    expect(nameInput).toHaveValue("");
  });

  test("should dispatch changeKeyword action", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const nameInput = screen.getByPlaceholderText("Search");

    store.dispatch(changeKeyWord("mishra"));

    // Assert that the action has been dispatched
    const actions = store.getActions();
    expect(actions).toEqual([changeKeyWord("mishra")]);
  });

  test("Should display the appropiate keyword value", () => {
    const storeWithKeyword = mockStore({
      search: {
        keyword: "hello",
      },
    }) as MockStoreEnhanced<unknown, {}>;
    render(
      <Provider store={storeWithKeyword}>
        <Search />
      </Provider>
    );
    const nameInput = screen.getByPlaceholderText("Search");
    expect(nameInput).toHaveValue("hello");
  });

  test("Should reflect the change", () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const nameInput = screen.getByPlaceholderText("Search");
    fireEvent.change(nameInput, { target: { value: "mishra" } });
    expect(nameInput).toHaveValue("");
  });
});
