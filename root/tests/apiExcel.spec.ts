import { test, expect }
    from "@playwright/test";

import { readRequests }
    from "../src/readers/ReadRequests";

import { readValidations }
    from "../src/readers/ReadValidations";

import { apiExecutor }
    from "../src/Executors/APIExecutor";

import { responseValidator }
    from "../src/Validations/ResponseValidator";

import { validateStatusCode }
    from "../src/Validations/ValidateStatusCode";

import { createResult }
    from "../src/Utils/CreateResult";

import { saveResult }
    from "../src/Utils/TestResultsStore";

import { extractValue }
    from "../src/Utils/ExtractValue";

import { saveVariable }
    from "../src/Utils/VariableStore";

const filePath =
    "./testdata/APIRequests.xlsx";

const requests =
    readRequests(filePath);

const validations =
    readValidations(filePath);

for (
    const request
    of requests
) {

    if (
        request.run !== "Y"
    ) {
        continue;
    }

    test(

        `${request.tcId} - ${request.description}`,

        async () => {

            const response =
                await apiExecutor(
                    request
                );

            let responseBody;

            try {

                responseBody =
                    await response.json();

            }
            catch {

                responseBody =
                    await response.text();
            }

            /*
            ==========================================
            Enhancement 2
            Token Extraction & Storage
            ==========================================
            */

            if (
                request.extractPath &&
                request.storeAs
            ) {

                const extractedValue =
                    extractValue(
                        responseBody,
                        request.extractPath
                    );

                saveVariable(
                    request.storeAs,
                    String(
                        extractedValue
                    )
                );

                console.log(
                    "================================"
                );

                console.log(
                    "TOKEN EXTRACTION"
                );

                console.log(
                    "JsonPath =>",
                    request.extractPath
                );

                console.log(
                    "Store As =>",
                    request.storeAs
                );

                console.log(
                    "Extracted Value =>",
                    extractedValue
                );

                console.log(
                    "================================"
                );
            }

            console.log(
                "================================"
            );

            console.log(
                "TC =>",
                request.tcId
            );

            console.log(
                "METHOD =>",
                request.method
            );

            console.log(
                "RESPONSE BODY =>"
            );

            console.dir(
                responseBody,
                { depth: null }
            );

            console.log(
                "================================"
            );

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

            const statusValidationResult =
                validateStatusCode(
                    request.expectedStatusCode,
                    response.status()
                );

            const finalResult =
                bodyValidationResult &&
                statusValidationResult;

            const result =
                createResult(

                    request.tcId,

                    request.expectedStatusCode,

                    response.status(),

                    finalResult
                        ? "PASS"
                        : "FAIL",

                    finalResult
                        ? "Execution Successful"
                        : "Execution Failed",

                    0
                );

            saveResult(
                result
            );

            console.log(
                "Result Added =>",
                result
            );

            if (!finalResult) {

                console.error(
                    "\n================================"
                );

                console.error(
                    `TEST FAILED : ${request.tcId}`
                );

                console.error(
                    `METHOD : ${request.method}`
                );

                console.error(
                    `EXPECTED STATUS : ${request.expectedStatusCode}`
                );

                console.error(
                    `ACTUAL STATUS : ${response.status()}`
                );

                console.error(
                    "\nRESPONSE BODY :"
                );

                console.dir(
                    responseBody,
                    { depth: null }
                );

                console.error(
                    "================================\n"
                );
            }

            expect(
                finalResult,

                `
TC : ${request.tcId}

Body Validation Result :
${bodyValidationResult}

Status Validation Result :
${statusValidationResult}

Expected Status :
${request.expectedStatusCode}

Actual Status :
${response.status()}
                `
            ).toBeTruthy();

        }
    );
}