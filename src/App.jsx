import './App.css';
import React from "react";
import "@vkontakte/vkui/dist/vkui.css";
import Routing from "./components/Routes"
import MainLayout from "./components/MainLayout";


const App = () => {

    return (
        <MainLayout>
            <Routing/>
        </MainLayout>
    );
};

export default App;
