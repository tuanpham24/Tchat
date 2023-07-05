import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import "./style.scss";

export default function PrimaryDialog({openBtn, title, content, dialogFunc}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="primary-dialog">
      <div onClick={handleClickOpen}>{openBtn}</div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          {content}
        </DialogContent>
        <DialogActions>
          <button 
            className="btn btn--white"
            autoFocus onClick={handleClose}
          >
            Cancel
          </button>
          <button 
            className="btn btn--primary"
            onClick={dialogFunc}
          >OK</button>
        </DialogActions>
      </Dialog>
    </div>
  );
}