import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hunburger from "./img/hunburger.png";

const MenuForMobile = (props) => {
    const divStyle = {
        margin: "-5px auto 0",
        opacity: "0.7",
    }
    const imgStyle = { width: "32px" }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (name) => {
        setAnchorEl(null);
    };

    return (
        <div style={divStyle}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <img src={Hunburger} style={imgStyle} />
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                {props.pageNames.map((array) =>(
                    <MenuItem key={array[0]} onClick={() => handleClose(array[0])}>{array[props.lang]}</MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export default MenuForMobile;