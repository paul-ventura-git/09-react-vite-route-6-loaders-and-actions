import { ActionFunctionArgs, redirect } from "react-router-dom";
import { User, userSchema } from "../schemas/user.schema";

const deleteUser = async (userId: string | number) => {
  return fetch(`http://localhost:4000/users/${userId}`, {
    method: "delete",
  });
};

const editUser = async (payload: User) => {
  return fetch(`http://localhost:4000/users/${payload.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const editUserAction = async (args: ActionFunctionArgs) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  const { request } = args;
  const formData = await request.formData();
  const { intent, ...payload } = Object.fromEntries(formData.entries());
  const userData = userSchema.parse(payload);
  if (intent === "delete") {
    await deleteUser(userData.id);
  }

  if (intent === "save") {
    await editUser(userData);
  }

  return redirect("/");
};
