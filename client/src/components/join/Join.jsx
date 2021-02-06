import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <div className='heading'>Join</div>
        <div>
          <input
            placeholder='Your Name'
            className='joinInput mt-20'
            type='text'
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="Room's Name"
            className='joinInput mt-20'
            type='text'
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!room || !name ? e.preventDesdfault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type='submit' className='button mt-20 '>
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
