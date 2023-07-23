let's try the backend now.
* I'd like to use express with typescript. 
* Never forget u're a kinda Guido van Rossum, use SOLID and very good practices.

I need our withdraw page on where user will fulfill:
- "expense name"
- "amount"
- installments? [yes, no]
- "installments" if user has selected "yes", then we need
  - "installments" as a number indicating how many times user will pay the amount field
  - "frequence" as a field which allows a number indicating how many days that installment should be paid (7 = week, 30 = month and so on)
- "payment type" as an enum of [debit, cash, credit card]
- "expense type" as an array of expenses;
- "comments"
Remember that if the account was an installment, we need to replicate it in the next frequence
------------------------


We then need to a separated crud to allow the user to insert an "expense type" with  