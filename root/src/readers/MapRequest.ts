import { RequestModel } from "../models/RequestModel";

export function mapRequest(
    row: any
): RequestModel {

    return {

        tcId: row.TC_ID,

        run: row["wantToRun?(Y/N)"],

        module: row.Module,

        description: row.Description,

        method: row.Method,

        baseURL: row.BaseURL,

        endPoint: row.Endpoint,

        queryParams: row.QueryParams,

        headers: row.Headers,

        authType: row.AuthType,

        authValue: row.AuthValue,

        requestBody: row.RequestBody,

        expectedStatusCode:
            row.ExpectedStatusCode,

        retryCount:
            row.RetryCount,

        dependencyTC:
            row.DependencyTC,

        environment:
            row.Environment
    };
}