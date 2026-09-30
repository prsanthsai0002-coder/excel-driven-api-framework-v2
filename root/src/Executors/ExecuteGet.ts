import { request }
from "@playwright/test";

export async function executeGet(
    url: string,
    headers: any,
    queryParams: any
) {

    const apiContext = await request.newContext({ignoreHTTPSErrors: true});

    return await apiContext.get(
        url,
        {
            headers,
            params: queryParams
        }
    );
}