import React from "react";
import { Box } from "@mui/system";
import HeaderCompo from "../../components/CommonComponents/HeaderComp/header";
import CommonTexts from "../../Assets/Texts/textscommon.json"
import MainCompo from "../../components/DashboardCompo/MainPage/mainPage";
import FooterCompo from "../../components/CommonComponents/FooterComp/footer";

export default function Dashboard () {
    return(
        <Box>
        <HeaderCompo commonTexts={CommonTexts.commonTexts}/>
        <MainCompo commonTexts={CommonTexts.commonTexts}/>
        <FooterCompo  commonTexts={CommonTexts.commonTexts}/>
        </Box>
    )
}