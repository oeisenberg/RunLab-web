import React from "react";
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

function UserProfile(props) {

  if (props.Profile === null) {
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
        <StyledAvatar alt={props.Profile.username} src={props.Profile.profile}>
          {props.Profile.username}
        </StyledAvatar>
      </IconButton>
    );
  }
}

export default UserProfile;
