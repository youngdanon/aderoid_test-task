import React from "react"
import {
    AdaptivityProvider,
    AppRoot,
    ConfigProvider,
} from "@vkontakte/vkui";


const MainLayout = ({children}) => {
    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    {children}
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    )
}
export default MainLayout;
