import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {UserData} from "./data";
// import Manage from "./FrontendMentorFiles/images/manage.svg";
export default function GridTest() {
  const renderSearchBar = () => {
    return(
      <Grid container className={"search-bar"} xs={
        9}>
       <Grid item   >
        <Typography variant="body1">
            CSS
        </Typography>
       </Grid>
      </Grid>
    )
  }
  const renderUserData = () => {
    // let filteredData = UserData.filter((user) => user.languages.includes() || user.role);
    return UserData.map((user) => (
      // Each card is created out of this xs 9 grid
      <Grid className={"card"} item xs={9}>

        <Paper sx={{display: 'flex', py:2}}>
         <img className={"user-logo"} src={user.logo.default} alt="sa"/>
          
          <Grid container>
            
            <Grid container  xs={6}>
             {/* left side of the card */}

              <Grid container>

                <Typography variant="caption" display="block" gutterBottom>
                  {user.company}
                </Typography>
                {user.new && (
                  <Typography
                    variant="caption"
                    className={"new-tag"}
                    display="block"
                    gutterBottom
                  >
                    NEW!
                  </Typography>
                )}
                {user.featured &&  (
                  <Typography
                    variant="caption"
                    className={"featured-tag"}
                    display="block"
                    gutterBottom
                  >
                    FEATURED
                  </Typography>
                )}
              </Grid>
              {/* Middle section */}
              <Typography variant="body2">{user.position}</Typography>
              {/* Bottom section, rendering postedAt, contract and location attributes of users. */}
              <Grid container gap={2}>
                <Grid item>
                  <Typography variant="caption">{user.postedAt}</Typography>
                </Grid>
                <Grid item>
                  <Typography className={"list-style"} variant="caption">
                    {user.contract}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption">{user.location}</Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* right side */}
            <Grid
              container
              gap={2}
              alignItems={"center"}
              justifyContent={"end"}
              xs={6}
              sx={{ fontWeight: "bold", pr: 4 }}
            >
              <Typography className={"attribute-tag"} variant="caption">
                {user.role}
              </Typography>
              <Typography className={"attribute-tag"} variant="caption">
                {user.level}
              </Typography>
              {Object.values(user.languages).map((value) => (
                <Typography className={"attribute-tag"}  variant="caption">
                  {value}
                </Typography>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    ));
  
  };
  return (
    <div>
      {/* Absolute positioned single box */}
      {renderSearchBar()}
       {/* Cards container */}
      <Box sx={{ mt: 4 }}>
        <Grid container gap={2} justifyContent="center">
          {renderUserData()}
        </Grid>
      </Box>
    </div>
  );
}
