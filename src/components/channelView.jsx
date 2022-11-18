/* eslint-disable */
import { IoIosArrowBack, IoIosPaperPlane } from  "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import socket from './sokectConection';

function Channel() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const userData = JSON.parse(sessionStorage.user);
  let location = useLocation();
  let room = location.state.item

  /* socket */
  //socket.emit('join_room', room);

  const handleSendmessages = (e) => {
    e.preventDefault();
    if (message.trim() && JSON.parse(sessionStorage.user)) {
      console.log(userData.username);
      // emit a messages to the server
      socket.emit('message', {
        text: message,
        name: userData[0].username,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage('');
  }

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]))
  }, [socket, messages])

  return (
    <main className="chat-main">
      <div className="chat-container">
        <div className="chat-header">
          <Link to="/channels"><button className="button-back__chat" ><IoIosArrowBack/></button></Link>
          <h2>{location.state.item.name}</h2>
        </div>
        <section className="messages__container">
          {messages.map((message) => {
           return message.name === userData[0].username ? (
              <div className="message__chats" key={message.id}>
                <div className="message__sender">
                  <p>{message.text}</p>
                </div>
                <p className="sender__name">You</p>
              </div>
            ) : (
              <div className="message__chats"  key={message.id}>
                <div className="message__recipient" >
                  <p>{message.text}</p>
                </div>
                <p className="recipient__name">{message.name}</p>
              </div>
            )
          })}

        </section>

        <form className="chat-bottom" onSubmit={handleSendmessages}>
          <input 
            type="text"
            name="message"
            placeholder="Write a message"
            value = {message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button><IoIosPaperPlane/></button>
        </form>

      </div>
    </main>
  );
}

export default Channel;