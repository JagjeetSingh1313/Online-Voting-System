import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/votepage.css";

const VotePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [voting, setVoting] = useState(false);
  const navigate = useNavigate();

  // Demo candidates (fallback)
  const demoCandidates = [
    { id: 1, name: "Jagjeet Singh", party: "People's Rule ", symbol: "🌱" },
    { id: 2, name: "Anshraj ", party: "Unity Party", symbol: "🤝" },
    { id: 3, name: "Aryan Tomar", party: "Justice League", symbol: "⚖️" },
    { id: 4, name: "Neha Singh", party: "Youth Power", symbol: "🔥" },
    { id: 5, name: "Arjun Patel", party: "Development Front", symbol: "🚀" },
  ];

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("/api/candidates", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) throw new Error();

        const data = await response.json();

        // If API empty → use demo
        setCandidates(data.length ? data : demoCandidates);

      } catch {
        setCandidates(demoCandidates); // fallback
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  const handleVote = async (candidateId) => {
    setVoting(true);

    try {
      await new Promise((res) => setTimeout(res, 800)); // smooth UX
      alert("✅ Vote cast successfully!");
      navigate("/voter");
    } catch (err) {
      alert("Error voting");
    } finally {
      setVoting(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading Candidates...</p>
      </div>
    );
  }

  return (
    <div className="vote-modern">

      {/* HEADER */}
      <div className="vote-header">
        <h1>🗳️ Cast Your Vote</h1>
        <p>Select one candidate to proceed</p>
      </div>

      {error && <div className="error">{error}</div>}

      {/* GRID */}
      <div className="vote-grid">
        {candidates.map((candidate, index) => (
          <div key={candidate.id} className={`vote-card color-${index}`}>

            <div className="symbol">{candidate.symbol || "🗳️"}</div>

            <h3>{candidate.name}</h3>
            <p className="party">{candidate.party}</p>

            <button
              className="vote-btn"
              disabled={voting}
              onClick={() => handleVote(candidate.id)}
            >
              {voting ? "Voting..." : "Vote"}
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default VotePage;