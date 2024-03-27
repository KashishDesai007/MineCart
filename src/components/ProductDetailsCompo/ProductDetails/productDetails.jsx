import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import "./productDetails.css";
import { products } from "../../../Store/products";

export default function ProductDetailsCompo({commonTexts}) {
const [productDetails, setProductDetails] = useState();

const handleProductDetails = () =>{
    const query = window.location.href
    // console.log('query--->', query.split('/:'))
    // const productDetails = products.find((items)=> items.name === )
}

    return (
        <Box className="DetailsMainBox">
            <Box>
                <img src="" alt="" />
                <Box>
                    <Typography>
                        {commonTexts?.Name} :- 
                    </Typography>
                </Box>
            </Box>
        </Box>

    )
}