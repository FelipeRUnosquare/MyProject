import UserId from "../pages/home/[userId]";
import { fireEvent, render, screen, waitFor } from "./test-utils";
import userEvent from "@testing-library/user-event";

jest.mock("next/router", () => require("next-router-mock"));

describe("Posts by user page", () => {
  test.skip("Render Post List(First Post)", async () => {
    render(<UserId />);
    const firstPostText = await screen.findByText(
      /sunt aut facere repellat provident occaecati excepturi optio reprehenderit/i
    );
    expect(firstPostText).toBeInTheDocument();
  });
  test.skip("Pagination Button work", async () => {
    render(<UserId />);
    const buttonSecondPost = await screen.findByLabelText("Page 2");
    userEvent.click(buttonSecondPost);
    const secondPostTitle = await screen.findByText(/qui est esse/i);
    expect(secondPostTitle).toBeInTheDocument();
  });
  test.skip("Delete Post Method", async () => {
    render(<UserId/>);
    const firstPostButtonDelete = await screen.findByText('Delete')
    userEvent.click(firstPostButtonDelete)
    if (screen.findByText('Are you sure you want to delete this post?')) {
        const buttonAccept = await screen.findByText('OK')
        userEvent.click(buttonAccept)
        const SuccessMessage = await screen.findByText('Post deleted successfully')
        waitFor(() => expect(SuccessMessage).toBeInTheDocument())
    }
  })
});
