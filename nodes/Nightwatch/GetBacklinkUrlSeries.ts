import { INodeProperties } from 'n8n-workflow';

const displayOptions = {
    show: {
        resource: ['series'],
        operation: ['getBacklinkUrlSeries'],
    },
};

export const getBacklinkUrlSeriesOperations: INodeProperties[] = [
    {
        displayName: 'URL ID',
        name: 'url_id_for_all_backlinks',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: "161490",
        description: 'URL ID for all backlinks'
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

