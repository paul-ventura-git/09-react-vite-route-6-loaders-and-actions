import { LoaderFunctionArgs, redirect } from "react-router-dom";
//import { z } from "zod";
import { userSchema } from "../schemas/user.schema";

export const editUserLoader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const response = await fetch(`http://localhost:4000/users/${params.id}`);
    const user = await response.json();
    return {
      user: userSchema.parse(user),
    };
  } catch (error) {
    return redirect("/");
  }
};

export type EditUserLoaderResponse = Exclude<
  Awaited<ReturnType<typeof editUserLoader>>,
  Response
>;
