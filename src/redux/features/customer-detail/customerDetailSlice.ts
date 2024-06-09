import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CustomerType = {
  customerName: string;
  phone: string;
  address: string;
  postCode: string;
};

export type CustomerDetailType = {
  describe: string;
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
  status: string;
  total: string;
  paymentDate: string;
  [key: string]: any;
};

export type CustomerAddressType = {
  postCode: String;
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
  [key: string]: any;
};

export type CustomerInfoType = {
  customer: CustomerType;
  customerDetail: CustomerDetailType;
  customerAddress: CustomerAddressType;
  creditUp: CreditUpType;
};

export const CustomerInfo: CustomerInfoType = {
  customer: {
    customerName: "",
    phone: "",
    address: "",
    postCode: "",
  },
  customerDetail: {
    describe: "",
    title: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    status: "",
    total: "",
    paymentDate: "",
  },
  customerAddress: {
    postCode: "",
    buildingNumber: "",
    subBuildingName: "",
    buildingName: "",
    streetName: "",
    city: "",
    country: "",
  },
  creditUp: {
    lender: "",
    outstandingBalance: 0,
    contribute: 0,
  },
};

const initialState: CustomerInfoType | null = CustomerInfo;
const customerSlice = createSlice({
  name: "customerDetail",
  initialState,
  reducers: {
    setCustomer(state, action: PayloadAction<CustomerType>) {
      state.customer = action.payload;
    },
    setCustomerDetailDescribe(
      state,
      action: PayloadAction<{ describe: string }>
    ) {
      state.customerDetail.describe = action.payload.describe;
    },
    setCustomerDetailTitle(state, action: PayloadAction<{ title: string }>) {
      state.customerDetail.title = action.payload.title;
    },
    setCustomerDetailFirstName(
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>
    ) {
      state.customerDetail.firstName = action.payload.firstName;
      state.customerDetail.lastName = action.payload.lastName;
    },

    setCustomerDetailDateOfBirth(
      state,
      action: PayloadAction<{ dateOfBirth: string }>
    ) {
      state.customerDetail.dateOfBirth = action.payload.dateOfBirth;
    },
    setCustomerDetailEmail(state, action: PayloadAction<{ email: string }>) {
      state.customerDetail.email = action.payload.email;
    },
    setCustomerDetailPassword(
      state,
      action: PayloadAction<{ password: string }>
    ) {
      state.customerDetail.password = action.payload.password;
    },
    setCustomerDetailLastName(state, action: PayloadAction<{ phone: string }>) {
      state.customerDetail.phone = action.payload.phone;
    },
    setCustomerAddress(state, action: PayloadAction<CustomerAddressType>) {
      state.customerAddress = action.payload;
    },
    setCustomerDetailStatus(state, action: PayloadAction<{ status: string }>) {
      state.customerDetail.status = action.payload.status;
    },
    setCustomerDetailTotal(state, action: PayloadAction<{ total: string }>) {
      state.customerDetail.total = action.payload.total;
    },
    setCreditUp(state, action: PayloadAction<CreditUpType>) {
      state.creditUp = action.payload;
    },
    setCustomerDetailPaymentDate(
      state,
      action: PayloadAction<{ paymentDate: string }>
    ) {
      state.customerDetail.paymentDate = action.payload.paymentDate;
    },
  },
});

export const {
  setCustomer,
  setCustomerDetailDescribe,
  setCustomerDetailTitle,
  setCustomerAddress,
  setCustomerDetailDateOfBirth,
  setCustomerDetailEmail,
  setCreditUp,
  setCustomerDetailFirstName,
  setCustomerDetailLastName,
  setCustomerDetailPassword,
  setCustomerDetailPaymentDate,
  setCustomerDetailStatus,
  setCustomerDetailTotal,
} = customerSlice.actions;
export default customerSlice.reducer;
