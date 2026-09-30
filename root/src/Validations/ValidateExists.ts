export function validateExists(
    actual: any
): boolean {

    return actual !== undefined
        &&
           actual !== null;
}
