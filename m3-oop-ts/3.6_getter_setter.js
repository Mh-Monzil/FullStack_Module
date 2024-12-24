{
    // getter and setter
    var BankAccount = /** @class */ (function () {
        function BankAccount(id, name, _balance) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }
        Object.defineProperty(BankAccount.prototype, "balance", {
            //   public addDeposit(amount: number) {
            //     this._balance += amount;
            //   }
            //   public getBalance() {
            //     return this._balance;
            //   }
            get: function () {
                return this._balance;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BankAccount.prototype, "deposit", {
            set: function (amount) {
                this._balance = this._balance + amount;
            },
            enumerable: false,
            configurable: true
        });
        return BankAccount;
    }());
    var poorAccount = new BankAccount(1, "poor man", 20);
    //   using private property
    // poorAccount.addDeposit(10);
    // const myBalance = poorAccount.getBalance();
    poorAccount.deposit = 100;
    var myBalance = poorAccount.balance;
    console.log(myBalance);
    //
}
