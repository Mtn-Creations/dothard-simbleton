import { getBusinesses } from "./database.js"

/*
    NewYorkBusinesses Component Function

    Responsibility:
        Generate HTML representation of businesses in New York

    Parameters:
        None

    Returns:
        (string) : HTML representation of businesses in New York, each with it's coresponding address
*/

export const NewYorkBusinesses = () => {
    const nyBizArray = getBusinesses().filter(nyBiz => nyBiz?.addressStateCode === 'NY')
    let nyBizHTML = ''

    nyBizArray.forEach(
        (biz) => {
            nyBizHTML += `
                <h3 class="biz__companyName">${biz.companyName}</h3>
                <div class="biz__address">
                    <p class="biz__addrStreet">${biz.addressFullStreet}</p>
                    <p class="biz__addrCityStateZip">${biz.addressCity}, ${biz.addressStateCode} ${biz.addressZipCode}</p>
                </div>
                <hr />`
        }
    )
    
    return nyBizHTML

}