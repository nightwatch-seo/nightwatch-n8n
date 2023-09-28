import { INodeProperties } from 'n8n-workflow';

const displayOptions = {
    show: {
        resource: ['keywords'],
        operation: ['keywordResults'],
    },
};

export const getKeywordResultsOperations: INodeProperties[] = [
    {
        displayName: 'Keyword ID',
        name: 'keyword_id',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
    },
    {
        displayName: 'Time Start',
        name: 'time_start',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: '2019-01-01',
        description: 'The ending date in YYYY-MM-DD format',
    },
    {
        displayName: 'Time End',
        name: 'time_end',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: '2019-01-01',
        description: 'The ending date in YYYY-MM-DD format',
    },
];