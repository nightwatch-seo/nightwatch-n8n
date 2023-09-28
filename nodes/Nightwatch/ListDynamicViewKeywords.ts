import { INodeProperties } from 'n8n-workflow';
import { Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Keywords],
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