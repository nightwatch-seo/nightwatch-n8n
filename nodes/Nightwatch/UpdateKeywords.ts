import { INodeProperties } from 'n8n-workflow';
import { ResourceOperations, Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Keywords],
        operation: [ResourceOperations[Resources.Keywords].UpdateKeywords],
    },
};

export const updateKeywordsOperations: INodeProperties[] = [
    {
        displayName: 'Keyword ID',
        name: 'keyword_id',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions,
        options: [
            {
                displayName: 'Tags',
                name: 'tags',
                type: 'string',
                default: '',
                placeholder: 'Branded,Upcoming',
                description: 'An array of tags',
            },]
    }
];