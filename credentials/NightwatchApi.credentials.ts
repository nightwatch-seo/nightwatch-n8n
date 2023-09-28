import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class NightwatchApi implements ICredentialType {
	name = 'nightwatchApi';
	displayName = 'Nightwatch API';
	properties: INodeProperties[] = [
		{
			displayName: 'Access token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				"access_token": '={{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.nightwatch.io/api/v1',
			url: '/user',
		},
	};
}
