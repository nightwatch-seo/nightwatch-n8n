import { INodeProperties } from 'n8n-workflow';
import { Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Keywords],
        operation: ['listKeywords'],
    },
}

export const listKeywordsOperations: INodeProperties[] = [
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions,
        options: [
            {
                displayName: 'Sort Direction',
                name: 'direction',
                type: 'options',
                options: [
                    {
                        name: 'Ascending',
                        value: 'asc',
                    },
                    {
                        name: 'Descending',
                        value: 'desc',
                    },
                ],
                default: 'asc',
            },
            {
                displayName: 'Page Number',
                name: 'page',
                type: 'number',
                default: 1,
                typeOptions: {
                    minValue: 1,
                },
            },
            {
                displayName: 'Keywords Limit Per Page',
                name: 'limit',
                type: 'number',
                typeOptions: {
                    minValue: 1,
                },
                description: 'Max number of results to return',
                default: 50,
            },
            {
                displayName: 'Keywords Search Filter',
                name: 'search',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Sort',
                name: 'sort',
                type: 'options',
                options: [
                    {
                        name: 'Adwords Global Average Cpc',
                        value: 'adwords_global_average_cpc',
                    },
                    {
                        name: 'Adwords Global Search Volume',
                        value: 'adwords_global_search_volume',
                    },
                    {
                        name: 'Adwords Local Average Cpc',
                        value: 'adwords_local_average_cpc',
                    },
                    {
                        name: 'Adwords Local Search Volume',
                        value: 'adwords_local_search_volume',
                    },
                    {
                        name: 'Available Serp Features',
                        value: 'available_serp_features',
                    },
                    {
                        name: 'Best Position',
                        value: 'best_position',
                    },
                    {
                        name: 'Created At',
                        value: 'created_at',
                    },
                    {
                        name: 'Engine',
                        value: 'engine',
                    },
                    {
                        name: 'Google Gl',
                        value: 'google_gl',
                    },
                    {
                        name: 'Google Hl',
                        value: 'google_hl',
                    },
                    {
                        name: 'ID',
                        value: 'id',
                    },
                    {
                        name: 'Last Processed At',
                        value: 'last_processed_at',
                    },
                    {
                        name: 'Local Search',
                        value: 'local_search',
                    },
                    {
                        name: 'Mobile',
                        value: 'mobile',
                    },
                    {
                        name: 'Position',
                        value: 'position',
                    },
                    {
                        name: 'Position Changed At',
                        value: 'position_changed_at',
                    },
                    {
                        name: 'Position Changed By',
                        value: 'position_changed_by',
                    },
                    {
                        name: 'Position Changed During Last Day',
                        value: 'position_changed_during_last_day',
                    },
                    {
                        name: 'Position Changed During Last Month',
                        value: 'position_changed_during_last_month',
                    },
                    {
                        name: 'Position Changed During Last Week',
                        value: 'position_changed_during_last_week',
                    },
                    {
                        name: 'Position Changed Status',
                        value: 'position_changed_status',
                    },
                    {
                        name: 'Position Featured Snippet',
                        value: 'position_featured_snippet',
                    },
                    {
                        name: 'Position Knowledge Panel',
                        value: 'position_knowledge_panel',
                    },
                    {
                        name: 'Position Local Pack',
                        value: 'position_local_pack',
                    },
                    {
                        name: 'Position Organic',
                        value: 'position_organic',
                    },
                    {
                        name: 'Position Places',
                        value: 'position_places',
                    },
                    {
                        name: 'Position Places Image',
                        value: 'position_places_image',
                    },
                    {
                        name: 'Position Type',
                        value: 'position_type',
                    },
                    {
                        name: 'Previous Position',
                        value: 'previous_position',
                    },
                    {
                        name: 'Query',
                        value: 'query',
                    },
                    {
                        name: 'Updated At',
                        value: 'updated_at',
                    },
                ],
                default: 'id',
            },
        ],
    },
];