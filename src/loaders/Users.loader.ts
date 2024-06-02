import { LoaderFunctionArgs } from "react-router-dom";
import { z } from "zod";
import { userSchema } from "../schemas/user.schema";

export const usersLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch("http://localhost:4000/users");

  const users = await response.json();
  console.log(params)
  return {
    users: z.array(userSchema).parse(users),
  };
};

export type UsersLoaderResponse = Awaited<ReturnType<typeof usersLoader>>;
