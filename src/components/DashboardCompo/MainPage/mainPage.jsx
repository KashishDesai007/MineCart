import React, { Fragment } from "react";
import { Box, Typography, Button } from "@mui/material";
import "./mainPage.css"
import oliveJacket from "../../../Assets/Images/oliveJacket.avif"
import { commonPaths } from "../../../Utils/commonPath";
import { products } from "../../../Store/products";

export default function MainCompo ({commonTexts}) {
    return(
        <Box className='mainPageBox'>
            <Box className='mainHeadBox'>
                <Typography className="headingTitle">
                    {commonTexts?.ExclusiveSale}
                </Typography>
                <Typography className="headingInfo">
                {commonTexts?.FastFashion}
                </Typography>
                <Typography className="headingDesc">
                {commonTexts?.GrabThe}
                </Typography>
            </Box>
            <Box className='productsBox' >
                { products.map((item, indx) => (
                    <Button href={`/product/:${item.name}`} className='productCard' key={item.name}>
                    <img src={item.image} alt='' className='productImg'/>
                    <Typography className="detailsText">
                  <span className="detailsHeadText">{commonTexts?.Name}:-</span>  {item.name}
                    </Typography>
                    <Typography className="detailsText">
                   <span  className="detailsHeadText">{commonTexts?.Price}:-</span> Rs {item.price}
                    </Typography>
                    <Typography className="detailsText">
                    <span  className="detailsHeadText">{commonTexts?.Description}:- </span>{item.description}
                    </Typography>
                </Button>
                ))}
            </Box>
        </Box>
    )
}
