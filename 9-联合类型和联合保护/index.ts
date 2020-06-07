interface Bird {
    fly: boolean;
    sing: () => {}
}

interface Dog {
    fly: boolean;
    bark: () => {}
}

// 类型断言的方式来做类型保护
function trainAnimal(animal: Bird | Dog) {
    if (animal.fly) {
        (animal as Bird).sing();
    } else {
        (animal as Dog).bark();
    }
}

// in 语法来做类型保护
function trainAnimalAnother(animal: Bird | Dog) {
    if ('sing' in animal) {
        animal.sing();
    } else {
        animal.bark();
    }
}

// 通过typeof方法来做类型保护
function add(first: string | number, second: string | number) {
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`
    } else {
        return first + second
    }
}

class NumberObj {
    count: number
}

// 通过instanceof方法来做类型保护，前提是需要定义类，而不是interface
function addAnother(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    } else {
        return 0
    }
}