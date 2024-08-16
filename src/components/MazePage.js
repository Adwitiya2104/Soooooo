import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

const ClickableDiv = styled(motion.div)`
  background-color: #fbc02d;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 18px;
`;

const MazePage = () => {
  const { pageId } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    const randomPage = Math.random() > 0.5 ? "/maze/next" : "/main";
    navigate(randomPage);
  };

  return (
    <Container>
      <h2>Maze Page {pageId}</h2>
      <ClickableDiv
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Click here for a surprise!
      </ClickableDiv>
    </Container>
  );
};

export default MazePage;
