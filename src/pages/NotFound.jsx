import React from "react"
import {
    Caption,
    Group,
    Panel,
    PanelHeader,
    Root,
    SplitCol,
    SplitLayout,
    Title,
    View
} from "@vkontakte/vkui";
import {Container} from "../components/Container";


const NotFound = () => {
    return (
        <SplitLayout>
            <SplitCol>
                <Root activeView={'view1'}>
                    <View activePanel={"main"} id={'view1'}>
                        <Panel id="main">
                            <PanelHeader>Aderoid test task</PanelHeader>
                            <Container>
                                <Group>
                                    <Title level={'2'} weight={'medium'}> 404( Упс...</Title>
                                    <Caption level={'1'} weight={'regular'}>Такой страницы не существует</Caption>

                                </Group>
                            </Container>
                        </Panel>
                    </View>
                </Root>
            </SplitCol>
        </SplitLayout>
    );
}

export default NotFound;
