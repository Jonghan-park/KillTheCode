import "./Chatting.css";

const messageEx = [
  {
    message: "hello",
    username: "L"
  }
];



function Chatting({socket, username}){
  // const [currentMessage, setCurrentMessage] = useState("");

  // const sendMessage = async() =>{
  //   if(currentMessage !== "") {
  //      const messageData = {
  //       username: username,
  //       message: currentMessage,
  //      }
  //   }
  // }


  return (
    <div className="chattingContainer">
      <div className="chat-header"></div>

      <div className="chat-body">


      </div>

      <div className="chat-footer">
        <input 
        type="text" 
        placeholder="enter text..."
        onChange={(event)=>{
          // setCurrentMessage(event.target.value)
        }}
        />
      <button>&#9658;</button>
      </div>
      
  
    </div>
  );
};

export default Chatting;
