import { readFile, utils } from 'xlsx';
import path from "path";
import { TransformHeaders } from './transformExcelHeaders';
import { TransformedHeaders } from './transformedExcelHeaders';
import { transformHeaders } from './transform';

const filename = path.resolve(__dirname,'../inputData/Login.xlsx')
const workbook = readFile(filename);
const { excelHeaders } = workbook.Sheets;
const ExcelParams: TransformHeaders[] = utils.sheet_to_json(excelHeaders);


function getTransformedExcelHeaders(): TransformedHeaders[] {
    const excelData: TransformedHeaders [] = transformHeaders(ExcelParams)
    return excelData;
}

export {getTransformedExcelHeaders};