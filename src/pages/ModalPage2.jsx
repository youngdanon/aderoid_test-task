import {
    Button, Caption, Cell,
    Div, Gallery,
    Group, Header, IOS, ModalPage, ModalPageHeader,
    PanelHeaderButton, PanelHeaderClose, SimpleCell,
    Text, Title,
    useAdaptivity,
    usePlatform,
    ViewWidth
} from "@vkontakte/vkui";
import React from "react";
import styled from "styled-components";
import {Icon24Dismiss, Icon24ScanViewfinderOutline} from "@vkontakte/icons";

import placeholder from "../assets/img/placeholder.jpg";
import colored_placeholder from "../assets/img/colored_placeholder.jpg"
import checklist from "../assets/img/checklist.svg"
import success from "../assets/img/success.svg"
import teacher from "../assets/img/teacher.svg"
import {Container} from "../components/Container";
import AdvantageBlock from "../components/AdvantageBlock";


const IMAGE = colored_placeholder

const ImgBlock = styled.img.attrs({
    src: IMAGE,
})`
  width: 100%;
  height: 10%;
  border-radius: .75rem .75rem 0 0;
`;



const ModalPage1 = (props) => {

    return (
        <div>
            <ImgBlock/>
            <Container>
                <Group className="page-title">
                    <Caption level={'1'} weight={'regular'}>Lorem ipsum</Caption>
                    <Title level={'2'} weight={'medium'}>Lorem ipsum dolor</Title>
                </Group>
                <Group className="advantages-list">
                    <AdvantageBlock icon={success}>Все заебись работает</AdvantageBlock>
                    <AdvantageBlock icon={checklist}>Все заебись работает</AdvantageBlock>
                    <AdvantageBlock icon={teacher}>Все заебись работает</AdvantageBlock>
                </Group>
                <Div>
                    <Button size={'m'} mode={'primary'} stretched>
                        Suck some dick
                    </Button>
                </Div>
            </Container>
        </div>
    )
}
export default ModalPage1;
