import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../pages/index";
import "@testing-library/jest-dom";

describe("Login Form", () => {
  test.skip("User input button works", async () => {
    render(<Login />);
    const loginInput = screen.getByPlaceholderText("Username");
    fireEvent.change(loginInput, { target: { value: "Sincere@april.biz" } });
    expect(loginInput.value).toBe("Sincere@april.biz");
  });

  test.skip("Spinner appers after click button works", async () => {
    const { container } = render(<Login />);
    const loginInput = screen.getByPlaceholderText("Username");
    fireEvent.change(loginInput, { target: { value: "Sincere@april.biz" } });
    const okButton = screen.getByText("Login");
    userEvent.click(okButton);
    const spinner = container.getElementsByClassName("spinner");
    await waitFor(() => expect(spinner).toBeInTheDocument());
  });

  test.skip("Form validation Works", async () => {
    render(<Login />);
    const loginInput = screen.getByPlaceholderText("Username");
    fireEvent.change(loginInput, { target: { value: "" } });
    const okButton = screen.getByRole("button");
    userEvent.click(okButton);
    const invalidLabel = await screen.findByText(/Please enter a valid email/i);
    await waitFor(() => expect(invalidLabel).toBeInTheDocument());
  });
});
