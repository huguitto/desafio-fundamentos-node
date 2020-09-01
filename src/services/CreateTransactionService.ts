import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import { response } from 'express';

interface RequestDTO {
  title: string;

  value: number;

  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDTO): Transaction {
    // TODO

    const { total } = this.transactionsRepository.getBalance();

    //TRATAR ERROS
    if (type === 'outcome' && total < value) {
      throw new Error('You do not enough balance!');
    }

    //o create faz o push
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });
    return transaction;
  }
}

export default CreateTransactionService;
