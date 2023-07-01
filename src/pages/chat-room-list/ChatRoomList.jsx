import { useState } from "react";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import RoomItem from "../../components/room-item/RoomItem";
import "./style.scss";

export default function ChatRoomList() {
  const [roomList, setRoomList] = useState([]);

  return (
    <>
      <div id="chatroom-list">
        <div className="title flex-container">
          <div className="flex-container items--center">
            <h2>Chat room list</h2>
            <ArrowRightRoundedIcon />
          </div>
          <div>

          </div>
        </div>
        <div className="rooms__container">
          {roomList.length > 0 ? (
            <RoomItem />
          ) : (
            <div className="rooms--empty wrp-padding">
              <h3 className="text--center">
                <i>Bạn chưa có phòng chat nào!</i>
              </h3>
            </div>
          )}
          {/* <RoomItem/> */}
        </div>
      </div>
    </>
  );
}
