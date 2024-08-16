import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 20%;
  background-color: #ffeb3b;
  color: #000;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  background-color: #fbc02d;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`;

const HomePage = () => {
  const navigate = useNavigate();

  const startMaze = () => {
    navigate("/maze/start");
  };

  return (
    <Container>
      <h1>Welcome to Your Surprise!</h1>
      <Button onClick={startMaze}>Start Maze</Button>
    </Container>
  );
};

export default HomePage;
