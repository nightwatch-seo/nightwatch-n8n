import { INodeProperties } from 'n8n-workflow';
import { Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Urls],
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