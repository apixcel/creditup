import { CustomerType } from "@/types/CustomerDetailType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Circumstances {
  totalDebtLevel: number;
  curCreditorRepayment: number;
  totalLender: number;
  newCreditorRepayment: number;
  monthlySaving: number;
  yearlySaving: number;
}

export type CustomerDetailType = {
  describe: string;
  title: string;
  dateOfBirth: string;
  email: string;
  status: string;
  total: number;
  firstName: string;
  lastName: string;
  paymentDate: string;
  password: string;
  phone: string;
};

export type CustomerAddressType = {
  buildingNumber: String;
  subBuildingName: String;
  buildingName: String;
  streetName: String;
  city: String;
  country: String;
};

export type CreditUpType = {
  lender: string;
  outstandingBalance: number;
  contribute: number;
};

export type CustomerInfoType = {
  customer: CustomerType;
  customerDetail: CustomerDetailType;
  customerAddress: CustomerAddressType;
  creditUp: CreditUpType[];
  step: number;
  circumstances: Circumstances;
};

export const CustomerInfo: CustomerInfoType = {
  customer: {
    customerName: "",
    phone: "",
    address: "",
    postCode: 0,
  },
  customerDetail: {
    describe: "",
    phone: "",
    title: "",
    dateOfBirth: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    status: "",
    total: 0,
    paymentDate: "",
  },
  customerAddress: {
    buildingNumber: "",
    subBuildingName: "",
    buildingName: "",
    streetName: "",
    city: "",
    country: "",
  },
  creditUp: [],
  circumstances: {
    totalDebtLevel: 0,
    totalLender: 0,
    curCreditorRepayment: 0,
    newCreditorRepayment: 0,

    monthlySaving: 0,
    yearlySaving: 0,
  },

  step: 1,
};

const initialState: CustomerInfoType | null = CustomerInfo;
const customerSlice = createSlice({
  name: "customerDetail",
  initialState,
  reducers: {
    resetStep(state, action) {
      state.step = 1;
    },
    decreaseStep(state, action) {
      const currentStet = state.step;

      if (currentStet == 1) {
        state.step = 1;
        return;
      }
      state.step -= 1;
    },
    setCustomer(state, action: PayloadAction<CustomerType>) {
      state.customer = action.payload;
      state.step++;
    },
    setCustomerDetailDescribe(
      state,
      action: PayloadAction<{ describe: string }>
    ) {
      state.customerDetail.describe = action.payload.describe;
      state.step++;
    },
    setCustomerDetailTitle(state, action: PayloadAction<{ title: string }>) {
      state.customerDetail.title = action.payload.title;
      state.step++;
    },
    setCustomerDetailDateOfBirth(
      state,
      action: PayloadAction<{ dateOfBirth: string }>
    ) {
      state.customerDetail.dateOfBirth = action.payload.dateOfBirth;
      state.step++;
    },
    setCustomerDetailEmail(state, action: PayloadAction<{ email: string }>) {
      state.customerDetail.email = action.payload.email;
      state.step++;
    },
    setCustomerDetailPhone(state, action: PayloadAction<{ phone: string }>) {
      state.customerDetail.phone = action.payload.phone;
      state.step++;
    },
    setCustomerAddress(state, action: PayloadAction<CustomerAddressType>) {
      console.log(action.payload);
      state.customerAddress = action.payload;
      state.step++;
    },
    setCustomerDetailStatus(state, action: PayloadAction<{ status: string }>) {
      state.customerDetail.status = action.payload.status;
      state.step++;
    },
    setCustomerDetailTotal(state, action: PayloadAction<{ total: string }>) {
      state.customerDetail.total = Number(action.payload.total);
      state.step++;
    },
    setCustomerDetailPassword(
      state,
      action: PayloadAction<{ password: string }>
    ) {
      state.customerDetail.password = action.payload.password;

      state.step++;
    },
    setCustomerDetailName(
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>
    ) {
      state.customerDetail.firstName = action.payload.firstName;
      state.customerDetail.lastName = action.payload.lastName;

      state.step++;
    },
    setCreditUp(state, action: PayloadAction<CreditUpType[]>) {
      state.creditUp = action.payload;
      state.step++;
    },
    setCustomerDetailPaymentDate(
      state,
      action: PayloadAction<{ paymentDate: string }>
    ) {
      state.customerDetail.paymentDate = action.payload.paymentDate;
      state.step++;
    },
    setCircumstances(state, action: PayloadAction<Circumstances>) {
      state.circumstances = action.payload;
    },

    resetState(state, action) {
      return CustomerInfo;
    },
  },
});

export const {
  setCustomer,
  setCustomerDetailDescribe,
  setCustomerDetailName,
  setCustomerDetailTitle,
  setCustomerAddress,
  setCustomerDetailDateOfBirth,
  setCustomerDetailEmail,
  setCreditUp,
  setCustomerDetailPhone,
  setCustomerDetailPassword,
  setCustomerDetailPaymentDate,
  setCustomerDetailStatus,
  setCustomerDetailTotal,
  resetStep,
  setCircumstances,
  decreaseStep,
  resetState,
} = customerSlice.actions;

export default customerSlice.reducer;
