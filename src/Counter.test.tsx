import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import Counter from "./Counter";

describe("Counter", () => {
  it("1 + 1 should equals 2", () => {
    expect(1 + 1).toEqual(2);
  });

  it("renders correctly", () => {
    render(<Counter />);
  });

  it("shows an initial state of 0", () => {
    const { queryByText } = render(<Counter />);

    const initialState = queryByText("Counter: 0");
    expect(initialState).not.toBeNull();
  });

  it("increments by 1 each time increment is pressed", () => {
    const { queryByText, getByTestId } = render(<Counter />);

    const initialState = queryByText("Counter: 0");
    expect(initialState).not.toBeNull();

    const increment = getByTestId("incrementButton");
    fireEvent.press(increment);

    const oneState = queryByText("Counter: 1");
    expect(oneState).not.toBeNull();
  });

  it("decrements by 1 each time decrement is pressed", () => {
    const { queryByText, getByTestId } = render(<Counter />);

    const initialState = queryByText("Counter: 0");
    expect(initialState).not.toBeNull();

    const decrement = getByTestId("decrementButton");
    fireEvent.press(decrement);

    const minusOneState = queryByText("Counter: -1");
    expect(minusOneState).not.toBeNull();
  });
});
