import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event";
import Modal from "../components/UI/Modal";
import "@testing-library/jest-dom";

describe.only("Modal Component", () => {
  test.skip("Modal button works", async() => {
    render(
      <Modal
        error={true}
        message={"Not Authorized, please contact the Administrator"}
      />
    );
    const okButton = screen.getByRole('button', {name: 'OK'});
    userEvent.click(okButton);
    await waitFor(() => {expect(okButton).not.toBeTruthy()});
  });
});
