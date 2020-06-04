// private, protected, public 访问类型
// public 允许我在类的内外被调用
// private 允许在类内使用
// protected 允许在类内及继承的子类中使用
class Body {
    //类的内部
    private name: string;
    protected age: number;
    public sayHi() {
        this.name;
        console.log('hi')
    }
}

class People extends Body {
    public sayBye() {
        this.age
        //this.name只能在类内使用
    }
}

//类的外部

const body = new Body();
// body.name = 'dell';  只能在类内使用
// console.log(body.name);  只能在类内使用
body.sayHi();


class A {
    constructor(public name: string) {

    }
}

class B extends A {
    constructor(public name: string, public age: number) {
        super(name)
    }
}

const b = new B('wanglei', 22)

console.log(b.name, b.age)