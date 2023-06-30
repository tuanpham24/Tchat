import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import "@emotion/styled";
import "./style.scss";

export default function ConfirmModal(props) {
  const { handleLogout } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="modal-confirm">
      <button className="btn-logout btn--dark flex-container"  onClick={handleClickOpen}>
        <LogoutRoundedIcon/>
        <span>Log out</span>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className="text--error" id="responsive-dialog-title">
          {"Bạn có chắc chắn muốn đăng xuất?"}
        </DialogTitle>
        <DialogActions>
          <button
            className="btn-confirm cancel btn--white"
            autoFocus
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="btn-confirm ok btn--primary" onClick={handleLogout} autoFocus>
            OK
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
