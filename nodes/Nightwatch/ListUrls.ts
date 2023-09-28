import { INodeProperties } from 'n8n-workflow';

const displayOptions = {
    show: {
        resource: ['urls'],
        operation: ['listUrls'],
    },
};

export const listUrlsOperations: INodeProperties[] = [
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions,
        options: [{
            displayName: 'Groupd ID',
            name: 'group_id',
            type: 'string',
            default: "",
            description: 'Only return URLs belonging to this group',
        },]
    }
];