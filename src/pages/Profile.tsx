import Breadcrumbs from "../Components/Breadcrumb";
import { useAuth } from "../context/AuthContext";
const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <Breadcrumbs/>
      <h2>Profile</h2>
      {user ? <p>Welcome, {user.username}</p> : <p>Not logged in</p>}
      {user ? <button onClick={logout}>
        Logout?
      </button> : <></>}
    </div>
  );
};

export default Profile;
