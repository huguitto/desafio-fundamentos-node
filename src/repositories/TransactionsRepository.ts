import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO

    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    let incomeTotal = 0;
    let outcomeTotal = 0;
    let total = 0;

    const incomesAll = this.transactions.filter(
      transaction => transaction.type === 'income',
    );
    const outcomesAll = this.transactions.filter(
      transaction => transaction.type === 'outcome',
    );

    incomesAll.map(item => {
      incomeTotal = incomeTotal + item.value;
    });

    outcomesAll.map(item => {
      outcomeTotal = outcomeTotal + item.value;
    });

    total = incomeTotal - outcomeTotal;

    const balance = {
      income: incomeTotal,
      outcome: outcomeTotal,
      total,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
