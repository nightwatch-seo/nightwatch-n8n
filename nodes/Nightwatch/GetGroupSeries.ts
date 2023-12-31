import { INodeProperties } from 'n8n-workflow';
import { ResourceOperations, Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Series],
        operation: [ResourceOperations[Resources.Series].GetGroupSeries],
    },
};

export const getGroupSeriesOperations: INodeProperties[] = [
    {
        displayName: 'Url Group IDs',
        name: 'url_group_ids',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: "161490,161491,161492",
        description: "Comma-separated Group IDs"
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

