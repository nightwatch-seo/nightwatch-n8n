import { INodeProperties } from 'n8n-workflow';
import { ResourceOperations, Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Keywords],
        operation: [ResourceOperations[Resources.Keywords].DeleteKeywords],
    },
};

export const deleteKeywordsOperations: INodeProperties[] = [
    {
        displayName: 'Keyword IDs',
        name: 'keyword_ids',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: 'keyword_id_1,keyword_id_2,keyword_id_3',
        description: 'Comma seperated keyword IDs for removal',
    },
];