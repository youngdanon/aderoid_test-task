import React from "react"
import InfoCard from "./OrganizationInfoCard";
import NotFoundStatus from "./NotFoundStatus"

const OrganizationInfo = (props) => {
    const status = {
        'ACTIVE': 'Действующая',
        'LIQUIDATING': 'Ликвидируется',
        'LIQUIDATED': 'Ликвидирована',
        'BANKRUPT': 'Банкротство',
        'REORGANIZING': 'В процессе присоединения к другому юрлицу, с последующей ликвидацией'
    }
    let organizationName = null
    let organizationStatus = null
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
                ? <InfoCard organizationName={organizationName}
                            organizationStatus={status[organizationStatus]}/>
                : <NotFoundStatus/>}
        </div>
    )
}
export default OrganizationInfo;
