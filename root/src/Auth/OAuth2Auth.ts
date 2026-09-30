export function oauth2Auth(
    token: string
): Record<string, string> {

    return {

        Authorization:
            `Bearer ${token}`
    };
}