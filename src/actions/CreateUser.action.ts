import { ActionFunctionArgs, redirect } from "react-router-dom";

export const createUserAction = async ({ request }: ActionFunctionArgs) => {
  // Get the form data from the request
  const formData = await request.formData();
  // Convert the form data to an object format
  const payload = Object.fromEntries(formData.entries());

  await fetch("http://localhost:4000/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      id: Date.now(),
    }),
  });

  return redirect("/");
};
