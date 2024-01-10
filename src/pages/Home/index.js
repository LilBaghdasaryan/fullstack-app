import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../store/modules/userslice/userSlice";

const Home = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

    return <div>
    <h2>List of Users</h2>
    {user.loading && <div>Loading...</div>}
    {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
    {!user.loading && user.users?.length ? (
      <ul>
        {user.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    ) : null}
  </div>
}
export default Home