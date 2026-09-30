import * as XLSX from "xlsx";

export function createResultsSheet(
    workbook: XLSX.WorkBook
) {

    if(
        !workbook.Sheets["Results"]
    ){

        const sheet =
            XLSX.utils.json_to_sheet([]);

        workbook.Sheets["Results"]
            = sheet;

        workbook.SheetNames.push(
            "Results"
        );
    }
}