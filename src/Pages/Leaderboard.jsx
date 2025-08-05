import { useEffect, useState } from "react";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/leaderboard");
      const data = await res.json();
      setLeaders(data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">🏅 Leaderboard</h1>
        {leaders.map((user, index) => (
          <div
            key={index}
            className="flex justify-between bg-gray-800 p-3 rounded mb-2"
          >
            <span>{index + 1}. {user.name}</span>
            <span>₹{user.totalDonations}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
