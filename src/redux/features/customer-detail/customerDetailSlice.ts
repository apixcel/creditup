import { CustomerType } from "@/types/CustomerDetailType";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// export type CustomerType = {
//   customerName: string;
//   phone: string;
//   address: string;
//   postCode: string;
// };

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
  emailOrNumber: string;
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
  anotherLander: number;
};

export type CustomerInfoType = {
  customer: CustomerType;
  customerDetail: CustomerDetailType;
  customerAddress: CustomerAddressType;
  creditUp: CreditUpType;
  step: number;
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
    emailOrNumber: "",
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
    anotherLander: 0,
  },
  step: 1,
};

const initialState: CustomerInfoType | null = CustomerInfo;
const customerSlice = createSlice({
  name: "customerDetail",
  initialState,
  reducers: {
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
    setCustomerDetailName(
      state,
      action: PayloadAction<{ firstName: string; lastName: string }>
    ) {
      state.customerDetail.firstName = action.payload.firstName;
      state.customerDetail.lastName = action.payload.lastName;

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
    setCustomerDetailPassword(
      state,
      action: PayloadAction<{ password: string }>
    ) {
      state.customerDetail.password = action.payload.password;

      state.step++;
    },
    setCustomerDetailPhone(state, action: PayloadAction<{ phone: string }>) {
      state.customerDetail.phone = action.payload.phone;
      state.step++;
    },
    setCustomerDetailEmailOrNumber(
      state,
      action: PayloadAction<{ emailOrNumber: string }>
    ) {
      state.customerDetail.emailOrNumber = action.payload.emailOrNumber;
    },
    setCustomerAddress(state, action: PayloadAction<CustomerAddressType>) {
      state.customerAddress = action.payload;
      state.step++;
    },
    setCustomerDetailStatus(state, action: PayloadAction<{ status: string }>) {
      state.customerDetail.status = action.payload.status;
      state.step++;
    },
    setCustomerDetailTotal(state, action: PayloadAction<{ total: string }>) {
      state.customerDetail.total = action.payload.total;
      state.step++;
    },
    setCreditUp(state, action: PayloadAction<CreditUpType>) {
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
  setCustomerDetailName,
  setCustomerDetailPhone,
  setCustomerDetailEmailOrNumber,
  setCustomerDetailPassword,
  setCustomerDetailPaymentDate,
  setCustomerDetailStatus,
  setCustomerDetailTotal,
} = customerSlice.actions;
export default customerSlice.reducer;
