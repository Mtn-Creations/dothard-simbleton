import { getBusinesses } from "./database.js"

/*
    ManufacturingBusinesses Component Function

    Responsibility:
        Generate HTML representation of manufacturing businesses

    Parameters:
        None

    Returns:
        (string) : HTML representation of manufacturing businesses, each with it's coresponding address
*/

export const ManufacturingBusinesses = () => {
    const manufacturingBizArray = getBusinesses().filter(manuBiz => manuBiz?.companyIndustry === "Manufacturing")
    let manufacturingBizHTML = ''

    manufacturingBizArray.forEach(
        (biz) => {
            manufacturingBizHTML += `
                <h3 class="biz__companyName">${biz.companyName}</h3>
                <div class="biz__address">
                    <p class="biz__addrStreet">${biz.addressFullStreet}</p>
                    <p class="biz__addrCityStateZip">${biz.addressCity}, ${biz.addressStateCode} ${biz.addressZipCode}</p>
                </div>
                <hr />`
        }
    )
    
    return manufacturingBizHTML

}