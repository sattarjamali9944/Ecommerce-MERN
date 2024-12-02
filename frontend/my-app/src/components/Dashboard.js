
import { useSelector } from 'react-redux';
const Dashboard = () => {

const user = useSelector((state) => state.auth.user);
console.log(user);
return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Welcome, {user.full_name}!</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Dashboard;
