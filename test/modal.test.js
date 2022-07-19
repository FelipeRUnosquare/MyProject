import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../components/UI/Modal";
import "@testing-library/jest-dom";

describe("Modal Component", () => {
  test("Modal button works", () => {
    render(
      <Modal
        error={true}
        message={"Not Authorized, please contact the Administrator"}
      />
    );
    const okButton = screen.getByRole('button', {name: 'OK'});
    userEvent.click(okButton);

  });
});
