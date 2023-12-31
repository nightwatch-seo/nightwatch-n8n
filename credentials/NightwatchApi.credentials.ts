import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';
import { NightWatchCredentialsName, baseUri } from '../nodes/Nightwatch/constants';

export class NightwatchApi implements ICredentialType {
	name = NightWatchCredentialsName;
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
			baseURL: baseUri,
			url: '/user',
		},
	};
}
