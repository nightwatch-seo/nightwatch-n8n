import { IDataObject, IExecuteFunctions } from "n8n-workflow";
import { OptionsWithUri } from "request-promise-native";
import { baseUri } from "./constants";
import { getAdditionalFields } from "./utils";


export async function executeSeriesOperation(iExecuteFunctions: IExecuteFunctions, i: number) {
    let responseData;
    let options: OptionsWithUri;
    let date_from, date_to, keyword_ids;

    const operation = iExecuteFunctions.getNodeParameter('operation', 0) as string;


    switch (operation) {
        case "getUrlSeries":
            const url_ids = iExecuteFunctions.getNodeParameter('url_ids', i) as string;
            const additionalFields = getAdditionalFields(iExecuteFunctions, i) as IDataObject
            date_from = iExecuteFunctions.getNodeParameter('date_from', i) as string;
            date_to = iExecuteFunctions.getNodeParameter('date_to', i) as string;

            options = {
                method: 'GET',
                uri: `${baseUri}/series`,
                json: true,
                qs: { url_ids: url_ids.split(","), with_competitors: "with_competitors" in additionalFields ? additionalFields.with_competitors : true, date_to, date_from },
                qsStringifyOptions: { arrayFormat: "brackets" }
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "getKeywordSeries":
            keyword_ids = iExecuteFunctions.getNodeParameter('keyword_ids', i) as string;
            date_from = iExecuteFunctions.getNodeParameter('date_from', i) as string;
            date_to = iExecuteFunctions.getNodeParameter('date_to', i) as string;

            options = {
                method: 'GET',
                uri: `${baseUri}/series`,
                json: true,
                qs: { keyword_ids: keyword_ids.split(","), date_to, date_from },
                qsStringifyOptions: { arrayFormat: "brackets" }
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "getKeywordViewSeries":
            const dynamic_view_ids = iExecuteFunctions.getNodeParameter('dynamic_view_ids', i) as string;
            date_from = iExecuteFunctions.getNodeParameter('date_from', i) as string;
            date_to = iExecuteFunctions.getNodeParameter('date_to', i) as string;

            options = {
                method: 'GET',
                uri: `${baseUri}/series`,
                json: true,
                qs: { dynamic_view_ids: dynamic_view_ids.split(","), date_to, date_from },
                qsStringifyOptions: { arrayFormat: "brackets" }
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "getGroupSeries":
            const url_group_ids = iExecuteFunctions.getNodeParameter('url_group_ids', i) as string;
            date_from = iExecuteFunctions.getNodeParameter('date_from', i) as string;
            date_to = iExecuteFunctions.getNodeParameter('date_to', i) as string;

            options = {
                method: 'GET',
                uri: `${baseUri}/series`,
                json: true,
                qs: { url_group_ids: url_group_ids.split(","), date_to, date_from },
                qsStringifyOptions: { arrayFormat: "brackets" }
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "getBacklinkUrlSeries":
            const url_id_for_all_backlinks = iExecuteFunctions.getNodeParameter('url_id_for_all_backlinks', i) as string;
            date_from = iExecuteFunctions.getNodeParameter('date_from', i) as string;
            date_to = iExecuteFunctions.getNodeParameter('date_to', i) as string;

            options = {
                method: 'GET',
                uri: `${baseUri}/series`,
                json: true,
                qs: { url_id_for_all_backlinks, date_to, date_from }
            };
            responseData = await iExecuteFunctions.helpers.requestWithAuthentication.call(
                iExecuteFunctions,
                'nightwatchApi',
                options,
            );
            break;
        case "getBacklinkViewSeries":
            const backlink_view_ids = iExecuteFunctions.getNodeParameter('backlink_view_ids', i) as string;
            date_from = iExecuteFunctions.getNodeParameter('date_from', i) as string;
            date_to = iExecuteFunctions.getNodeParameter('date_to', i) as string;

            options = {
                method: 'GET',
                uri: `${baseUri}/series`,
                json: true,
                qs: { backlink_view_ids: backlink_view_ids.split(","), date_to, date_from },
                qsStringifyOptions: { arrayFormat: "brackets" }
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
