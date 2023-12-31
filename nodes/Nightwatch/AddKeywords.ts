import { INodeProperties } from 'n8n-workflow';
import { ResourceOperations, Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Keywords],
        operation: [ResourceOperations[Resources.Keywords].AddKeywords],
    },
};

export const addKeywordsOperations: INodeProperties[] = [
    {
        displayName: 'Keywords',
        name: 'keywords',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: 'keyword1_part1 keyword1_part2,keyword3,keyword4',
        description: 'Search queries separated by commas (,)',
    },
    {
        displayName: 'Google HL',
        name: 'google_hl',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: 'en',
        description: 'Search language code',
    },
    {
        displayName: 'Google GL',
        name: 'google_gl',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: 'de',
        description: 'Search geolocation code',
    },
    {
        displayName: 'Search Engine',
        name: 'search_engine',
        type: 'options',
        required: true,
        displayOptions,
        default: 'google',
        options: [
            {
                name: 'Bing',
                value: 'bing',
            },
            {
                name: 'Duckduckgo',
                value: 'duckduckgo',
            },
            {
                name: 'Google',
                value: 'google',
            },
            {
                name: 'Places',
                value: 'places',
            },
            {
                name: 'Yahoo',
                value: 'yahoo',
            },
            {
                name: 'Youtube',
                value: 'youtube',
            },
        ],
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
                displayName: 'Search Location Criteria ID',
                name: 'adwords_location_id',
                default: "",
                type: "string",
            },
            {
                displayName: 'Search Adjusted for Mobile Devices',
                name: 'mobile',
                type: 'boolean',
                default: false,
            },
            {
                displayName: 'Search Adjusted for Desktop Devices',
                name: 'desktop',
                type: 'boolean',
                default: true,
            },
        ],
    },
];