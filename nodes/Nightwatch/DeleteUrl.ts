import { INodeProperties } from 'n8n-workflow';
import { ResourceOperations, Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Urls],
        operation: [ResourceOperations[Resources.Urls].DeleteUrl],
    },
};

export const deleteUrlOperations: INodeProperties[] = [
    {
        displayName: 'Url_ID',
        name: 'url_id',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        placeholder: '214551',
        description: 'The ID of the URL to be deleted',
    },
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
            description: 'The ID of the group',
        },]
    }
];