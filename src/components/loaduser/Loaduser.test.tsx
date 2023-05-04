import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import Loaduser from "./Loaduser";
import { server } from "../../mocks/server";


describe("Loadusers", () => {
  test("renders correctly", () => {
    render(<Loaduser />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  test("renders a list of users", async () => {
    render(<Loaduser />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  test("renders error message", async () => {
    //individually set only for error
    server.use(
      rest.get(
        "https://jsonplaceholder.typicode.com/users",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Loaduser />);
    const error = await screen.findByText("Error fetching users");
    expect(error).toBeInTheDocument();
  });
});
