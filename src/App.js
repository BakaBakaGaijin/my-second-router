import React from "react";
import { Router, Link } from "@reach/router";

export const App = ({ children }) => (
  <div>
    <nav>
      <Link to="/" className="button">Home</Link> 
      <Link to="dashboard" className="button">Dashboard</Link>
      <Link to="score" className="button">Score</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
      <Score path="score" />
    </Router>
  </div>
);

const Score = () => (
  <div>
    <h2>Score</h2>
  </div>
);

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);