import { IDataObject, IExecuteFunctions } from "n8n-workflow";

export const getAdditionalFields = (iExecuteFunctions: IExecuteFunctions, i: number): IDataObject => {
    try {
        const additionalFields = iExecuteFunctions.getNodeParameter('additionalFields', i) as IDataObject;

        return additionalFields
    } catch (error) {
        return {} as IDataObject
    }
}