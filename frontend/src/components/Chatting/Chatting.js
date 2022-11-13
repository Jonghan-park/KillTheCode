import React, { useEffect, useRef, useState } from "react";
import "./Chatting.css";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import axios from "axios";
import Message from "./Message";

function Chatting({ projectId }) {
  const { user } = useSelector((state) => state.auth);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  const scrollRef = useRef();

  const submitNewChat = async (event) => {
    event.preventDefault();
    const message = {
      userId: user._id,
      content: newMessage,
      projectId: projectId
    };
    socket.current.emit("sendMessage", {
      user: user._id,
      content: newMessage,
      projectId: projectId
    });
    try {
      const res = await axios.post("http://localhost:5000/chatting/add", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    socket.current = io("ws://localhost:5000");
    socket.current.on("getMessage", data => {
      setArrivalMessage({
        user: data.user,
        content: data.content,
        date: data.date
      });
    });
  }, []);
  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/chatting/${projectId}`);
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    if (projectId) {
      getMessages();
    }
  }, [projectId]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chattingContainer">
      <div className="chat-body">
        {messages.map((message, index) => {
          return (
            <div key={index} ref={scrollRef}>
              <Message
                message={message}
                owner={message.user === user._id || message.user._id === user._id}
              />
            </div>
          );
        })}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="enter text..."
          className="inputChat"
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button className="chatBtn" onClick={submitNewChat}>&#9658;</button>
      </div>
    </div>
  );
};

export default Chatting;
