import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/voterDashboard.css"; // ✅ FIXED import

const VoterDashboard = () => {
  const [voterDetails, setVoterDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setVoterDetails({
        name: "Jagjeet Singh",
        email: "bcs9483045@gmail.com",
        voterId: "IND123456",
        status: "Eligible",
        hasVoted: false,
      });
      setLoading(false);
    }, 1000);
  }, []);

  const handleVote = () => {
  navigate("/vote");
};

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading Dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-full">

      {/* NAVBAR */}
      <header className="top-navbar">
        <h2>🗳️ Online Voting</h2>

        <div className="nav-links">
          <span className="active">Dashboard</span>
          <span onClick={() => navigate("/vote")}>Vote</span>
          <span onClick={() => navigate("/login")}>Logout</span>
        </div>
      </header>

      {/* MAIN CONTENT WRAPPER */}
      <div className="dashboard-container">

        {/* WELCOME */}
        <section className="welcome-section">
          <div>
            <h1>Welcome, {voterDetails.name}</h1>
            <p>Cast your vote securely and transparently</p>
          </div>

          <div className="avatar-big">
            {voterDetails.name[0]}
          </div>
        </section>

        {/* STATS */}
        <section className="stats-row">
          <div className="stat colorful">
            <h4>🆔 Voter ID</h4>
            <p>{voterDetails.voterId}</p>
          </div>

          <div className="stat green">
            <h4>📊 Status</h4>
            <p>{voterDetails.status}</p>
          </div>

          <div className="stat purple">
            <h4>🗳️ Vote</h4>
            <p>{voterDetails.hasVoted ? "Completed" : "Pending"}</p>
          </div>
        </section>

        {/* ACTIONS */}
        <section className="actions-row">

          <div className="big-card primary-card">
            <h2>🗳️ Cast Your Vote</h2>
            <p>Participate in the election securely</p>

            <button
              className="btn-main"
              onClick={handleVote}
              disabled={voterDetails.hasVoted}
            >
              {voterDetails.hasVoted ? "Already Voted" : "Vote Now"}
            </button>
          </div>

          <div className="big-card secondary-card">
            <h2>👥 View Candidates</h2>
            <p>Explore all candidates before voting</p>

            <button
              className="btn-alt"
              onClick={() => navigate("/vote")}
            >
              View List
            </button>
          </div>

        </section>

        {/* ACTIVITY */}
        <section className="activity colorful-card">
          <h3>📜 Recent Activity</h3>

          <ul>
            <li>✔️ Logged in successfully</li>
            <li>🕒 Last login: Today</li>
            <li>📢 Election is live</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default VoterDashboard;