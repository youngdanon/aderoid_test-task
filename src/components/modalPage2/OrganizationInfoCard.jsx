import React from 'react';
import {Button, Card, CardGrid, Div, Header, InfoRow, List, SimpleCell} from "@vkontakte/vkui";

const InfoCard = (props) => {
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

export default InfoCard;
