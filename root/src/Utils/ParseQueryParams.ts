import { parseJson } from "./JsonUtil";

export function parseQueryParams(
    queryParams: string
) {
    return parseJson(queryParams);
}