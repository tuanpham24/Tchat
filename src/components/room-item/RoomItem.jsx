import { useState } from "react";
import { deleteRoomById } from "../../services/chat-room";
import { Link } from "react-router-dom";
import AlertDialog from "../alert-dialog/AlertDialog";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import "./style.scss";

function DeleteBtn({ handleClickOpen }) {
  return (
    <>
      <button
        onClick={handleClickOpen}
        type="button"
        className="action__btn"
        // onClick={deleteRoomById(userId, room.id)}
      >
        <DeleteOutlineRoundedIcon className="text--error" />
      </button>
    </>
  );
}

export default function RoomItem({ room, userId }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <div className="room__item flex-container shadow--thin wrp-padding">
        <Link to={`/chat-rooms/${room.id}`} className="room-content">
          <div className="text--black flex-container items--center">
            <h3 className="name">{room?.title}</h3>
            <p className="description">{room?.description}</p>
          </div>
        </Link>
        <div className="room-action flex-container">
          <button className="action__btn">
            <PersonAddRoundedIcon className="text--primary" />
          </button>
          <button type="button" className="action__btn">
            <EditRoundedIcon className="text--warning" />
          </button>

          <AlertDialog
            isOpen={openDialog}
            closeDialog={handleCloseDialog}
            openBtn={<DeleteBtn handleClickOpen={handleOpenDialog} />}
            content={
              <h3 className="text--error">Bạn có chắc chắn muốn xóa phòng: {room?.title}?</h3>
            }
            dialogFunc={() => {
              alert("Đang phát triển tính năng này!");
              setOpenDialog(false)
            }}
          />
        </div>
      </div>
    </>
  );
}
