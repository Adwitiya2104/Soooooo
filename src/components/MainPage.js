import React, { useState } from "react";
import { Howl } from "howler";
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

const SongSelector = styled.select`
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  font-size: 16px;
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
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
`;

const MainPage = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  const songs = [
    { name: "Song 1", src: "/assets/song1.mp3" },
    { name: "Song 2", src: "/assets/song2.mp3" },
  ];

  const playSong = (src) => {
    if (selectedSong) {
      selectedSong.unload();
    }
    const song = new Howl({ src });
    song.play();
    setSelectedSong(song);
  };

  const pickupLines = [
    "You're the sunshine that makes my day brighter!",
    "I must be a snowflake, because I've fallen for you.",
    "Is it hot in here or is it just you?",
    "Do you have a map? Because I keep getting lost in your eyes.",
  ];

  const getRandomPickupLine = () => {
    return pickupLines[Math.floor(Math.random() * pickupLines.length)];
  };

  return (
    <Container>
      <h1>Surprise!</h1>
      <div>
        <label>Select a song:</label>
        <SongSelector onChange={(e) => playSong(e.target.value)}>
          <option value="">--Choose a song--</option>
          {songs.map((song) => (
            <option key={song.src} value={song.src}>
              {song.name}
            </option>
          ))}
        </SongSelector>
      </div>
      <Button onClick={() => alert(getRandomPickupLine())}>
        Generate Pick-Up Line
      </Button>
    </Container>
  );
};

export default MainPage;
