import { request }
from "@playwright/test";

export async function executePut(
    url: string,
    headers: any,
    requestBody: any
) {

    const apiContext = await request.newContext({ignoreHTTPSErrors: true});

    return await apiContext.put(
        url,
        {
            headers,
            data: requestBody
        }
    );
}