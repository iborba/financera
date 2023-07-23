import { Request, Response } from 'express';
import { Expense, InstallmentInfo, PaymentType } from '../models/Expense';

class ExpenseController {
  private expenses: Expense[] = [];

  public createExpense(req: Request, res: Response): void {
    const {
      expenseName,
      amount,
      installments,
      installmentInfo,
      paymentType,
      expenseType,
      comments,
    } = req.body;

    const expense: Expense = {
      expenseName,
      amount,
      installments,
      paymentType,
      expenseType,
      comments,
    };

    if (installments && installmentInfo) {
      const { installments: installmentCount, frequence } = installmentInfo;
      if (installmentCount > 0 && frequence > 0) {
        expense.installmentInfo = { installments: installmentCount, frequence };
      }
    }

    this.expenses.push(expense);

    res.status(201).json({ message: 'Expense created successfully', expense });
  }

  public getAllExpenses(req: Request, res: Response): void {
    res.status(200).json(this.expenses);
  }
}

export default ExpenseController;
