import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="">
      <h1>Chat Room App</h1>
      <h3>Talk to strangers with a common interest!</h3>
      <div>
        <input
          placeholder="Your name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          placeholder="Add your interest"
          type="text"
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <Link
        to={`/chat?name=${name}&room=${room}`}
        onClick={(e) => (!name || !room ? e.preventDefault : null)}
      >
        <button>Sign In</button>
      </Link>
    </div>
  );
};

export default Main;
