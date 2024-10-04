import { CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const { reload } = useSelector((state) => state.reload);
  console.log("");

  return (
    <div className="sticky bottom-0 bg-white z-10 shadow-md">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl font-bold p-4">Innovative TECH</h1>
          {reload && <CircularProgress />}
        </div>
      </div>
    </div>
  );
};

export default Footer;
