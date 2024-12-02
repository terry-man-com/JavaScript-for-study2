// Q1. 1から１００までの数字を表示する。
for (let i = 1; i <= 100; i++) {
  console.log(i);
}
// Q2. 配列内の最大値を見つける
const findMax = (arr) => {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
};

findMax([12, 6, 25, 8, 17]);
// Q3. クラスとインスタンス
class Person {
  constructor(name, age) {
    this.name = name;
    this.age  = age;
  }
  sayHi() {
    console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
}

const person = new Person("John", 30);
person.sayHi();
