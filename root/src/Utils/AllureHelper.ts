import { allure }
from "allure-playwright";

export function addRequestDetails(
    request: any
){

    allure.attachment(
        "Request Details",
        JSON.stringify(
            request,
            null,
            2
        ),
        "application/json"
    );
}

export function addResponseDetails(
    response: any
){

    allure.attachment(
        "Response",
        JSON.stringify(
            response,
            null,
            2
        ),
        "application/json"
    );
}