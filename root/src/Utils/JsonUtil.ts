export function parseJson(value: string) {

    if (!value || value.trim() === "") {
        return {};
    }

    try {
        return JSON.parse(value);
    }
    catch (error) {

        console.error(
            `Invalid JSON : ${value}`
        );

        return {};
    }
}
