import { INodeProperties } from 'n8n-workflow';
import { Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Urls],
        operation: ['createUrl'],
    },
};

export const createUrlOperations: INodeProperties[] = [
    {
        displayName: 'Url',
        name: 'url',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: 'http://example.com',
        description: 'URL to track',
    },
    {
        displayName: 'Country Code',
        name: 'country_code',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: 'DE',
        description: 'ISO3166 alpha-2 coutry code',
    },
    {
        displayName: 'Language Code',
        name: 'language_code',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: 'en',
        description: 'ISO639-1 language code',
    },
    {
        displayName: 'Url Group ID',
        name: 'url_group_id',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: "1234",
        description: 'Group this URL will belong to',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions,
        options: [{
            displayName: 'Custom Name',
            name: 'custom_name',
            type: 'string',
            default: "",
            description: 'Custom URL name, used for displaying purposes',
        },
        {
            displayName: 'Places Match',
            name: 'places_match',
            type: 'string',
            default: "",
            description: 'Place name or CID',
        },
        {
            displayName: 'Match Nested Urls',
            name: 'match_nested_urls',
            type: 'boolean',
            default: false,
            description: 'Whether to match subpaths in the URL',
        },
        {
            displayName: 'Match Sbudomains',
            name: 'match_subdomains',
            type: 'boolean',
            default: false,
            description: 'Whether to match subdomains',
        },
        ]
    }
];