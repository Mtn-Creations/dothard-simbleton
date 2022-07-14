import { getBusinesses } from "./database.js"

/*
    BusinessList Component Function

    Responsibility:
        Generate HTML representation of businesses with address

    Parameters:
        None

    Returns:
        (string) : HTML representation of businesses, each with it's coresponding address
*/

export const businessListHTML = () => {
    const bizArray = getBusinesses()
    let bizHTML = ''

    bizArray.forEach(
        (biz) => {
            bizHTML += `
                <h3 class="biz__companyName">${biz.companyName}</h3>
                <div class="biz__address">
                    <p class="biz__addrStreet">${biz.addressFullStreet}</p>
                    <p class="biz__addrCityStateZip">${biz.addressCity}, ${biz.addressStateCode} ${biz.addressZipCode}</p>
                </div>
                <hr />`
        }
    )
    
    return bizHTML

}