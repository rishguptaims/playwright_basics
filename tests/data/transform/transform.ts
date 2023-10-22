import { TransformHeaders } from "./transformExcelHeaders";
import { TransformedHeaders } from "./transformedExcelHeaders";


function transformHeaders(input: TransformHeaders[]): TransformedHeaders[] {
const transformedHeaders: TransformedHeaders[] = input.map((inp) => {
    const {
        slNo,
        loginId,
        loginPassword
    } = inp;
   return {
    slNo,
    loginId,
    loginPassword,
   };
});
return transformedHeaders;
}

export { transformHeaders };