import React from "react";
import {
    ModalPage, ModalPageHeader,
    PanelHeaderButton,
    useAdaptivity, ViewWidth
} from "@vkontakte/vkui";
import {Icon24DismissDark,} from "@vkontakte/icons";


const ModalPageWrapper = (props) => {
    const {viewWidth} = useAdaptivity();
    const isMobile = viewWidth <= ViewWidth.MOBILE;

    return (
        <ModalPage
            {...props}
            header={
                <ModalPageHeader
                    visor={false}
                    right={
                        isMobile && (
                            <PanelHeaderButton onClick={props.onClose}>
                                <Icon24DismissDark/>
                            </PanelHeaderButton>
                        )
                    }
                >
                </ModalPageHeader>
            }
        >
            {props.children}
        </ModalPage>
    );
}

export default ModalPageWrapper;
