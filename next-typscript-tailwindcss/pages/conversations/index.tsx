import Header from "../../components/chatScreen/Header";
import Conversation from "../../components/chatScreen/Conversation";
import ChatArea from "../../components/chatScreen/ChatArea";
import "../../styles/Conversation.module.css";
const index = () => {
  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <Conversation />
        <ChatArea />
      </div>
    </div>
  );
};

export default index;
