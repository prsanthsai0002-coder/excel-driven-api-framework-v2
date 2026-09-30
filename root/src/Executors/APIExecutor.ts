import { RequestModel }
    from "../models/RequestModel";

import { buildUrl }
    from "../Utils/BuildUrl";

import { parseHeaders }
    from "../Utils/ParseHeaders";

import { parseQueryParams }
    from "../Utils/ParseQueryParams";

import { parseRequestBody }
    from "../Utils/ParseRequestBody";

import { executeGet }
    from "./ExecuteGet";

import { executePost }
    from "./ExecutePost";

import { executePut }
    from "./ExecutePut";

import { executePatch }
    from "./ExecutePatch";

import { executeDelete }
    from "./ExecuteDelete";

import { replaceVariables }
    from "../Utils/ReplaceVariables";

import { authManager }
    from "../Auth/AuthManager";

export async function apiExecutor(
    requestData: RequestModel
) {

    const url =
        buildUrl(requestData);

    const headers =
        parseHeaders(
            requestData.headers
        );

    const authValue =
        replaceVariables(
            requestData.authValue || ""
        );

    console.log(
        "Resolved Auth Value =>",
        authValue
    );

    const authHeaders =
        authManager(
            requestData.authType,
            authValue
        );

    const finalHeaders = {

        ...headers,

        ...authHeaders
    };

    console.log(
        "================================"
    );

    const DEBUG = false;

    if (DEBUG) {
        console.log("Auth Type =>", requestData.authType);
        console.log("Auth Headers =>", authHeaders);
    }

    console.log(
        "================================"
    );

    const queryParams =
        parseQueryParams(
            requestData.queryParams
        );

    const requestBody =
        parseRequestBody(
            requestData.requestBody
        );

    switch (
    requestData.method
        .toUpperCase()
    ) {

        case "GET":

            return await executeGet(
                url,
                finalHeaders,
                queryParams
            );

        case "POST":

            return await executePost(
                url,
                finalHeaders,
                requestBody
            );

        case "PUT":

            return await executePut(
                url,
                finalHeaders,
                requestBody
            );

        case "PATCH":

            return await executePatch(
                url,
                finalHeaders,
                requestBody
            );

        case "DELETE":

            return await executeDelete(
                url,
                finalHeaders
            );

        default:

            throw new Error(
                `Unsupported Method : ${requestData.method}`
            );
    }
}