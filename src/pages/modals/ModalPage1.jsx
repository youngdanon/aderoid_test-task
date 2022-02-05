import {
    Button, Div,
    Group,
    Link,
    Text, Title,
} from "@vkontakte/vkui";
import React from "react";
import styled from "styled-components";

import colored_placeholder from "../../assets/img/colored_placeholder.jpg"
import checklist from "../../assets/img/checklist.svg"
import success from "../../assets/img/success.svg"
import teacher from "../../assets/img/teacher.svg"
import {Container} from "../../components/Container";
import AdvantageBlock from "../../components/AdvantageBlock";


const ImgBlock = styled.img.attrs({
    src: colored_placeholder,
})`
  width: 100%;
  height: 10%;
  border-radius: .75rem .75rem 0 0;
`;

const PageButton = styled(Button).attrs({
    size: 'l',
    mode: 'primary',
    stretched: true,
})`
  margin-top: .7rem;
`

const ModalPage1 = () => {
    return (
        <div className='adv-modal'>
            <ImgBlock/>
            <Container>
                <Group className="page-title" separator={'hide'}>
                    <Text weight="regular">Lorem ipsum</Text>
                    <Title level={'2'} weight={'medium'}>Lorem ipsum dolor</Title>
                </Group>
                <Group className="advantages-list">
                    <AdvantageBlock icon={success}>Lorem ipsum dolor sit amet, consectetur </AdvantageBlock>
                    <AdvantageBlock icon={checklist}>Excepteur sint occaecat cupidatat non proident</AdvantageBlock>
                    <AdvantageBlock icon={teacher}>Sed ut perspiciatis unde omnis iste natus </AdvantageBlock>
                </Group>

                <Div>
                    <Link href={'/'}>Узнать подробнее...</Link>
                    <PageButton>
                        Отлично
                    </PageButton>
                </Div>
            </Container>
        </div>
    )
}
export default ModalPage1;
