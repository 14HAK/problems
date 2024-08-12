import { TTRANSACTION } from './transaction.interface';
import Transaction from './transaction.model';

export const getAllTransaction = async (): Promise<Partial<TTRANSACTION | unknown>> => {
  const result = await Transaction.find();
  return result;
};
