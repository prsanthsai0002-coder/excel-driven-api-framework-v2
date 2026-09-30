export function apiKeyAuth(
    authValue: string
): Record<string, string> {

    const values =
        authValue.split(":");

    const headerName =
        values[0];

    const headerValue =
        values[1];

    return {

        [headerName]:
            headerValue
    };
}
