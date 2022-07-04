import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

const StyledAvatar = styled(Avatar)`
      &:hover {
        transform: scale(1.1);
      }
      }
  `;

function UserProfile(props) {

  if (props.Profile === null) {
    return (
      <Box sx={{mt:1, mr:4 }}>
        <Avatar/>
      </Box>
    );
  } else if (useLocation().pathname === "/Profile") {
    return (
      <Box sx={{mt:1, mr:4 }}>
        <Avatar alt={props.Profile.username} src={props.Profile.profile}>
            {props.Profile.username}
        </Avatar>
      </Box>
    );
  } else {
    return (
      <IconButton
        component={Link}
        to={"Profile"}
        sx={{mr:3 }}
      >
        <StyledAvatar alt={props.Profile.username} src={props.Profile.profile}>
          {props.Profile.username}
        </StyledAvatar>
       </IconButton>
    );
  }
}

export default UserProfile;
