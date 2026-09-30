import { request }
from "@playwright/test";

export async function executePatch(
    url: string,
    headers: any,
    requestBody: any
) {

    const apiContext = await request.newContext({ignoreHTTPSErrors: true});

    return await apiContext.patch(
        url,
        {
            headers,
            data: requestBody
        }
    );
}