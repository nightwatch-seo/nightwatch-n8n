import { INodeProperties } from 'n8n-workflow';
import { Resources } from './constants';

export const SeriesOperations: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	displayOptions: {
		show: {
			resource: [Resources.Series],
		},
	},
	options: [
		{
			name: 'Get Backlink Url Series',
			value: 'getBacklinkUrlSeries',
			action: 'Get backlink url series a series',
		},
		{
			name: 'Get Backlink View Series',
			value: 'getBacklinkViewSeries',
			action: 'Get backlink view series a series',
		},
		{
			name: 'Get Group Series',
			value: 'getGroupSeries',
			action: 'Get group series a series',
		},
		{
			name: 'Get Keyword Series',
			value: 'getKeywordSeries',
			action: 'Get keyword series a series',
		},
		{
			name: 'Get Keyword View Series',
			value: 'getKeywordViewSeries',
			action: 'Get keyword view series a series',
		},
		{
			name: 'Get Url Series',
			value: 'getUrlSeries',
			action: 'Get url series a series',
		},
	],
	default: 'getUrlSeries',
	noDataExpression: true,
};