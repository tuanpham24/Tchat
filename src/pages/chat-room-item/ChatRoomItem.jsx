import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getRoomById } from "../../services/chat-room"

export default function ChatRoomItem({title}) {
  const [roomInfo, setRoomInfo] = useState();
  const params = useParams();
  const roomId = params.id;

  const handleGetRoomInfo = () => {
    getRoomById(roomId).then(roomData => {
      setRoomInfo(roomData)
    })
  }

  useEffect(() => {
    handleGetRoomInfo();
  }, [])

  console.log("roomInfo", roomInfo);

  return(
    <>
      <div id="room-item">
        <div className="room__heading flex-container">
          <h1>{roomInfo?.title}</h1>
        </div>
      </div>
    </>
  )
}