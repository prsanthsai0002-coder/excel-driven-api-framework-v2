import get
from "lodash/get";

export function
extractValue(
    responseBody: any,
    jsonPath: string
) {

    return get(
        responseBody,
        jsonPath
    );
}