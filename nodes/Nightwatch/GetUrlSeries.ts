import { INodeProperties } from 'n8n-workflow';

const displayOptions = {
    show: {
        resource: ['series'],
        operation: ['getUrlSeries'],
    },
};

export const getUrlSeriesOperations: INodeProperties[] = [
    {
        displayName: 'Url IDs',
        name: 'url_ids',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: "161490,161491,161492",
        description: "Comma seperated URL IDs"
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
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions,
        options: [{
            displayName: 'With Competitors',
            name: 'with_competitors',
            type: 'boolean',
            default: true,
            description: 'Whether to include competititor URL series',
        },]
    }
];