import { getBusinesses } from "./database.js"

document
    .querySelector("#content")
        .addEventListener(
            "keypress",
            (keyPressEvent) => {
                const companySearchResultArticle = document.querySelector(".foundBusinesses")
                const businesses = getBusinesses()
                let foundBusinessHTML = ''

                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.


                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example:
                            if (business.companyName.includes(keyPressEvent.target.value)) {

                            }
                    */

                    const foundBusiness = businesses.find(
                        business => {
                            if (!business?.companyName?.toLowerCase().includes(keyPressEvent.target.value.toLowerCase())) return
                            return business
                        }
                    )

                    foundBusinessHTML = `<h2>${foundBusiness?.companyName}</h2>
                    <p>${foundBusiness?.addressFullStreet}</p>
                    <p>${foundBusiness?.addressCity}, ${foundBusiness?.addressStateCode} ${foundBusiness?.addressZipCode}</p>`

                    companySearchResultArticle.innerHTML = `${foundBusinessHTML}`
                }
        });


/*
    BusinessList Component Function

    Responsibility:
        Generate HTML representation of businesses with address

    Parameters:
        None

    Returns:
        (string) : HTML representation of businesses, each with it's coresponding address
*/

export const businessList = () => {
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