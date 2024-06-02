import { Form, useNavigation } from "react-router-dom";

type UserFormProps = {
  className?: string;
  user?: {
    id: string | number;
    firstName: string;
    lastName: string;
  } | null;
  action: string;
};

const UserForm = (props: UserFormProps) => {
  const { className, user, action } = props;
  const navigation = useNavigation();
  const isSubmitPending =
    navigation.state === "submitting" && navigation.formMethod === "post";
  const isDeletePending =
    navigation.state === "submitting" && navigation.formMethod === "delete";
  return (
    <div className={className}>
      <Form className="space-y-4" method="post" action={action}>
        <input type="hidden" name="id" defaultValue={user?.id} />
        <div className="flex flex-col items-start gap-y-2">
          <label>First Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            name="firstName"
            defaultValue={user?.firstName || ""}
          />
        </div>
        <div className="flex flex-col items-start gap-y-2">
          <label>Last Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            name="lastName"
            defaultValue={user?.lastName || ""}
          />
        </div>

        <div className="space-y-4">
          <button
            type="submit"
            name="intent"
            value="save"
            className="w-full px-4 py-3 mt-4 font-semibold bg-sky-600 text-sky-50"
            disabled={isSubmitPending || isDeletePending}
          >
            {isSubmitPending ? "Saving..." : "Save"}
          </button>
          {user ? (
            <button
              type="submit"
              name="intent"
              value="delete"
              formMethod="delete"
              className="w-full px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200"
              disabled={isSubmitPending || isDeletePending}
            >
              {isDeletePending ? "Deleting..." : "Delete"}
            </button>
          ) : null}
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
