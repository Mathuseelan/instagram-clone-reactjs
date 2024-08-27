import React from "react";
import "./Sidenav.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import SlideshowRoundedIcon from "@mui/icons-material/SlideshowRounded";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
// import { getUsers } from "../app/slices/usersSlice";
import { getAuth } from "../app/slices/authSlice";
import { Avatar } from "@mui/material";
import { removeAuth } from "../app/slices/authSlice";
const Sidenav = () => {
  const user = useSelector(getAuth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(removeAuth());
  };
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="instagram_main_logo"
      />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeRoundedIcon fontSize="large" />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchRoundedIcon fontSize="large" />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreRoundedIcon fontSize="large" />
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <SlideshowRoundedIcon fontSize="large" />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <MessageIcon fontSize="large" />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon fontSize="large" />
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon fontSize="large" />
          <span>Create</span>
        </button>
        <button className="sidenav__button">
          {/* <LogoutIcon fontSize="large"/> */}
          <Avatar />
          <span>{user.username}</span>
          <button className="sidenav__logoutButton" onClick={handleLogout}>
            Logout
          </button>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon fontSize="large" />
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
