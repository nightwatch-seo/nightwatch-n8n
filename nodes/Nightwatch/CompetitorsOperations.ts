import { INodeProperties } from "n8n-workflow";
import { ResourceOperations, Resources } from "./constants";

const resource = Resources.Competitors
const defaultOperation: string = ResourceOperations[resource].ListCompetitors

export const CompetitorsOperations: INodeProperties = {
    displayName: 'Competitors',
    name: 'operation',
    type: 'options',
    displayOptions: {
        show: {
            resource: [resource],
        }
    },
    options: [
        {
            name: 'Add Competitors',
            value: ResourceOperations[resource].AddCompetitors,
            action: 'Add competitors',
        },
        {
            name: 'Remove Competitors',
            value: ResourceOperations[resource].RemoveCompetitors,
            action: 'Remove competitors',
        },
        {
            name: 'List Competitors',
            value: ResourceOperations[resource].ListCompetitors,
            action: 'List competitors',
        },
    ],
    default: defaultOperation,
    noDataExpression: true,
}