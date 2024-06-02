import UserForm from "../../components/user/UserForm";

const CreateUser = () => {
  return (
    <div className="max-w-sm mx-auto">
      <UserForm action="/user/create" />
    </div>
  );
};

export default CreateUser;
