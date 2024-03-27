import React from "react";
import { Box} from "@mui/system";
import "./footer.css";
import { Typography, Button } from "@mui/material";
import logo from "../../../Assets/Images/logo.png"
export default function FooterCompo ({commonTexts}) {
    return (
        <Box className="MainFootrBox">
        <Box>
            <Box className='FooterLogoBox'>
            <img src={logo} alt='' className="LogoImg"/>
                <Typography className="LogoText">{commonTexts?.MineCart}</Typography>
            </Box>
            <Typography className="InfoText">
            {commonTexts?.Mail}:- {commonTexts?.MineMailId}</Typography>
            <Typography className="InfoText">
            {commonTexts?.Contact}:- 4545696955
            </Typography>
            <Typography className="InfoText">
            {commonTexts?.MineCart}:- {commonTexts?.MineAddress}
            </Typography>
        </Box>
        <Box className='FooterButtonsBox'>
            <Button className="FooterButtons">
            {commonTexts?.MensWear}
            </Button>
            <Button className="FooterButtons">
            {commonTexts?.WomensWear}
            </Button>
            <Button className="FooterButtons">
            {commonTexts?.FastFas}
            </Button>
        </Box>
        </Box>
    )
}