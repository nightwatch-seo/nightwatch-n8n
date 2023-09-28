import { INodeProperties } from "n8n-workflow";
import { Resources } from "./constants";


export const KeywordsOperations: INodeProperties = {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    displayOptions: {
        show: {
            resource: [Resources.Keywords],
        }
    },
    options: [
        {
            name: 'Add Keywords',
            value: 'addKeywords',
            action: 'Add keywords',
        },
        {
            name: 'Delete Keywords',
            value: 'deleteKeywords',
            action: 'Delete keywords',
        },
        {
            name: 'Keywords Results',
            value: 'keywordResults',
            action: 'Keywords results',
        },
        {
            name: 'List Dynamic View Keywords',
            value: 'listDynamicViewKeywords',
            action: 'List dynamic view keywords',
        },
        {
            name: 'List Keywords',
            value: 'listKeywords',
            action: 'List keywords',
        },
        {
            name: 'Update Keywords',
            value: 'updateKeywords',
            action: 'Update keywords',
        },
    ],
    default: 'listKeywords',
    noDataExpression: true,
}