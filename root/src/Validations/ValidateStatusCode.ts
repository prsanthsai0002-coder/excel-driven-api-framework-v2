export function validateStatusCode(
    expectedStatusCode: number,
    actualStatusCode: number
): boolean {

    return expectedStatusCode === actualStatusCode;
}