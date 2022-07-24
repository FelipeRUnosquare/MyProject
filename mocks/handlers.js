import { rest } from "msw";
import usersData from "./usersData.json";
import postsByUser from "./postsByUser.json";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.json(usersData));
  }),

  rest.get("https://jsonplaceholder.typicode.com/users/", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
      ])
    );
  }),

  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(ctx.json(postsByUser));
  }),
  rest.delete(
    "https://jsonplaceholder.typicode.com/posts/:idToDelete",
    (req, res, ctx) => {
      return res(ctx.json([{ ok: true }]));
    }
  ),
];
