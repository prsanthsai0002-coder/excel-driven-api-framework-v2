import {
    getVariable
}
from "./VariableStore";

export function
replaceVariables(
    value: string
) {

    if (!value)
        return value;

    return value.replace(

        /\{\{(.*?)\}\}/g,

        (_match, variableName) =>

            getVariable(
                variableName.trim()
            ) || ""
    );
}