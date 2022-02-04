import {

    FormItem, FormLayout, FormLayoutGroup,
    Group, Input, SimpleCell,

} from "@vkontakte/vkui";
import React, {useState} from "react";
// import styled from "styled-components";
import axios from "axios";


// const IMAGE = colored_placeholder
//
// const ImgBlock = styled.img.attrs({
//     src: IMAGE,
// })`
//   width: 100%;
//   height: 10%;
//   border-radius: .75rem .75rem 0 0;
// `;


const OrganizationInfo = (props) => {
    let organizationName = ''
    let organizationStatus = ''
    if (props.responseData.suggestions.length > 0) {
        let data = props.responseData.suggestions[0].data
        organizationName = data.name.short_with_opf
        organizationStatus = data.state.status
    }

    return (
        <Group>
            <SimpleCell>
                {organizationName}
            </SimpleCell>
            <SimpleCell>
                {organizationStatus}
            </SimpleCell>
        </Group>
    )
}


const ModalPage1 = () => {

    const [isInnValid, setIsInnValid] = useState(false)
    const [responseData, setResponseData] = useState(false)
    const [inputData, setInputData] = useState("")

    const token = 'd3703bb6feda31f27dd2ddd585e46781f8435697'

    const onChange = (e) => {
        setInputData(e.target.value)
        if ((e.target.value.length === 10) || (e.target.value.length === 12)) {
            setIsInnValid(true)
            axios({
                method: 'POST',
                url: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                data: {'query': e.target.value}
            }).then(response => {
                setResponseData(response.data)
            })
        } else {
            setIsInnValid(false)
            setResponseData(false)
        }
    }


    return (
        <Group>
            <FormLayout>
                <FormLayoutGroup>
                    <FormItem
                        top='ИНН'
                        status={isInnValid ? "valid" : "error"}
                        bottom={
                            isInnValid
                                ? "ИНН введен корректно"
                                : `ИНН должен содержать 10 или 12 цифр!\nВведено ${inputData.length} символов`
                        }
                    >
                        <Input type={'number'} onChange={onChange}/>
                    </FormItem>
                </FormLayoutGroup>
                {responseData
                    ? <OrganizationInfo responseData={responseData}/>
                    : ""}
            </FormLayout>
        </Group>
    )
}
export default ModalPage1;
