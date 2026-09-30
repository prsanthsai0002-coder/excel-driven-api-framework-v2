export interface ResultModel {

    tcId: string;

    expectedStatusCode: number;

    actualStatusCode: number;

    overallResult: string;

    remarks: string;

    executionTime: number;
}