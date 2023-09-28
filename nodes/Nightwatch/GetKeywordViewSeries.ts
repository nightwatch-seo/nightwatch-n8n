import { INodeProperties } from 'n8n-workflow';

const displayOptions = {
    show: {
        resource: ['series'],
        operation: ['getKeywordViewSeries'],
    },
};

export const getKeywordViewSeriesOperations: INodeProperties[] = [
    {
        displayName: 'Dynamic View IDs',
        name: 'dynamic_view_ids',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: "161490,161491,161492",
        description: "Comma seperated Keyword View IDs"
    },
    {
        displayName: 'Date From',
        name: 'date_from',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: "2019-01-02",
        description: "Start date for series in YYYY-MM-DD format"
    },
    {
        displayName: 'Date To',
        name: 'date_to',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: "2019-01-02",
        description: "End date for series in YYYY-MM-DD format"
    },
];

