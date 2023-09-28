import { INodeProperties } from 'n8n-workflow';
import { Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Urls],
        operation: ['getUrl'],
    },
};

export const getUrlOperations: INodeProperties[] = [
    {
        displayName: 'Url_ID',
        name: 'url_id',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: '214551',
        description: 'The ID of the URL to be fetched',
    }
];