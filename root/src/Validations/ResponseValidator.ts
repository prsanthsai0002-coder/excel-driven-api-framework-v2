import { ValidationModel }
from "../models/ValidationModel";

import { validateEquals }
from "./ValidateEquals";

import { validateContains }
from "./ValidateContains";

import { validateExists }
from "./ValidateExists";

import { getActualValue }
from "./GetActualValue";

export function responseValidator(
    responseBody: any,
    validations: ValidationModel[]
): boolean {

    let overallResult = true;

    for(const validation of validations){

        const actualValue =
            getActualValue(
                responseBody,
                validation.jsonPath
            );

        let result = false;

        switch(
            validation.validationType
                .toUpperCase()
        ){

            case "EQUALS":

                result =
                    validateEquals(
                        actualValue,
                        validation.expectedValue
                    );

                break;

            case "CONTAINS":

                result =
                    validateContains(
                        actualValue,
                        validation.expectedValue
                    );

                break;

            case "EXISTS":

                result =
                    validateExists(
                        actualValue
                    );

                break;
        }

        console.log(
            `${validation.jsonPath}
             Expected: ${validation.expectedValue}
             Actual: ${actualValue}
             Result: ${result}`
        );

        if(!result){
            overallResult = false;
        }
    }

    return overallResult;
}