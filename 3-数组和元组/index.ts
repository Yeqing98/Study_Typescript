// 定义数组中只能是number类型
const Numarr: number[] = [1, 2, 3];
// 定义数组中只能是string类型
const Stringarr: string[] = ['a', 'b', 'c'];
// 定义数组中只能是undefined类型
const undefinedArr: undefined[] = [undefined];
// 定义数组中只能是string或者number类型
const arr: (number | string) [] = [1, 'a', 3];
// type alias类型别名
type User = {name: string, age: number};

const objectarr: User[] = [
    {
        name: 'tony',
        age: 22
    }
]
// 对象里面的内容一致，typescript也会默认，并不强行要求是new一个对象。
class Teacher {
    name: string;
    age: number;
}

const objectarr2: Teacher[] = [
    {
        name: 'tony',
        age: 22
    }
]



// 元组 tuple
const teacherInfo: [string, string, number] = ['Dell', 'male', 18];

const teacherList: [string, string, number][] = [
    ['Dell', 'male', 18],
    ['Dell', 'male', 18],
    ['Dell', 'male', 18]
]