import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ClearIcon from '@mui/icons-material/Clear';
import {UserData} from "./data";
// import Manage from "./FrontendMentorFiles/images/manage.svg";
export default function GridTest() {
 

  const [searchList, setSearchList] = useState([]);
  const deleteFromSearchList = (listItem) => {
    const newSearchList = searchList.filter((el) => el !== listItem);
    setSearchList(newSearchList);
  }
  const renderSearchBar = () => {
    return(
      <Grid container justifyContent={"space-between"} className={"search-bar"} xs={
        9} sx={{px: 4}}>
       <Grid item sx={{display: "flex"}} gap={1}  >
        {searchList.map((listItem) => {
          return (
            <Box key={listItem} sx={{display: "flex"}}>
              <Typography className={"searchlist-tag"} variant="caption">
                {listItem} 
              </Typography> 
              <ClearIcon className={"clear-icon"}
              onClick={() => deleteFromSearchList(listItem)}>
              </ClearIcon>
            </Box>)
        })}
       </Grid>
       <Grid item   >
        <Typography className={"clear-tag"} onClick={()=> setSearchList([])} variant="caption">
          Clear
        </Typography>
       </Grid>
      </Grid>
    )
  }

  const addToSearchbar = (item) => {
   if(!searchList.includes(item)){
     setSearchList(searchList => [...searchList, item] )
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
  const renderCardsRightSide = (userRole, userLevel, userLanguages, userTools) => {
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
      <Typography onClick={ ()=> addToSearchbar(userLevel)} className={"attribute-tag"} variant="caption">
        {userLevel}
      </Typography>
      {Object.values(userLanguages).map((value) => (
        <Typography onClick={ ()=> addToSearchbar(value)}  className={"attribute-tag"}  variant="caption">
          {value}
        </Typography>
      ))}
      {Object.values(userTools).map((value) => (
         <Typography onClick={ ()=> addToSearchbar(value)}  className={"attribute-tag"}  variant="caption">
         {value}
       </Typography>
      ))}
    </Grid>
    )
  }

  const renderUserCard = () => {
    // searchList.every(value => jobTags.includes(value))
    let filteredData = []
    UserData.forEach(user => {
      let userTags = [user.position, user.level, user.contract, user.role, ...user.languages, ...user.tools];
      // compare every value 
      if(searchList.every(value => userTags.includes(value))){
        filteredData.push(user)
      }
    })
    return filteredData.map((user) => (
      <Grid className={"card"} item xs={9}>
        <Paper sx={{display: 'flex',  py:2}}>
         <img className={"user-logo"} src={user.logo.default} alt="sa"/>
            <Grid container  xs={6}>
              {renderCardsTop(user.company, user.new, user.featured)}
              <Typography variant="body2">{user.position}</Typography>
              {renderCardsBottom(user.postedAt, user.contract, user.location)}
            </Grid>
            {renderCardsRightSide(user.role, user.level, user.languages, user.tools)}
        </Paper>
      </Grid>
    ));
  
  };
  return (
    <div>
       {/* Cards container */}
      <Box  sx={{ mt: 4 }}>
        { searchList.length > 0 && renderSearchBar()}
        <Grid container gap={2} justifyContent="center">
          {renderUserCard()}
        </Grid>
      </Box>
    </div>
  );
}
