export function validateEquals(
    actual: any,
    expected: any
): boolean {

    return String(actual)
        ===
        String(expected);
}
