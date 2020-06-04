// 在类中，通过get和set方法来获取和修改私有变量
class Person {
    constructor(private _name: string) {}
    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name
    }
}

const person = new Person('wanglei');
console.log(person.name);
person.name = 'tony';
console.log(person.name);