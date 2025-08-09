import { useEffect } from "react";
import { fetchUsers } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Slab } from "react-loading-indicators";

function UsersList() {
  // ---
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <Slab color="#9f9de1" size="large" text="loading ..." textColor="#929292" />;

  if (error) return <p>{error}</p>;

  return (
    <div>
      {users.map((item) => {
        return (
          <p>
            {item.name} | {item.email}
          </p>
        );
      })}
    </div>
  );
}

export default UsersList;
