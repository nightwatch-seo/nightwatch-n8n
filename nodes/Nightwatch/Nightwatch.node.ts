import {
    INodeType,
    INodeTypeDescription,
    IExecuteFunctions,
    INodeExecutionData,
} from 'n8n-workflow';
import { listKeywordsOperations } from './ListKeywords';
import { addKeywordsOperations } from './AddKeywords';
import { executeKeywordsOperation } from './ExecuteKeywordsFunction';
import { updateKeywordsOperations } from './UpdateKeywords';
import { deleteKeywordsOperations } from './DeleteKeywords';
import { getKeywordResultsOperations } from './GetKeywordsResults';
import { listDynamicViewKeywordsOperations } from './ListDynamicViewKeywords';
import { KeywordsOperations } from './KeywordsOperations';
import { listCompetitorsOperations } from './ListCompetitors';
import { addCompetitorsOperations } from './AddCompetitors';
import { removeCompetitorsOperations } from './RemoveCompetitors';
import { getUrlSeriesOperations } from './GetUrlSeries';
import { getKeywordSeriesOperations } from './GetKeywordSeries';
import { getKeywordViewSeriesOperations } from './GetKeywordViewSeries';
import { getGroupSeriesOperations } from './GetGroupSeries';
import { getBacklinkUrlSeriesOperations } from './GetBacklinkUrlSeries';
import { getBacklinkViewSeriesOperations } from './GetBacklinkViewSeries';
import { CompetitorsOperations } from './CompetitorsOperations';
import { SeriesOperations } from './SeriesOperations';
import { UrlsOperations } from './UrlOperations';
import { listUrlsOperations } from './ListUrls';
import { getUrlOperations } from './GetUrl';
import { createUrlOperations } from './CreateUrl';
import { updateUrlOperations } from './UpdateUrl';
import { deleteUrlOperations } from './DeleteUrl';
import { executeUrlOperation } from './ExecuteUrlFunctions';
import { executeCompetitorsOperation } from './ExecuteCompetitorsFunctions';
import { executeSeriesOperation } from './ExecuteSeriesFunctions';
import { DefaultResource, Resources } from './constants';


export class Nightwatch implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Nightwatch',
        name: 'nightwatch',
        icon: 'file:nightwatch.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
        description: 'List keywords',
        defaults: {
            name: 'Nightwatch',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'nightwatchApi',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                options: [
                    {
                        name: Resources.Keywords,
                        value: Resources.Keywords
                    },
                    {
                        name: Resources.Series,
                        value: Resources.Series
                    },
                    {
                        name: Resources.Competitors,
                        value: Resources.Competitors
                    },
                    {
                        name: Resources.Urls,
                        value: Resources.Urls
                    }
                ],
                default: DefaultResource,
                noDataExpression: true,
                required: true,
            },
            KeywordsOperations,
            CompetitorsOperations,
            SeriesOperations,
            UrlsOperations,
            {
                displayName: 'Url_ID',
                name: 'urlId',
                type: 'string',
                required: true,
                displayOptions: {
                    show: {
                        resource: [Resources.Keywords, Resources.Competitors],
                    }
                },
                default: '',
                placeholder: '214551',
                description: 'Unique identifier of URL',
            },
            ...listKeywordsOperations,
            ...addKeywordsOperations,
            ...updateKeywordsOperations,
            ...deleteKeywordsOperations,
            ...getKeywordResultsOperations,
            ...listDynamicViewKeywordsOperations,
            ...listCompetitorsOperations,
            ...addCompetitorsOperations,
            ...removeCompetitorsOperations,
            ...getUrlSeriesOperations,
            ...getKeywordSeriesOperations,
            ...getKeywordViewSeriesOperations,
            ...getGroupSeriesOperations,
            ...getBacklinkUrlSeriesOperations,
            ...getBacklinkViewSeriesOperations,
            ...listUrlsOperations,
            ...getUrlOperations,
            ...createUrlOperations,
            ...updateUrlOperations,
            ...deleteUrlOperations,
        ],
    };
    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const iExecuteFunctions = this;
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0) as string;
        let executeFunction;

        for (let i = 0; i < items.length; i++) {
            switch (resource) {
                case Resources.Keywords:
                    executeFunction = executeKeywordsOperation
                    break;
                case Resources.Urls:
                    executeFunction = executeUrlOperation
                    break;
                case Resources.Competitors:
                    executeFunction = executeCompetitorsOperation
                    break;
                case Resources.Series:
                    executeFunction = executeSeriesOperation
                    break;
                default:
                    break
            }

            if (executeFunction) {
                const responseData = await executeFunction(iExecuteFunctions, i);
                returnData.push(responseData);
            }
        }
        return [this.helpers.returnJsonArray(returnData)];
    }
}