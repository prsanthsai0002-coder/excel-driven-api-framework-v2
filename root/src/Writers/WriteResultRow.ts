import { ResultModel } from "../models/ResultModel";

export function writeResultRow(
    results: ResultModel[]
){

    return results.map(
        result => ({

            tcId:
                result.tcId,

            expectedStatusCode:
                result.expectedStatusCode,

            actualStatusCode:
                result.actualStatusCode,

            overallResult:
                result.overallResult,

            remarks:
                result.remarks,

            executionTime:
                result.executionTime
        })
    );
}