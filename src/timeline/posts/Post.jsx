import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header-author">
          <Avatar>{props.user.charAt(0).toUpperCase()}</Avatar>
          <span>{props.user}</span>
          <span>•</span>
          <span>{props.timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img
          src={props.postImage}
          alt="post-image"
        />
      </div>
      <div className="post__footer">
        <div className="post__footer-icons">
          <div className="post__footer-icons-main">
            <FavoriteBorderRoundedIcon className="post-icon" />
            <ChatBubbleOutlineOutlinedIcon className="post-icon"/>
            <SendRoundedIcon className="post-icon"/>
          </div>
          <div className="post__footer-icons-save">
            <BookmarkBorderOutlinedIcon className="post-icons" />
          </div>
        </div>
        <span>Likes {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
