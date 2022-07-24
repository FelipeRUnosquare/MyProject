import { render, screen } from "./test-utils";
import Home from "../pages/home/index";

describe.skip("Home Component",() => {
  test("Render list of users", async () => {
    render(<Home />);
    const text = await screen.findByText('Leanne Graham');
    expect(text).toBeInTheDocument();
  });
});
