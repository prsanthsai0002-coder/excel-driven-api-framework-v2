import { ResultModel } from "../models/ResultModel";

export function createResult(
    tcId: string,
    expectedStatusCode: number,
    actualStatusCode: number,
    overallResult: string,
    remarks: string,
    executionTime: number
): ResultModel {

    return {

        tcId,

        expectedStatusCode,

        actualStatusCode,

        overallResult,

        remarks,

        executionTime
    };
}
``