import { useLoaderData, Link } from "react-router-dom";
import { UsersLoaderResponse } from "../../loaders/Users.loader";

const UsersList = () => {
  const { users } = useLoaderData() as UsersLoaderResponse;
  return (
    <div className="max-w-sm mx-auto">
      <h1 className="mb-6 text-2xl text-semibold">Users</h1>

      <ul className="space-y-2">
        {users.map(user => {
          return (
            <li key={user.id}>
              <Link to={`/user/${user.id}`} className="hover:underline">
                {user.firstName} {user.lastName}
              </Link>
            </li>
          );
        })}
      </ul>

      <Link
        to="/user/create"
        className="inline-block w-full px-4 py-3 mt-4 font-semibold bg-sky-600 text-sky-50"
      >
        Add User
      </Link>
    </div>
  );
};

export default UsersList;
