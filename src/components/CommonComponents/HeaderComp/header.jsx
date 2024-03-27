import React from "react";
import { Box} from "@mui/system";
import "./header.css";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import logo from "../../../Assets/Images/logo.png";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function HeaderCompo ({value,onChange,commonTexts}) {
    console.log('MineCart--->', commonTexts)
    return (
        <Box className='mainHeaderBox'>
            <img src={logo} alt='logo' className="mainLogo"/>
            <Typography className="titleText">
              {commonTexts?.MineCart}
            </Typography>
            <TextField
            type='search'
            value={value}
            onChange={onChange}
            className='searchField'
            size='small'
            InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <SearchIcon/>
                  </InputAdornment>
                ),
              }}
            />
<Button disableRipple className='commonHeadBtns'>
            <PersonPinIcon />
            {commonTexts?.login}
        </Button>
        <Button disableRipple className='commonHeadBtns'>
            <ShoppingCartCheckoutIcon />
            {commonTexts?.Cart}
        </Button>
        </Box>
    )
}