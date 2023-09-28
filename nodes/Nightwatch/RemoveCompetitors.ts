import { INodeProperties } from 'n8n-workflow';
import { ResourceOperations, Resources } from './constants';

const displayOptions = {
    show: {
        resource: [Resources.Competitors],
        operation: [ResourceOperations[Resources.Competitors].RemoveCompetitors],
    },
};

export const removeCompetitorsOperations: INodeProperties[] = [
    {
        displayName: 'Competitor ID',
        name: 'competitor_id',
        type: 'string',
        required: true,
        displayOptions,
        default: '',
        description: "Competitor ID to be deleted"
    },
];