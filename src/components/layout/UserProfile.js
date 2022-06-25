import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

function UserProfile() {
  const [profile, setProfile] = useState(null);

  const queryRunLab = async (query) => {
    try {
      await fetch("http://localhost:8080/Runlab/" + query)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.body);
          setProfile(data.body);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (profile === null) {
      queryRunLab("getAtheleteProfile");
    }
  });

  if (profile === null) {
    return <Avatar></Avatar>;
  } else {
    return (
      <Avatar alt={profile.username} src={profile.profile}>
        {profile.username}
      </Avatar>
    );
  }
}

export default UserProfile;
