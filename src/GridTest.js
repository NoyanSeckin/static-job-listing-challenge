import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ClearIcon from '@mui/icons-material/Clear';
import {UserData} from "./data";
// import Manage from "./FrontendMentorFiles/images/manage.svg";
export default function GridTest() {

  const [searchList, setSearchList] = useState([]);
  const renderSearchBar = () => {
    return(
      <Grid container justifyContent={"space-between"} className={"search-bar"} xs={
        9} sx={{px: 4}}>
       <Grid item sx={{display: "flex"}} gap={1}  >
        {searchList.map(listItem => (
            <Box sx={{display: "flex"}}>
            <Typography className={"attribute-tag"} variant="body2">
              {listItem} 
            </Typography> 
            <ClearIcon onClick={()=> setSearchList(searchList => [searchList.filter(el => el !== listItem)]) }></ClearIcon>
            </Box>
          ))}
       </Grid>
       <Grid item   >
        <Typography variant="body1">
          Clear
        </Typography>
       </Grid>
      </Grid>
    )
  }

  const addToSearchbar = (item) => {
   if(!searchList.includes(item)){
     setSearchList(searchList => [...searchList, item] )
   }else{
     console.log("Cannot add ",item);
   }
  }
  const renderCardsTop = (userCompany, userNew, userFeatured) =>{
    return(
      <Grid container>
        <Typography variant="caption" display="block" gutterBottom>
                    {userCompany}
        </Typography>
         {userNew && (
           <Typography
           variant="caption"
           className={"new-tag"}
           display="block"
           gutterBottom
            >
           NEW!
          </Typography>
          )}
        {userFeatured &&  (
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
    )
  }
  const renderCardsBottom = (userPostedAt, userContract, userLocation) =>{
    return(
      <Grid container gap={2}>
        <Grid item>
          <Typography variant="caption">{userPostedAt}</Typography>
        </Grid>
        <Grid item>
          <Typography className={"list-style"} variant="caption">
            {userContract}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">{userLocation}</Typography>
        </Grid>
      </Grid>
    )
  }
  const renderCardsRightSide = (userRole, userLevel, userLanguages) => {
    return(
      <Grid
      container
      gap={2}
      alignItems={"center"}
      justifyContent={"end"}
      xs={6}
      sx={{ fontWeight: "bold", pr: 4 }}
    >
      <Typography onClick={ ()=> addToSearchbar(userRole)} className={"attribute-tag"} variant="caption">
        {userRole}
      </Typography>
      <Typography className={"attribute-tag"} variant="caption">
        {userLevel}
      </Typography>
      {Object.values(userLanguages).map((value) => (
        <Typography className={"attribute-tag"}  variant="caption">
          {value}
        </Typography>
      ))}
    </Grid>
    )
  }

  const renderUserData = () => {
    // let filteredData = UserData.filter((user) => user.languages.includes() || user.role);
    return UserData.map((user) => (
      <Grid className={"card"} item xs={9}>
        <Paper sx={{display: 'flex', py:2}}>
         <img className={"user-logo"} src={user.logo.default} alt="sa"/>
            <Grid container  xs={6}>
              {renderCardsTop(user.company, user.new, user.featured)}
              <Typography variant="body2">{user.position}</Typography>
              {renderCardsBottom(user.postedAt, user.contract, user.location)}
            </Grid>
            {renderCardsRightSide(user.role, user.level, user.languages)}
        </Paper>
      </Grid>
    ));
  
  };
  return (
    <div>
      { searchList.length > 0 && renderSearchBar()}
       {/* Cards container */}
      <Box sx={{ mt: 4 }}>
        <Grid container gap={2} justifyContent="center">
          {renderUserData()}
        </Grid>
      </Box>
    </div>
  );
}
