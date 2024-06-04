export type Transaction = {
  cardExpirationDate: Date | null;
  createdAt: Date;
  creditCardNumber: string | null;
  cvv: string | null;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
