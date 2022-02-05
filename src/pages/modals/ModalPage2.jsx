import {
    FormItem,
    FormLayout,
    FormLayoutGroup,
    Group,
    Input,

} from "@vkontakte/vkui";
import React, {useEffect, useState} from "react";
import axios from "axios";
import OrganizationInfo from "../../components/modalPage2/OrganizationInfo";

const ModalPage2 = () => {

    const [isInnValid, setIsInnValid] = useState(false)
    const [responseData, setResponseData] = useState(false)
    const [inputData, setInputData] = useState("")

    const token = process.env.TOKEN

    const onChange = (e) => {
        if (!isNaN(e.target.value)) {
            setInputData(e.target.value)
        }
    }

    useEffect(() => {
        if ((inputData.length === 10) || (inputData.length === 12)) {
            setIsInnValid(true)
            axios({
                method: 'POST',
                url: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                data: {'query': inputData}
            }).then(response => {
                setResponseData(response.data)
            })
        } else {
            setIsInnValid(false)
            setResponseData(false)
        }
    }, [inputData])


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
                        <Input onChange={onChange} value={inputData}/>
                    </FormItem>
                </FormLayoutGroup>
                {responseData
                    ? <OrganizationInfo responseData={responseData}/>
                    : ""}
            </FormLayout>
        </Group>
    )
}
export default ModalPage2;
