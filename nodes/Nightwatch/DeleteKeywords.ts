import { INodeProperties } from 'n8n-workflow';

const displayOptions = {
    show: {
        resource: ['keywords'],
        operation: ['deleteKeywords'],
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