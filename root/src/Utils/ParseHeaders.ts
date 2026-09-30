import { parseJson } from "./JsonUtil";

export function parseHeaders(
    headers: string
) {
    return parseJson(headers);
}