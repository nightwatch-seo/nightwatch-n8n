import { INodeProperties } from 'n8n-workflow';

const displayOptions = {
    show: {
        resource: ['keywords'],
        operation: ['listDynamicViewKeywords'],
    },
};

export const listDynamicViewKeywordsOperations: INodeProperties[] = [
    {
        displayName: 'Dynamic View ID',
        name: 'dynamic_view_id',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
    },
];