import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/Auth";
import { useForm } from "react-hook-form";
import { addRoom, getRoomList } from "../../services/chat-room";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
import RoomItem from "../../components/room-item/RoomItem";
import Loading from "../../components/loading/Loading";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import "./style.scss";

export default function ChatRoomList() {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [roomList, setRoomList] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddRoom = (data) => {
    addRoom(data, currentUser.uid);
    alert("Add room ok!");
    setOpenDialog(false);
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleGetRoomList = async () => {
    await getRoomList(currentUser.uid, setRoomList);
    setLoading(false);
  };
  useEffect(() => {
    handleGetRoomList();
  }, []);

  return (
    <>
      <div id="chatroom-list">
        <div className="title flex-container border--bottom ">
          <div className="flex-container items--center">
            <h2>Chat room list</h2>
            <ArrowRightRoundedIcon />
          </div>
          <div className="add__form">
            <button
              className="btn--primary flex-container items--center"
              style={{ padding: "3px 5px", borderRadius: "5px" }}
              onClick={handleOpenDialog}
            >
              <AddRoundedIcon style={{ marginBottom: "6px" }} />
              <span style={{ fontSize: "15px" }}>Add room</span>
            </button>
            <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <form className="form-add" onSubmit={handleSubmit(handleAddRoom)}>
                <DialogTitle id="alert-dialog-title">
                  {"Add a room chat"}
                </DialogTitle>
                <DialogContent>
                  <div className="form-controll">
                    <input
                      className="input-primary border--bottom"
                      name="title"
                      {...register("title", { required: true })}
                      placeholder="Enter Title"
                    />
                    {errors.title && (
                      <span className="text--error">Title is required</span>
                    )}
                  </div>
                  <div className="form-controll">
                    <input
                      className="input-primary border--bottom"
                      name="description"
                      {...register("description", { required: true })}
                      placeholder="Enter description"
                    />
                    {errors.description && (
                      <span className="text--error">
                        Description is required
                      </span>
                    )}
                  </div>
                </DialogContent>
                <DialogActions>
                  <button
                    type="button"
                    className="btn btn--white"
                    onClick={handleCloseDialog}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn--primary border--around"
                    autoFocus
                  >
                    Add room
                  </button>
                </DialogActions>
              </form>
            </Dialog>
          </div>
        </div>
        <div className="rooms__container">
          {loading ? (
            <Loading />
          ) : (
            roomList.map((room) => <RoomItem key={room.id} room={room} userId={currentUser.uid}/>)
          )}
          {roomList.length < 0 && loading == false ? (
            <div className="rooms--empty wrp-padding">
              <h3 className="text--center">
                <i>Bạn chưa có phòng chat nào!</i>
              </h3>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
