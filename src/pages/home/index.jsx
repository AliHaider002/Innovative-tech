import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import userService from "../../utils/controllers/usersServices";
import Listing from "../../components/home/Listing";

const Home = () => {
  return (
    <div>
      <div>
        <Listing />
      </div>
    </div>
  );
};

export default Home;
