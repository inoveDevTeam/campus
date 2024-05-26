import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function MenuThreePoint() {
    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOption1Click = () => {
        alert("Mando un email");
        handleClose();
    };

    const handleOption2Click = () => {
        alert("Mando a discord con el chat??? ");
        handleClose();
    };


    return (
        <>
            <IconButton
                aria-label="settings"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleOption1Click}>Mandar email</MenuItem>
                <MenuItem onClick={handleOption2Click}>Chatear</MenuItem>
            </Menu>
        </>
    )
}

export default MenuThreePoint