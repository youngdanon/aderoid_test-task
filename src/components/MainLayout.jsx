import React from "react"
import {
    AdaptivityProvider,
    AppRoot,
    ConfigProvider,
    Panel,
    PanelHeader,
    SplitCol,
    SplitLayout,
    useAdaptivity,
    View,
    ViewWidth
} from "@vkontakte/vkui";


const MainLayout = ({children}) => {
    const {viewWidth} = useAdaptivity();
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
