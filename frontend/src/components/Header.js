import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import PaymentsIcon from '@mui/icons-material/Payments';
import{ NavLink } from 'react-router-dom';

const Header = () => {
    const [value,setValue] = useState();
    return (
        <div>
        <AppBar sx={{backGroundColor: "#800000"}} position= "sticky">
        <Toolbar>
       
                  <Typography>
                     <PaymentsIcon/><br></br>
                     School Payments
                  </Typography>
        </Toolbar>
        </AppBar> 
        <Tabs
        textColor="inherit"
        indicatorColor='secondary'
        value={value}
        onChange={(e, val) => setValue(val)}
        >
        
                <Tab LinkComponent={NavLink} to ="/add"label="Payment Deatils" />
                <Tab LinkComponent={NavLink} to ="/view"label="View Payments" />
                </Tabs>
             </div>
    );
};
export default Header;
