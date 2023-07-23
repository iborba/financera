import { Router } from 'express';
import ExpenseController from '../controllers/ExpenseController';

const router = Router();
const expenseController = new ExpenseController();

router.post('/expenses', expenseController.createExpense.bind(expenseController));
router.get('/expenses', expenseController.getAllExpenses.bind(expenseController));

export default router;
