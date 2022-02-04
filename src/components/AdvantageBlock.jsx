import React from "react";
import styled from "styled-components";
import {Cell, Text} from "@vkontakte/vkui";

const Icon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 1.5rem 0 0;
`
const AdvantageBlock = (props) => {
    return (

        <Cell multiline hasActive={false} before={<Icon src={props.icon}/>} style={{marginBottom: '1.2rem'}}>
            <Text weight={'regular'}>{props.children}</Text>
        </Cell>
    )
}
export default AdvantageBlock;
