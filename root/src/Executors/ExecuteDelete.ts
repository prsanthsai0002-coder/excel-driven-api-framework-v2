import { request }
from "@playwright/test";

export async function executeDelete(
    url: string,
    headers: any
) {

    const apiContext = await request.newContext({ignoreHTTPSErrors: true});
    
    return await apiContext.delete(
        url,
        {
            headers
        }
    );
}
