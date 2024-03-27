import { Box } from "@mui/material";
import React from "react";
import HeaderCompo from "../../components/CommonComponents/HeaderComp/header";
import FooterCompo from "../../components/CommonComponents/FooterComp/footer";
import CommonTexts from "../../Assets/Texts/textscommon.json"
import ProductDetailsCompo from "../../components/ProductDetailsCompo/ProductDetails/productDetails";

export default function ProductDetails () {
    return (
        <Box>
            <HeaderCompo commonTexts={CommonTexts.commonTexts}/>
            <ProductDetailsCompo commonTexts={CommonTexts.commonTexts}/>
            <FooterCompo commonTexts={CommonTexts.commonTexts}/>
        </Box>
    )
}