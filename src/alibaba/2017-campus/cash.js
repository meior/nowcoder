class Cash {
  constructor(money) {
    this.money = money;
  }

  add(cash) {
    return new Cash(this.money + cash.money);
  }

  static add(cash1, cash2) {
    return new Cash(cash1 + cash2);
  }

  valueOf() {
    return this.money;
  }

  toString() {
    return `${Math.floor(this.money / 100)}元${Math.floor(this.money / 10) % 10}角${this.money % 10}分`;
  }
}

const cash1 = new Cash(105);
const cash2 = new Cash(66);

const cash3 = cash1.add(cash2);
const cash4 = Cash.add(cash1, cash2);
const cash5 = new Cash(cash1 + cash2);
console.log(`${cash3}`, `${cash4}`, `${cash5}`);
