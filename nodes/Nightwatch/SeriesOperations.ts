import { INodeProperties } from 'n8n-workflow';
import { ResourceOperations, Resources } from './constants';


const resource = Resources.Series
const defaultOperation: string = ResourceOperations[resource].GetUrlSeries

export const SeriesOperations: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	displayOptions: {
		show: {
			resource: [resource],
		},
	},
	options: [
		{
			name: 'Get Backlink Url Series',
			value: ResourceOperations[resource].GetBacklinkUrlSeries,
			action: 'Get backlink url series a series',
		},
		{
			name: 'Get Backlink View Series',
			value: ResourceOperations[resource].GetBacklinkViewSeries,
			action: 'Get backlink view series a series',
		},
		{
			name: 'Get Group Series',
			value: ResourceOperations[resource].GetGroupSeries,
			action: 'Get group series a series',
		},
		{
			name: 'Get Keyword Series',
			value: ResourceOperations[resource].GetKeywordSeries,
			action: 'Get keyword series a series',
		},
		{
			name: 'Get Keyword View Series',
			value: ResourceOperations[resource].GetKeywordViewSeries,
			action: 'Get keyword view series a series',
		},
		{
			name: 'Get Url Series',
			value: ResourceOperations[resource].GetUrlSeries,
			action: 'Get url series a series',
		},
	],
	default: defaultOperation,
	noDataExpression: true,
};