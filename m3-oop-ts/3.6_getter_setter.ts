{
  // getter and setter
  class BankAccount {
    constructor(
      readonly id: number,
      public name: string,
      protected _balance: number
    ) {}

    //   public addDeposit(amount: number) {
    //     this._balance += amount;
    //   }
    //   public getBalance() {
    //     return this._balance;
    //   }

    get balance() {
      return this._balance;
    }

    set deposit(amount: number) {
      this._balance = this._balance + amount;
    }
  }

  const poorAccount = new BankAccount(1, "poor man", 20);

  //   using private property
  // poorAccount.addDeposit(10);
  // const myBalance = poorAccount.getBalance();

  poorAccount.deposit = 100;

  const myBalance = poorAccount.balance;
  console.log(myBalance);

  //
}
