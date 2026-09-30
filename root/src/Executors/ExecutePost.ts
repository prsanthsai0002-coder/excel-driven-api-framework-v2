import { request }
from "@playwright/test";

export async function executePost(
    url: string,
    headers: any,
    requestBody: any
) {

    
    const apiContext = await request.newContext({ignoreHTTPSErrors: true});

    return await apiContext.post(
        url,
        {
            headers,
            data: requestBody
        }
    );
}