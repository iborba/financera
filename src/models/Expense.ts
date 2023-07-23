export enum PaymentType {
  Debit = 'debit',
  Cash = 'cash',
  CreditCard = 'credit card',
}

export interface InstallmentInfo {
  installments: number;
  frequence: number; // In days
}

export interface Expense {
  expenseName: string;
  amount: number;
  installments: boolean;
  installmentInfo?: InstallmentInfo;
  paymentType: PaymentType;
  expenseType: string[];
  comments?: string;
}
