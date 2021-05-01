import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
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
        onClick={(e) => (!name || !room ? e.preventDefault : null)}
      >
        <button className="main__button--sign button">Sign In</button>
      </Link>
    </div>
  );
};

export default Main;
