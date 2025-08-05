import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/user");
      const data = await res.json();
      setUserData(data);
    };
    fetchData();
  }, []);

  if (!userData) return <div className="min-h-screen bg-black text-white p-4">Loading...</div>;

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome, {userData.name}</h1>
        <p>Referral Code: <strong>{userData.referralCode}</strong></p>
        <p>Total Donations Raised: ₹{userData.totalDonations}</p>
        <h2 className="mt-6 text-xl font-semibold">🏆 Rewards & Unlockables</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="bg-gray-800 p-4 rounded">🎁 Certificate</div>
          <div className="bg-gray-800 p-4 rounded">🔥 Leaderboard Badge</div>
          <div className="bg-gray-800 p-4 rounded">🎉 Swag Pack</div>
        </div>
        <Link to="/leaderboard">
          <button className="mt-6 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
            View Leaderboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
