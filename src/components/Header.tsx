import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
    return (
        <AppBar position="static" color="default" elevation={1} sx={{ borderBottom: '1px solid #e0e0e0', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.25)', }}>
            <Toolbar sx={{ justifyContent: 'flex-start' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ fontWeight: 600, marginLeft: 1, }}>
                    Where in the world?
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
