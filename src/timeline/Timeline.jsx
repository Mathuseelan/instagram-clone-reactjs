import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./suggestions/Suggestions";
import Post from "./posts/Post";
import { nanoid } from "nanoid";

const Timeline = () => {
  const [posts, setPosts] = useState([
    {
      id: nanoid(),
      user: "mathu",
      postImage:
        "https://th.bing.com/th/id/R.6a7a745d0cf6e1478e104e6a7fee6cc1?rik=xULJFzGntGDtew&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-38.jpg&ehk=dUtU7hvI%2bIv1ZAogg0%2b%2fznLW5KEYTsPob9LlywpnX1Q%3d&risl=&pid=ImgRaw&r=0",
      likes: 17,
      timestamp: "1d",
    },
    {
      id: nanoid(),
      user: "seelan",
      postImage:
        "https://images.pexels.com/photos/1234035/pexels-photo-1234035.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 111098,
      timestamp: "5d",
    },
    {
      id: nanoid(),
      user: "man",
      postImage:
        "https://cdn.pixabay.com/photo/2024/02/08/04/37/vietnam-8560197_640.jpg",
      likes: 34,
      timestamp: "2 min",
    },
    {
      id: nanoid(),
      user: "harry9",
      postImage:
        "https://images.pexels.com/photos/8931684/pexels-photo-8931684.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 9845,
      timestamp: "7 months",
    },
    {
      id: nanoid(),
      user: "aishwarya",
      postImage:
        "https://imgs.search.brave.com/n5qRQ63QQRfqrQMXPWaEZ-dHDbHAJkeY-S20IFDSocA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzA3LzQ5Lzkz/LzM2MF9GXzgwNzQ5/OTMzNF9IZWJ6ODBt/ODNvYm96ZkpWRlBx/TEIzSFRUTDFYbW8x/Qi5qcGc",
      likes: 2343,
      timestamp: "2d",
    },
    {
      id: nanoid(),
      user: "Swetha_ragu",
      postImage:
        "https://images.pexels.com/photos/8531991/pexels-photo-8531991.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 2343,
      timestamp: "7d",
    },
    {
      id: nanoid(),
      user: "steve7_lovv",
      postImage:
        "https://images.pexels.com/photos/15598207/pexels-photo-15598207/free-photo-of-young-indian-photographer-holding-a-professional-dslr-camera-and-showing-the-pictures-to-the-model-he-took-during-the-photoshoot.jpeg?auto=compress&cs=tinysrgb&w=600",
      likes: 8888,
      timestamp: "7d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              key={post.id}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
};

export default Timeline;
