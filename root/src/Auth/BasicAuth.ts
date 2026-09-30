export function basicAuth(
    authValue: string
): Record<string, string> {

    const encodedCredentials =
        Buffer
            .from(authValue)
            .toString("base64");

    return {

        Authorization:
            `Basic ${encodedCredentials}`
    };
}