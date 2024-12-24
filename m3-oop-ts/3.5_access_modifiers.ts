{
  // access modifiers
  class BankAccount {
    constructor(
      readonly id: number,
      public name: string,
      protected _balance: number
    ) {}

    public addDeposit(amount: number) {
      this._balance += amount;
    }
    public getBalance() {
      return this._balance;
    }
  }

  class StudentAccount extends BankAccount {
    test(){
        this._balance
    }
  }


  const poorAccount = new BankAccount(1, "poor man", 20);
  //   using private property
  poorAccount.addDeposit(10);
  const myBalance = poorAccount.getBalance();
  console.log(myBalance);

  //
}
