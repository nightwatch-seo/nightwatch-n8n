import { IExecuteFunctions } from "n8n-workflow";
import { OptionsWithUri } from "request-promise-native";
import { NightWatchCredentialsName, ResourceOperations, Resources, baseUri } from "./constants";
import { getAdditionalFields } from "./utils";


export async function executeUrlOperation(iExecuteFunctions: IExecuteFunctions, i: number) {
    let responseData;
    let options: OptionsWithUri;
    let url_id;
    const additionalFields = getAdditionalFields(iExecuteFunctions, i)
    const operation = iExecuteFunctions.getNodeParameter('operation', 0) as string;


    switch (operation) {
        case ResourceOperations[Resources.Urls].ListUrls:
            options = {
                method: 'GET',
                uri: `${baseUri}/urls`,
                json: true,
                qs: additionalFields
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                NightWatchCredentialsName,
                options,
            );
            break;
        case ResourceOperations[Resources.Urls].GetUrl:
            url_id = iExecuteFunctions.getNodeParameter('url_id', i) as string;

            options = {
                method: 'GET',
                uri: `${baseUri}/urls/${url_id}`,
                json: true,
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                NightWatchCredentialsName,
                options,
            );
            break;
        case ResourceOperations[Resources.Urls].CreateUrl:
            const url = iExecuteFunctions.getNodeParameter('url', i) as string;
            const country_code = iExecuteFunctions.getNodeParameter('country_code', i) as string;
            const language_code = iExecuteFunctions.getNodeParameter('language_code', i) as string;
            const url_group_id = iExecuteFunctions.getNodeParameter('url_group_id', i) as string;

            options = {
                method: 'POST',
                uri: `${baseUri}/urls`,
                json: true,
                body: {
                    url: {
                        url,
                        country_code,
                        language_code,
                        url_group_id,
                        ...additionalFields
                    }
                }
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                NightWatchCredentialsName,
                options,
            );
            break;
        case ResourceOperations[Resources.Urls].DeleteUrl:
            url_id = iExecuteFunctions.getNodeParameter('url_id', i) as string;

            options = {
                method: 'DELETE',
                uri: `${baseUri}/urls/${url_id}`,
                json: true,
                qs: additionalFields
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                NightWatchCredentialsName,
                options,
            );
            break;
        case ResourceOperations[Resources.Urls].UpdateUrl:
            url_id = iExecuteFunctions.getNodeParameter('url_id', i) as string;

            options = {
                method: 'PUT',
                uri: `${baseUri}/urls/${url_id}`,
                json: true,
                body: {
                    url: additionalFields
                }
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                NightWatchCredentialsName,
                options,
            );
            break;
    }

    return responseData
}
