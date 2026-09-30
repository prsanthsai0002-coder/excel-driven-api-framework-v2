import * as XLSX from "xlsx";

import { ResultModel }
from "../models/ResultModel";

export function writeResultsToExcel(
    filePath: string,
    results: ResultModel[]
) {

    const workbook =
        XLSX.readFile(filePath);

    const resultData =
        results.map(result => ({

            tcId:
                result.tcId,

            expectedStatusCode:
                result.expectedStatusCode,

            actualStatusCode:
                result.actualStatusCode,

            overallResult:
                result.overallResult,

            remarks:
                result.remarks,

            executionTime:
                result.executionTime
        }));

    const resultSheet =
        XLSX.utils.json_to_sheet(
            resultData
        );

    workbook.Sheets["Results"] =
        resultSheet;

    if(
        !workbook.SheetNames.includes(
            "Results"
        )
    ){
        workbook.SheetNames.push(
            "Results"
        );
    }

    XLSX.writeFile(
        workbook,
        filePath
    );
}