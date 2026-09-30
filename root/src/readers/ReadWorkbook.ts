import * as XLSX from 'xlsx';

export function readWorkbook(
    filePath: string
) {

    return XLSX.readFile(filePath);
}