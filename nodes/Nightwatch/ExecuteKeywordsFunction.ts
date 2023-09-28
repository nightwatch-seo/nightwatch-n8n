import { IExecuteFunctions } from "n8n-workflow";
import { OptionsWithUri } from "request-promise-native";
import { baseUri } from "./constants";
import { getAdditionalFields } from "./utils";


export async function executeKeywordsOperation(iExecuteFunctions: IExecuteFunctions, i: number) {
    let responseData;
    let options: OptionsWithUri;
    let body = {}, keyword_ids;

    const operation = iExecuteFunctions.getNodeParameter('operation', 0) as string;
    const urlId = operation === "listDynamicViewKeywords" ? "undefined" : iExecuteFunctions.getNodeParameter('urlId', i) as string
    const additionalFields = getAdditionalFields(iExecuteFunctions, i)

    const keyword_id = ["updateKeywords", "keywordResults"].includes(operation) ? iExecuteFunctions.getNodeParameter('keyword_id', i) as string : undefined

    switch (operation) {
        case 'listKeywords':
            options = {
                method: 'GET',
                uri: `${baseUri}/urls/${urlId}/keywords`,
                json: true,
                qs: additionalFields
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "addKeywords":
            const keywords = iExecuteFunctions.getNodeParameter('keywords', i) as string;
            const google_hl = iExecuteFunctions.getNodeParameter('google_hl', i) as string;
            const google_gl = iExecuteFunctions.getNodeParameter('google_gl', i) as string;
            const search_engine = iExecuteFunctions.getNodeParameter('search_engine', i) as string;

            options = {
                method: 'POST',
                uri: `${baseUri}/urls/${urlId}/keywords/batch_create`,
                json: true,
                body: { keywords, google_hl, google_gl, search_engine, ...additionalFields }
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "deleteKeywords":
            keyword_ids = iExecuteFunctions.getNodeParameter('keyword_ids', i) as string;

            options = {
                method: 'POST',
                uri: `${baseUri}/urls/${urlId}/keywords/batch_destroy`,
                json: true,
                body: { keyword_ids: keyword_ids.split(",") }
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "updateKeywords":
            if (additionalFields && typeof additionalFields.tags === "string") {
                body = { keyword: { tags: additionalFields.tags.split(",") } }
            }

            options = {
                method: 'PUT',
                uri: `${baseUri}/urls/${urlId}/keywords/${keyword_id}`,
                json: true,
                body,
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "keywordResults":
            const time_start = iExecuteFunctions.getNodeParameter('time_start', i) as string;
            const time_end = iExecuteFunctions.getNodeParameter('time_end', i) as string;

            options = {
                method: 'GET',
                uri: `${baseUri}/urls/${urlId}/keywords/${keyword_id}`,
                json: true,
                qs: { time_start, time_end },
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "listDynamicViewKeywords":
            const dynamic_view_id = iExecuteFunctions.getNodeParameter('dynamic_view_id', i) as string;

            options = {
                method: 'GET',
                uri: `${baseUri}/urls/${urlId}/keywords`,
                json: true,
                qs: { dynamic_view_id }
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
