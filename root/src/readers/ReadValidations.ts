import * as XLSX from "xlsx";
import { ValidationModel } from "../models/ValidationModel";
import { readWorkbook } from "./ReadWorkbook";
import { getSheet } from "../Utils/GetSheet";


export function readValidations(
    filePath: string
): ValidationModel[] {

    const workbook =
        readWorkbook(filePath);

    const sheet =
        getSheet(
            workbook,
            "Validations"
        );

    const data =
        XLSX.utils.sheet_to_json<ValidationModel>(
            sheet
        );

    return data;
}