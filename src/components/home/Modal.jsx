import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MultiStepForm from "../form/MultiStepForm";
import CloseIcon from "@mui/icons-material/Close";

export default function FormDialog({ open, handleClose }) {
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="flex justify-between items-center">
            <div>Add User</div>
            <div onClick={handleClose}>
              <CloseIcon />
            </div>
          </div>
        </DialogTitle>
        <DialogContent className="w-[30rem]">
          <MultiStepForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
