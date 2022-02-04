import {
    ANDROID,
    IOS, ModalCard,
    ModalPage, ModalPageHeader,
    PanelHeaderButton, PanelHeaderClose,
    useAdaptivity, usePlatform, ViewWidth
} from "@vkontakte/vkui";
import React from "react";
import {
    Icon20CancelCircleFillRed,
    Icon24Dismiss,
    Icon24DismissDark,
    Icon24DismissOverlay,
    Icon28CancelCircleFillRed
} from "@vkontakte/icons";

function Icon20CancelCircleFillRedCancelCircleFillRed() {
    return null;
}

const ModalPageWrapper = ({headerText, ...props}) => {
    const {viewWidth} = useAdaptivity();
    const isMobile = viewWidth <= ViewWidth.MOBILE;
    const platform = usePlatform();

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
