import { useLoaderData } from "react-router-dom";
import { EditUserLoaderResponse } from "./EditUser.loader";
import UserForm from "./components/UserForm";

const EditUser = () => {
  const { user } = useLoaderData() as EditUserLoaderResponse;

  return (
    <div className="max-w-sm mx-auto">
      <UserForm user={user} action={`/user/${user.id}`} />
    </div>
  );
};

export default EditUser;
