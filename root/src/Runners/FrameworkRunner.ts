import path from "path";


import { readRequests }
from "../readers/ReadRequests";

import { readValidations }
from "../readers/ReadValidations";

import { apiExecutor }
from "../Executors/APIExecutor";

import { responseValidator }
from "../Validations/ResponseValidator";

import { validateStatusCode }
from "../Validations/ValidateStatusCode";

import { createResult }
from "../Utils/CreateResult";

import { ResultModel }
from "../models/ResultModel";

import { writeResultsToExcel }
from "../Writers/ExcelWriter";


async function run() {

    try {

        const filePath =
            "./testdata/APIRequests.xlsx";

        console.log(
            "Excel Path =>",
            path.resolve(filePath)
        );

        const requests =
            readRequests(filePath);

        const validations =
            readValidations(filePath);

        console.log(
            `Requests Loaded : ${requests.length}`
        );

        console.log(
            `Validations Loaded : ${validations.length}`
        );

        const results: ResultModel[] = [];

        for (const request of requests) {

            if (request.run !== "Y") {

                console.log(
                    `Skipping TC : ${request.tcId}`
                );

                continue;
            }

            console.log(
                `Executing TC : ${request.tcId}`
            );

            const startTime =
                Date.now();

            const response =
                await apiExecutor(request);

            const endTime =
                Date.now();

            const executionTime =
                endTime - startTime;

            const responseBody =
                await response.json();

            const tcValidations =
                validations.filter(
                    validation =>
                        validation.tcId ===
                        request.tcId
                );

            const bodyValidationResult =
                responseValidator(
                    responseBody,
                    tcValidations
                );

            const statusCodeValidationResult =
                validateStatusCode(
                    request.expectedStatusCode,
                    response.status()
                );

            const finalResult =
                bodyValidationResult &&
                statusCodeValidationResult;

            const result =
                createResult(
                    request.tcId,
                    request.expectedStatusCode,
                    response.status(),
                    finalResult
                        ? "PASS"
                        : "FAIL",
                    finalResult
                        ? "All validations passed"
                        : "Validation failed",
                    executionTime
                );

            results.push(result);

            console.log(
                "================================"
            );

            console.log(
                `TC : ${request.tcId}`
            );

            console.log(
                `Status : ${response.status()}`
            );

            console.log(
                JSON.stringify(
                    responseBody,
                    null,
                    2
                )
            );

            console.log(
                `Overall Result : ${result.overallResult}`
            );

            console.log(
                `Execution Time : ${executionTime} ms`
            );

            console.log(
                "================================"
            );
        }

        console.log(
            "================================"
        );

        writeResultsToExcel(
            filePath,
            results
        );

        console.log(
            "FINAL EXECUTION SUMMARY"
        );

        console.log(results);

        console.log(
            "================================"
        );

    }
    catch (error) {

        console.error(
            "Framework Failed"
        );

        console.error(error);
    }
}

run();