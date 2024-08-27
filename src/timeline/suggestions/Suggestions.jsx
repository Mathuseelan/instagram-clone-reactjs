import React, { useState } from "react";
import "./Suggestions.css";
import { nanoid } from "nanoid";
import SuggestionsProfiles from "./SuggestionsProfiles";

const Suggestions = () => {
  const [profiles, setProfiles] = useState([
    {
      id: nanoid(),
      user: "d-for-dhanush",
      about: "New To Instagram",
    },
    {
      id: nanoid(),
      user: "Madan5_",
      about: "New To Instagram",
    },
    {
      id: nanoid(),
      user: "Swetha-love",
      about: "Followed by msn1148",
    },
    {
      id: nanoid(),
      user: "Ajith.ak",
      about: "New To Instagram",
    },
    {
      id: nanoid(),
      user: "Surya_singam",
      about: "Followed by vijay-actor",
    },
  ]);

  return (
    <div className="suggestions">
      <div className="suggestions__title">
        <span>Your Suggestions</span>
        <span>view all</span>
      </div>
      
      {profiles.map((profile) => (
        <SuggestionsProfiles
          key={profile.id}
          user={profile.user}
          about={profile.about}
        />
      ))}
    </div>
  );
};

export default Suggestions;
