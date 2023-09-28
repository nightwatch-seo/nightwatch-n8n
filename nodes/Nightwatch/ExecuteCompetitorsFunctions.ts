import { IExecuteFunctions } from "n8n-workflow";
import { OptionsWithUri } from "request-promise-native";
import { baseUri } from "./constants";
import { getAdditionalFields } from "./utils";


export async function executeCompetitorsOperation(iExecuteFunctions: IExecuteFunctions, i: number) {
    let responseData;
    let options: OptionsWithUri;
    let url

    const operation = iExecuteFunctions.getNodeParameter('operation', 0) as string;
    const urlId = iExecuteFunctions.getNodeParameter('urlId', i) as string
    const additionalFields = getAdditionalFields(iExecuteFunctions, i)


    switch (operation) {
        case "listCompetitors":
            options = {
                method: 'GET',
                uri: `${baseUri}/urls/${urlId}/competitors`,
                json: true,
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "addCompetitors":
            url = iExecuteFunctions.getNodeParameter('url', i) as string;
            options = {
                method: 'POST',
                uri: `${baseUri}/urls/${urlId}/competitors`,
                json: true,
                body: { competitor: { url, ...additionalFields } }

            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "removeCompetitors":
            const competitor_id = iExecuteFunctions.getNodeParameter('competitor_id', i) as string;
            options = {
                method: 'DELETE',
                uri: `${baseUri}/urls/${urlId}/competitors/${competitor_id}`,
                json: true,
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
    }

    return responseData
}
