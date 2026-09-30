import fs from "fs";

import { writeResultsToExcel }
from "./src/Writers/ExcelWriter";

async function globalTeardown() {

    const resultsFile =
        "./test-results/results.json";

    if (
        !fs.existsSync(
            resultsFile
        )
    ) {

        console.log(
            "No Results File Found"
        );

        return;
    }

    const content =
        fs.readFileSync(
            resultsFile,
            "utf-8"
        );

    const results =
        JSON.parse(content);

    console.log(
        "Results Loaded =>",
        results.length
    );

    writeResultsToExcel(
        "./testdata/APIRequests.xlsx",
        results
    );
}

export default globalTeardown;