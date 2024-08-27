import React from "react";
import { Avatar } from "@mui/material";
import "./suggestionProfiles.css";

const SuggestionsProfiles = (props) => {
  return (
    <div className="suggestionsProfiles">
      <div className="suggestionsProfiles__profiles-left">
        <span>
          <Avatar>
            {props.user ? props.user.charAt(0).toUpperCase() : ""}
          </Avatar>
        </span>
        <div className="profile-info">
          <span className="profile-username">{props.user}</span>
          <span className="profile-about">{props.about}</span>
        </div>
      </div>
      <div className="suggestionsProfiles__profiles-right">
        <button>Follow</button>
      </div>
    </div>
  );
};

export default SuggestionsProfiles;
