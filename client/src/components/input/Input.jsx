import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => {
  const handleChange= (e) =>{
    e.preventDefault();
    setMessage(e.target.value)
  }
  return(
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={e=>{handleChange(e)}}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
  )
}

export default Input;