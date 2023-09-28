import { INodeProperties } from 'n8n-workflow';
import { ResourceOperations, Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Series],
        operation: [ResourceOperations[Resources.Series].GetKeywordSeries],
    },
};

export const getKeywordSeriesOperations: INodeProperties[] = [
    {
        displayName: 'Keywords IDs',
        name: 'keyword_ids',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: "161490,161491,161492",
        description: "Comma seperated Keyword IDs"
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