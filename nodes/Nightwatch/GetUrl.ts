import { INodeProperties } from 'n8n-workflow';

const displayOptions = {
    show: {
        resource: ['urls'],
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