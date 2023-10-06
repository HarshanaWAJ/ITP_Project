
import React, { useState } from 'react'
import {AppBar, Toolbar, Typography, Tabs, Tab, Button} from'@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from 'react-router-dom';
import "./css/Header.css"
const LibraryHeader = () => { 
  const [value,setValue] = useState();
  return (
  
     
    <div className="marginnavbar">
    
        <AppBar position='sticky' sx={{backgroundColor: "#7c0c10"}}>
            <Toolbar>
                <Typography  sx={{ marginRight: '80px' }}>
                <MenuBookIcon sx = {{color: "#f1cf3d"}}/>
                </Typography>
                 <Tabs  indicatorColor='secondary' value={value} onChange={(e,value)=>setValue(value)} >
                    <Tab LinkComponent={NavLink} to="/home" label="Library" sx={{ color:"#f1cf3d", '&.Mui-selected': { color: '#ffffa3' } }}/>
                    <Tab LinkComponent={NavLink} to="/books" label="Books" sx={{color:"#f1cf3d", '&.Mui-selected': { color: '#ffffa3' } }}/>
                    <Tab LinkComponent={NavLink} to="/services" label="Services" sx={{color:"#f1cf3d", '&.Mui-selected': { color: '#ffffa3' } }}/>
                    <Tab LinkComponent={NavLink} to="/contact" label="Contact" sx={{color:"#f1cf3d", '&.Mui-selected': { color: '#ffffa3' } }}/>    
                </Tabs>
               
                
                <Button 
                style={{
                borderRadius: 10,
                backgroundColor: "#f1cf3d",
                padding: "2px 12px",
                fontSize: "14px",
                color:"#7c0c10",
                marginLeft:"auto"
                }}
                variant="contained"
                
                LinkComponent={NavLink} to="/login" lable="Login">Librarian Login</Button>
                

            </Toolbar>
            
        </AppBar>
      </div>  
   
  );
};

export default LibraryHeader;