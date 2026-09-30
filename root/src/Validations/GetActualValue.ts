import get from "lodash/get";

export function getActualValue(
    responseBody: any,
    jsonPath: string
) {

    return get(
        responseBody,
        jsonPath
    );
}