import * as XLSX from 'xlsx';
import { RequestModel } from '../models/RequestModel';
import { readWorkbook } from './ReadWorkbook';
import { getSheet } from '../Utils/GetSheet';

export function readRequests(
    filePath: string
): RequestModel[] {

    const workbook =
        readWorkbook(filePath);

    const sheet =
        getSheet(
            workbook,
            "Requests"
        );

    const data =
        XLSX.utils.sheet_to_json<RequestModel>(
            sheet
        );

    // console.log(XLSX.utils.sheet_to_json(sheet, {header: 1}));
    
    return data;
}