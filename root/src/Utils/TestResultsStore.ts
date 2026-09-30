import fs from "fs";

import { ResultModel }
from "../models/ResultModel";

const RESULTS_FILE =
    "./test-results/results.json";

export function saveResult(
    result: ResultModel
) {

    let results: ResultModel[] = [];

    if (
        fs.existsSync(
            RESULTS_FILE
        )
    ) {

        const content =
            fs.readFileSync(
                RESULTS_FILE,
                "utf-8"
            );

        if (content.trim()) {

            results =
                JSON.parse(content);
        }
    }

    results.push(result);

    fs.mkdirSync(
        "./test-results",
        { recursive: true }
    );

    fs.writeFileSync(
        RESULTS_FILE,
        JSON.stringify(
            results,
            null,
            2
        )
    );
}