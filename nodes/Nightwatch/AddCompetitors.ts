import { INodeProperties } from 'n8n-workflow';
import { ResourceOperations, Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Competitors],
        operation: [ResourceOperations[Resources.Competitors].AddCompetitors],
    },
};

export const addCompetitorsOperations: INodeProperties[] = [
    {
        displayName: 'Url',
        name: 'url',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: "http://new.example.com/",
        description: "URL to track"
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
                displayName: 'Match Subdomains',
                name: 'match_subdomains',
                type: 'boolean',
                default: false,
                description: 'Whether to match subdomains',
            },
            {
                displayName: 'Match Nested Urls',
                name: 'match_nested_urls',
                type: 'boolean',
                default: false,
                description: 'Whether to match subpaths in the URL',
            },
            {
                displayName: 'Places Match',
                name: 'places_match',
                type: 'string',
                default: '',
                description: "Place name or CID"
            },
            {
                displayName: 'Places Image Title',
                name: 'places_image_title',
                type: 'string',
                default: '',
                description: "Title for tracking in image carousel"
            },
            {
                displayName: 'Custom Competitor Name',
                name: 'custom_name',
                type: 'string',
                default: '',
            },]
    }
];