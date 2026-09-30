const variables:
Record<string, string>
= {};

export function
saveVariable(
    key: string,
    value: string
) {

    variables[key] =
        value;
}

export function
getVariable(
    key: string
) {

    return variables[key];
}