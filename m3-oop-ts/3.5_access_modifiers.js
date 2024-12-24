{
    // access modifiers
    var BankAccount = /** @class */ (function () {
        function BankAccount(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        BankAccount.prototype.addDeposit = function (amount) {
            this.balance += amount;
        };
        BankAccount.prototype.getBalance = function () {
            return this.balance;
        };
        return BankAccount;
    }());
    var poorAccount = new BankAccount(1, "poor man", 20);
    //   using private property
    poorAccount.addDeposit(10);
    var myBalance = poorAccount.getBalance();
    console.log(myBalance);
    //
}
