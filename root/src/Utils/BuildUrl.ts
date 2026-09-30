import { RequestModel }
from "../models/RequestModel";

export function buildUrl(
    request: RequestModel
): string {

    return `${request.baseURL}${request.endPoint}`;
}