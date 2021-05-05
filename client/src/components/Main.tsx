import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleSignIn = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!name || !room) {
      e.preventDefault();
      alert('Name and Room are required!');
    }
  };

  return (
    <>
      <div className="background-video">
        <video
          src="./background-video.mp4"
          className="video"
          muted
          loop
          autoPlay
        />
        <p>Anonymous Chat Rooms, Meet New People</p>
      </div>
      <div className="main">
        <p className="main__heading">💬 Chat App</p>
        <p className="main__sub-heading">
          Talk to strangers with common interests!
        </p>
        <div className="main__form">
          <div className="main__form__input">
            <p>Name : </p>
            <input
              placeholder="Your name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="main__form__input">
            <p>Room : </p>
            <input
              placeholder="Add your interest"
              type="text"
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
        </div>
        <Link
          to={`/chat?name=${name}&room=${room}`}
          onClick={(e) => handleSignIn(e)}
        >
          <button className="main__button--sign button">Sign In</button>
        </Link>
      </div>
    </>
  );
};

export default Main;
