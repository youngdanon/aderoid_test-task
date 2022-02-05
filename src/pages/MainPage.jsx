import React, {useState} from "react"
import {
    CellButton,
    Group, ModalRoot,
    Panel, PanelHeader, Root,
    SplitCol, SplitLayout, View, withAdaptivity, withPlatform
} from "@vkontakte/vkui";

import ModalPageWrapper from "../components/ModalPageWrapper";
import ModalPage1 from "./modals/ModalPage1";
import ModalPage2 from "./modals/ModalPage2";


const MainPage = withPlatform(
    withAdaptivity(
        () => {
            let [activeModal, setActiveModal] = useState(null)

            const onClose = () => {
                setActiveModal(null)
            }

            const modal = (
                <ModalRoot activeModal={activeModal}>
                    <ModalPageWrapper headerText='Окно #1' id={'testModal'} onClose={onClose} settlingHeight={100}>
                        <ModalPage1/>
                    </ModalPageWrapper>
                    <ModalPageWrapper headerText='Окно #2' id={'testModal2'} onClose={onClose} settlingHeight={100}>
                        <ModalPage2/>
                    </ModalPageWrapper>
                </ModalRoot>
            )
            return (

                <SplitLayout modal={modal}>
                    <SplitCol>
                        <Root activeView={'view1'}>
                            <View activePanel={"main"} id={'view1'}>
                                <Panel id="main">
                                    <PanelHeader>Aderoid test task</PanelHeader>
                                    <Group>
                                        <CellButton onClick={() => setActiveModal('testModal')}>Модалка #1</CellButton>
                                        <CellButton onClick={() => setActiveModal('testModal2')}>Модалка #2</CellButton>
                                    </Group>
                                </Panel>
                            </View>
                        </Root>
                    </SplitCol>
                </SplitLayout>

            );
        },
        {
            viewWidth: true,
        }
    )
)

export default MainPage;
