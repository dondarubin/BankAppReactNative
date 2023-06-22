export type TypeCurrency = 'RUB' | 'USD'
export type TypeName = 'SberCard Debit' | 'SberCard Travel'


export interface IAccount {
  _id: string,
  userId: string,
  balance: number,
  cardNumber: string,
  currency: TypeCurrency,
  name: TypeName
}