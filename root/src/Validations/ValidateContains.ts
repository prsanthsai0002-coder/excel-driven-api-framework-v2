export function validateContains(
    actual: any,
    expected: string
): boolean {

    return String(actual)
        .includes(expected);
}