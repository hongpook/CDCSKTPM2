import React, { useState } from 'react';
import { AppBar, Button } from 'react-admin';
import { Link } from 'react-router-dom';
import { Typography, Box, Modal, Button as MuiButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { AiOutlineLogout } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";

const CustomAppBar = (props) => {
    const [openLogoutModal, setOpenLogoutModal] = useState(false);
    const [openUserModal, setOpenUserModal] = useState(false);

    
    const user = JSON.parse(window?.localStorage?.getItem("user"))
    // console.log("🚀 ~ CustomAppBar ~ user:", user?.id)
    

    const handleLogOut = () => {
        window.localStorage.removeItem('user');
        window.location.href = '/';
    };

    const openLogout = () => {
        setOpenLogoutModal(true);
    };

    const closeLogout = () => {
        setOpenLogoutModal(false);
    };

    const openUser = () => {
        setOpenUserModal(true);
    };

    const closeUser = () => {
        setOpenUserModal(false);
    };

    return (
        <React.Fragment>
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
                <Button onClick={openUser}><BsPersonBoundingBox /></Button>
                <Button onClick={openLogout}><AiOutlineLogout /></Button>
            </AppBar>
            <Modal
                open={openLogoutModal}
                onClose={closeLogout}
                aria-labelledby="logout-modal-title"
                aria-describedby="logout-modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: '4px', boxShadow: 24, p: 4, maxWidth: 400 }}>
                    <Typography id="logout-modal-title" variant="h6" component="h2">
                        Are you sure you want to log out?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                        <MuiButton variant="contained"  onClick={handleLogOut}>Logout</MuiButton>
                        <MuiButton variant="contained" color="error" onClick={closeLogout} >Cancel</MuiButton>
                    </Box>
                </Box>
            </Modal>
            <Modal
                open={openUserModal}
                onClose={closeUser}
                aria-labelledby="settings-modal-title"
                aria-describedby="settings-modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', borderRadius: '4px', boxShadow: 24, p: 4, maxWidth: 400 }}>
                    <Typography id="settings-modal-title" variant="h6" component="h2">
                        
                    </Typography>
                    <Typography id="settings-modal-description" sx={{ mt: 2 }}>
                        <img src={require('../users/images/' + user.img_user)}/>
                        <h5>Tên người dùng: {user.username} </h5>
                        <h5>Email: {user.email} </h5>
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                        <MuiButton variant="contained" onClick={closeUser}>Close</MuiButton>
                    </Box>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default CustomAppBar;
