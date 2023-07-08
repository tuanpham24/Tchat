import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./style.scss";

export default function AlertDialog({
  isOpen,
  closeDialog,
  openBtn,
  title,
  content,
  dialogFunc,
}) {
  return (
    <div id="primary-dialog">
      <div>{openBtn}</div>
      <Dialog
        open={isOpen}
        onClose={closeDialog}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
          <button
            type="button"
            className="btn btn--white"
            autoFocus
            onClick={closeDialog}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn--primary border--around"
            onClick={dialogFunc}
          >
            OK
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
