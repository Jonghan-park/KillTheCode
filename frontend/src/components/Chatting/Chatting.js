import React, { useEffect, useState } from "react";
import "./Chatting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faCirclePlus,faFaceSmile, faKey } from "@fortawesome/free-solid-svg-icons";

const users = [
  {
    name: "Joseph",
    skill: "JS, HTML, CSS, React, NodeJS, MongoDB",
    linkedIn: "www.linkedin.com",
    github: "https://github.com/Jonghan-park",
    email: "pjh843@gmail.com",
    emojiInUser: "👦🏼",
  },
  {
    name: "Eunji",
    skill: "JS, HTML, CSS, React, NodeJS, MongoDB",
    linkedIn: "www.linkedin.com",
    github: "www.github.com",
    email: "abc123@gmail.com",
    emojiInUser: "👩🏻‍🦰",
  },
 
];

const messageEx = [
  {
    message: "",
    username: "L"
  }
];




function Chatting(){


  const [word, setWord] = useState(messageEx);
  const [wordList, setWordList] = useState("");
    

  const sendMessage = (e) => {
    e.preventDefault();
    setWord(e.target.value)
    console.log("word:" +word)
     

    //  await setWordList((list)=>[...list], word)
}
// v2

  return (
    <div className="chattingContainer">
          

      
      <div className="chat-body">


       <div className="dialogbox">
         <div className="message-body">
         <span className="tip tip-right"></span>
             <div className="message">
 
           <span className="chat-box comment-box">Hi, How are you?</span></div>
        </div>
        <span className="chat-icon ">{users[0].emojiInUser}</span>
      </div>


        <div>
       <span className="chat-icon">{users[1].emojiInUser}</span>
       <span className="chat-box text-box">how are you?</span></div>
    
      </div>

        <div className="chat-footer">
        <FontAwesomeIcon icon={faCirclePlus} className="plusIcon" />
        <input 
        type="text" 
        placeholder="enter text..."
        className="inputChat"
        />
         <FontAwesomeIcon icon={faFaceSmile} className="smileIcon" />
      <button className="chatBtn" type="submit">&#9658;</button>
      
     {/* <FontAwesomeIcon icon={faCirclePlus} /> */}
       
      </div>
      
  
    </div>
  );
  
};

export default Chatting;

