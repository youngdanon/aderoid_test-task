import {
    Button, Caption, Cell, CellButton,
    Div, FixedLayout, Gallery,
    Group, Header, IOS, Link, ModalPage, ModalPageHeader,
    PanelHeaderButton, PanelHeaderClose, SimpleCell, Subhead,
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

// const PageButton = styled(Button).attrs({
//     size:'l',
//     mode:'primary',
// })

const ModalPage1 = (props) => {

    return (
        <div>
            <ImgBlock/>
            <Container>
                <Group className="page-title" separator={'hide'}>
                    <Div>
                        {/*<Caption level={'1'} weight={'regular'}>Lorem ipsum</Caption>*/}
                        <Text weight="regular">Lorem ipsum</Text>
                        <Title level={'2'} weight={'medium'}>Lorem ipsum dolor</Title>
                    </Div>
                </Group>
                <Group className="advantages-list">
                    <AdvantageBlock icon={success}>Lorem ipsum dolor sit amet, consectetur </AdvantageBlock>
                    <AdvantageBlock icon={checklist}>Excepteur sint occaecat cupidatat non proident</AdvantageBlock>
                    <AdvantageBlock icon={teacher}>Sed ut perspiciatis unde omnis iste natus </AdvantageBlock>
                </Group>

                <Div>
                    <Link href={'/'}>Узнать подробнее...</Link>
                    <Button>
                        Отлично
                    </Button>
                </Div>

            </Container>
        </div>
    )
}
export default ModalPage1;
