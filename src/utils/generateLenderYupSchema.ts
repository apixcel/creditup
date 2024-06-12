import * as Yup from "yup";

type SchemaFields = {
  [fieldName: string]: Yup.StringSchema<string> | Yup.NumberSchema<number>;
};
export const generateValidationSchema = (numLenders: number) => {
  const schemaFields: SchemaFields = {};
  for (let i = 0; i < numLenders; i++) {
    schemaFields[`lender${i + 1}`] = Yup.string().required(
      "You must enter the lender"
    );
    schemaFields[`outstandingBalance${i + 1}`] = Yup.number().required(
      "You must enter the outstanding balance"
    );
    schemaFields[`contribute${i + 1}`] = Yup.number().required(
      "You must enter the contribution"
    );
  }
  return Yup.object().shape(schemaFields);
};

export const generateCreditupInitValue = (numLenders: number) => {
  const initialValues: Record<string, unknown> = {};
  for (let i = 0; i < numLenders; i++) {
    initialValues[`lender${i + 1}`] = "";
    initialValues[`outstandingBalance${i + 1}`] = "";
    initialValues[`contribute${i + 1}`] = "";
  }
  return initialValues;
};
