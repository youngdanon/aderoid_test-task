import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";

const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route path='/404' element={<NotFound/>}/>
            <Route path='*' element={<Navigate to={'/404'}/>}/>
        </Routes>
    )
}
export default Routing;
