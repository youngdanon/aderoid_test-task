import {
    Button,
    Card,
    CardGrid,
    Div,
    FormItem,
    FormLayout,
    FormLayoutGroup,
    Group,
    Header,
    InfoRow,
    Input,
    List,
    SimpleCell,

} from "@vkontakte/vkui";
import React, {useEffect, useState} from "react";
import axios from "axios";


const OrganizationInfoCard = (props) => {
    return (
        <CardGrid size="l">
            <Card mode="shadow">
                <Header>Найдено:</Header>
                <List>
                    <SimpleCell hasActive={false} multiline>
                        <InfoRow header={"Наименование"}>
                            {props.organizationName}
                        </InfoRow>
                    </SimpleCell>
                    <SimpleCell hasActive={false} multiline>
                        <InfoRow header={'Статус организации'}>
                            {props.organizationStatus}
                        </InfoRow>
                    </SimpleCell>
                </List>
                <Div>
                    <Button stretched size={'l'}>Добавить</Button>
                </Div>
            </Card>
        </CardGrid>
    )
}


const NotFoundStatus = () => {
    return (
        <Div>
            <InfoRow header={'По вашему запросу ничего не найдено'}/>
        </Div>
    )
}

const OrganizationInfo = (props) => {
    const status = {
        'ACTIVE': 'Действующая',
        'LIQUIDATING': 'Ликвидируется',
        'LIQUIDATED': 'Ликвидирована',
        'BANKRUPT': 'Банкротство',
        'REORGANIZING': 'В процессе присоединения к другому юрлицу, с последующей ликвидацией'
    }
    let organizationName = false
    let organizationStatus = false
    let error = false
    if (props.responseData.suggestions.length > 0) {
        let data = props.responseData.suggestions[0].data
        organizationName = data.name.short_with_opf
        organizationStatus = data.state.status
    } else {
        error = true
    }


    return (
        <div>
            {!error
                ? <OrganizationInfoCard organizationName={organizationName}
                                        organizationStatus={status[organizationStatus]}/>
                : <NotFoundStatus/>}
        </div>

    )
}


const ModalPage1 = () => {

    const [isInnValid, setIsInnValid] = useState(false)
    const [responseData, setResponseData] = useState(false)
    const [inputData, setInputData] = useState("")

    const token = 'd3703bb6feda31f27dd2ddd585e46781f8435697'

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
export default ModalPage1;
