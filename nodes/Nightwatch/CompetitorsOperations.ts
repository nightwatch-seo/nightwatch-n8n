import { INodeProperties } from "n8n-workflow";


export const CompetitorsOperations: INodeProperties = {
    displayName: 'Competitors',
    name: 'operation',
    type: 'options',
    displayOptions: {
        show: {
            resource: ['competitors'],
        }
    },
    options: [
        {
            name: 'Add Competitors',
            value: 'addCompetitors',
            action: 'Add competitors',
        },
        {
            name: 'Remove Competitors',
            value: 'removeCompetitors',
            action: 'Remove competitors',
        },
        {
            name: 'List Competitors',
            value: 'listCompetitors',
            action: 'List competitors',
        },
    ],
    default: 'listCompetitors',
    noDataExpression: true,
}