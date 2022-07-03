import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledAvatar = styled(Avatar)`
      &:hover {
        transform: scale(1.1);
      }
      }
  `;

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
      <StyledAvatar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          float: "right",
          mr: 3,
        }}
      />
    );
  } else {
    return (
      <IconButton
        component={Link}
        to={"Profile"}
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          float: "right",
          mr: 3,
        }}
      >
        <StyledAvatar alt={profile.username} src={profile.profile}>
          {profile.username}
        </StyledAvatar>
      </IconButton>
    );
  }
}

export default UserProfile;
