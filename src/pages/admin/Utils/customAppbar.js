import React from 'react';
import { AppBar, UserMenu, Logout, Button } from 'react-admin';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { AiOutlineLogout } from "react-icons/ai";


const handleLogOut = () => {
    window.localStorage.removeItem('user');
    window.location.href = '/'; 
};

const CustomAppBar = (props) => (
    <AppBar {...props}>
        <Typography
            variant="h6"
            color="inherit"
            className="title"
            id="react-admin-title"
        >
        </Typography>
        <Box flex="1"></Box>
        <Link to="/settings">
            <SettingsIcon style={{ color: 'white', marginRight: '16px' }} />
        </Link>
        <UserMenu>
            <Logout />
        </UserMenu>
        <Button onClick={handleLogOut}><AiOutlineLogout /></Button>
    </AppBar>
);

export default CustomAppBar;
