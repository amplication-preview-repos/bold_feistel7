import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  cardExpirationDate?: SortOrder;
  createdAt?: SortOrder;
  creditCardNumber?: SortOrder;
  cvv?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
