import { INodeProperties } from "n8n-workflow";
import { ResourceOperations, Resources } from "./constants";


const resource = Resources.Keywords
const defaultOperation: string = ResourceOperations[resource].ListKeywords


export const KeywordsOperations: INodeProperties = {
    displayName: 'Operation',
    name: 'operation',
    type: 'options',
    displayOptions: {
        show: {
            resource: [resource],
        }
    },
    options: [
        {
            name: 'Add Keywords',
            value: ResourceOperations[resource].AddKeywords,
            action: 'Add keywords',
        },
        {
            name: 'Delete Keywords',
            value: ResourceOperations[resource].DeleteKeywords,
            action: 'Delete keywords',
        },
        {
            name: 'Keyword Results',
            value: ResourceOperations[resource].KeywordResults,
            action: 'Keyword results',
        },
        {
            name: 'List Dynamic View Keywords',
            value: ResourceOperations[resource].ListDynamicViewKeywords,
            action: 'List dynamic view keywords',
        },
        {
            name: 'List Keywords',
            value: ResourceOperations[resource].ListKeywords,
            action: 'List keywords',
        },
        {
            name: 'Update Keywords',
            value: ResourceOperations[resource].UpdateKeywords,
            action: 'Update keywords',
        },
    ],
    default: defaultOperation,
    noDataExpression: true,
}