import { parseJson } from "./JsonUtil";

export function parseRequestBody(
    requestBody: string
) {
    return parseJson(requestBody);
}