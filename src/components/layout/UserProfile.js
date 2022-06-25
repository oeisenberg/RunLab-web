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
    return (
      <Avatar
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, float: "right", mr:3 }}
      />
    );
  } else {
    return (
      <Avatar
        alt={profile.username}
        src={profile.profile}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, float: "right", mr:3 }}
      >
        {profile.username}
      </Avatar>
    );
  }
}

export default UserProfile;
