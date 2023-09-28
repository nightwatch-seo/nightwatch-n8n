import { INodeProperties } from 'n8n-workflow';
import { ResourceOperations, Resources } from './constants';

const resource = Resources.Urls
const defaultOperation: string = ResourceOperations[resource].ListUrls

export const UrlsOperations: INodeProperties = {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    displayOptions: {
        show: {
            resource: [resource],
        },
    },
    options: [
        {
            action: 'Create url',
            value: ResourceOperations[resource].CreateUrl,
            name: 'Create Url',
        },
        {
            action: 'Delete url',
            value: ResourceOperations[resource].DeleteUrl,
            name: 'Delete Url',
        },
        {
            action: 'Get url',
            value: ResourceOperations[resource].GetUrl,
            name: 'Get Url',
        },
        {
            action: 'List urls',
            value: ResourceOperations[resource].ListUrls,
            name: 'List Urls',
        },
        {
            action: 'Update url',
            value: ResourceOperations[resource].UpdateUrl,
            name: 'Update Url',
        },
    ],
    default: defaultOperation,
    noDataExpression: true,
};