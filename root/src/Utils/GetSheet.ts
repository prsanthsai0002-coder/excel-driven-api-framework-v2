import * as XLSX from 'xlsx';

export function getSheet(
    workbook: XLSX.WorkBook,
    sheetName: string
) {

    return workbook.Sheets[sheetName];
}