import UserForm from "./UserForm";

const CreateUser = () => {
  return (
    <div className="max-w-sm mx-auto">
      <UserForm action="/user/create" />
    </div>
  );
};

export default CreateUser;
