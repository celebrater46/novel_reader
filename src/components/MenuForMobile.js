import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Img from "../static/Img";

const MenuForMobile = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (name) => {
        setAnchorEl(null);
    };

    return (
        <div className="menuForMobile">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Img fname="hunburger.png" imgClass="hunburger" isLocal={false} />
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