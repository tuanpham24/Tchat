import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { useParams } from "react-router-dom";
import { getRoomById } from "../../services/chat-room";
import { getMessages } from "../../services/message";
import MessageItem from "../../components/message-item/MessageItem";
import MessageInput from "../../components/message-input/MessageInput";
import "./style.scss";

export default function ChatRoomItem() {
  const { currentUser } = useContext(AuthContext);
  const [roomInfo, setRoomInfo] = useState();
  const params = useParams();
  const roomId = params.id;
  const [messages, setMessages] = useState([]);

  const handleGetRoomInfo = () => {
    getRoomById(roomId).then((roomData) => {
      setRoomInfo(roomData);
    });
  };

  const handleGetAllMessage = async () => {
    await getMessages(roomId, setMessages);
  };

  useEffect(() => {
    handleGetRoomInfo();
    handleGetAllMessage();
  }, []);

  return (
    <>
      <div id="room-item" className="flex-container">
        <div className="room__output">
          <div className="room__heading flex-container items--center bg--white border--bottom shadow--medium">
            <h3 className="title">{roomInfo?.title}</h3>
            <div className="author flex-container items--center">
              <span>Created by:</span>
              <div className="flex-container items--center">
                <span>
                  <b>{roomInfo?.createdBy.name}</b>
                </span>
                <img src={roomInfo?.createdBy.photoURL} alt="" />
              </div>
            </div>
          </div>

          <div className="message-container">
            {messages.length > 0 ? (
              messages.map((messageItem) => (
                <MessageItem
                  key={messageItem.id}
                  userId={currentUser.uid}
                  messageData={messageItem}
                />
              ))
            ) : (
              <div className="rooms--empty wrp-padding">
                <h3 className="text--center">
                  <i>Hiện chưa có tin nhắn nào!</i>
                </h3>
              </div>
            )}
          </div>
        </div>

        <MessageInput user={currentUser} roomId={roomId} />
      </div>
    </>
  );
}
