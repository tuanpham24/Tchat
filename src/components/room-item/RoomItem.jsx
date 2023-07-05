import "./style.scss";
import { Link } from "react-router-dom";

export default function RoomItem({ room }) {
  return (
    <>
      <div className="room__item">
        <Link to={`/chat-rooms/${room.id}`}>
          <div className="shadow--thin wrp-padding text--black">
            <h3 className="name">{room?.title}</h3>
            <p className="description">{room?.description}</p>
          </div>
        </Link>
      </div>
    </>
  );
}
