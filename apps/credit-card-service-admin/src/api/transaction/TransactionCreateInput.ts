export type TransactionCreateInput = {
  cardExpirationDate?: Date | null;
  creditCardNumber?: string | null;
  cvv?: string | null;
  email?: string | null;
  name?: string | null;
};
