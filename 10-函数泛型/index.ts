// 泛型 generic 泛指的类型

function join<T, P>(first: T, second: P) {
    return `${first}${second}`;
}

function map<T>(first: T[]) {
    return first;
}

join<number, string>(1, '1')
map<string>(['123'])