import { INodeProperties } from 'n8n-workflow';
import { Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Urls],
        operation: ['updateUrl'],
    },
};

export const updateUrlOperations: INodeProperties[] = [
    {
        displayName: 'Url ID',
        name: 'url_id',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: '123456',
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
                displayName: 'Url Group ID',
                name: 'url_group_id',
                type: 'string',
                default: '',
                placeholder: "1234",
                description: 'Group ID this URL belong to',
            },
            {
                displayName: 'Places Match',
                name: 'places_match',
                type: 'string',
                default: "",
                description: 'Place name or CID',
            }, {
                displayName: 'Custom Name',
                name: 'custom_name',
                type: 'string',
                default: "",
                description: 'Custom URL name, used for displaying purposes',
            },
            {
                displayName: 'Country Code',
                name: 'country_code',
                type: 'string',
                default: '',
                placeholder: 'DE',
                description: 'ISO3166 alpha-2 coutry code',
            },
            {
                displayName: 'Language Code',
                name: 'language_code',
                type: 'string',
                default: '',
                placeholder: 'en',
                description: 'ISO639-1 language code',
            },
            {
                displayName: 'Include Local Pack In Main Position',
                name: 'include_local_pack_in_main_position',
                type: 'boolean',
                default: true,
                description: 'Whether to include local pack rankings in the main one',
            },
            {
                displayName: 'Include Places Image In Main Position',
                name: 'include_places_image_in_main_position',
                type: 'boolean',
                default: true,
                description: 'Whether to include image carousel rankings in the main one',
            },
            {
                displayName: 'Include Featured Snippet In Main Position',
                name: 'include_featured_snippet_in_main_position',
                type: 'boolean',
                default: true,
                description: 'Whether to include feature snippets rankings in the main one',
            },
            {
                displayName: 'Include Knowledge Panel In Main Position',
                name: 'include_knowledge_panel_in_main_position',
                type: 'boolean',
                default: true,
                description: 'Whether to include knowledge panel rankings in the main one',
            },
            {
                displayName: 'Crawling Session Path Ignore Pattern',
                name: 'crawling_session_path_ignore_pattern',
                type: 'string',
                default: '',
                description: 'Ignore path patterns for site audits',
            },
            {
                displayName: 'Crawling Session Url Params Enabled',
                name: 'crawling_session_url_params_enabled',
                type: 'boolean',
                default: true,
                description: 'Whether to include query parameters in site audits',
            },
            {
                displayName: 'Crawling Session Follow Nofollow Links',
                name: 'crawling_session_follow_nofollow_links',
                type: 'boolean',
                default: true,
                description: 'Whether to follow nofollow links in site audits',
            },
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
                default: true,
                description: 'Whether to match subpaths in the URL',
            },
            {
                displayName: 'Site Audit Interval',
                name: 'site_audit_interval',
                type: 'options',
                options: [
                    {
                        name: '1 Week',
                        value: '604800',
                    },
                    {
                        name: '30 Days',
                        value: '2592000',
                    },
                ],
                default: '2592000',
                description: 'Recurring site audit intervals',
            },
            {
                displayName: 'Ignored Domains',
                name: 'backlinks_settings.ignored_domains',
                type: 'string',
                default: '',
                description: 'Comma seperated domain backlinks that should be ignored',
            },

            {
                displayName: 'Min Url Rating',
                name: 'backlinks_settings.min_url_rating',
                type: 'number',
                default: 1,
                description: 'Minimum URL rating for backlink domains',
            },
        ]
    }
];