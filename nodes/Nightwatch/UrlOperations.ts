import { INodeProperties } from 'n8n-workflow';
import { Resources } from './constants';

export const UrlsOperations: INodeProperties = {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    displayOptions: {
        show: {
            resource: [Resources.Urls],
        },
    },
    options: [
        {
            action: 'Create url',
            value: 'createUrl',
            name: 'Create Url',
        },
        {
            action: 'Delete url',
            value: 'deleteUrl',
            name: 'Delete Url',
        },
        {
            action: 'Get url',
            value: 'getUrl',
            name: 'Get Url',
        },
        {
            action: 'List urls',
            value: 'listUrls',
            name: 'List Urls',
        },
        {
            action: 'Update url',
            value: 'updateUrl',
            name: 'Update Url',
        },
    ],
    default: 'listUrls',
    noDataExpression: true,
};