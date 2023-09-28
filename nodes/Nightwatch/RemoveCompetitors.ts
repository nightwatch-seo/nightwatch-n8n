import { INodeProperties } from 'n8n-workflow';

const displayOptions = {
    show: {
        resource: ['competitors'],
        operation: ['removeCompetitors'],
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