import React from "react";
import styled from "styled-components";
import {Cell, Text} from "@vkontakte/vkui";

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 1.5rem 0 0;
`

const AdvantageTextWrapper = styled(Cell).attrs({
    multiline: true,
    hasActive: false,
})`
  margin-bottom: 4%;
`

const AdvantageBlock = (props) => {
    return (
        <AdvantageTextWrapper before={<Icon src={props.icon}/>}>
            <Text weight={'regular'}>{props.children}</Text>
        </AdvantageTextWrapper>
    )
}
export default AdvantageBlock;
