import { getBusinesses } from "./database.js"

/*
    AgentList Component Function

    Responsibility:
        Generate HTML representation of purchasing agents

    Parameters:
        None

    Returns:
        (string) : HTML representation of purchasing agent names, each with their coresponding business 
                   name and phone number.
*/

export const AgentList = () => {
    const bizArray = getBusinesses()
    const agentArray = bizArray.map(biz => 
        {
            return `<h3 class="agent__name">${biz?.purchasingAgent?.nameFirst + ' ' + biz?.purchasingAgent?.nameLast}</h3>
<h4 class="agent__companyName">${biz.companyName}</h4>
<h4 class="agent__phoneNumber">${biz.phoneWork}</h4>
<hr />`
        }
    )

    return agentArray.join("")

}