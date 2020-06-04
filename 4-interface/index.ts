interface Person {
    //readonly name: string   只可读不可写
    name: string;
    age?: number; //可有可无
    [propName: string]: any; //可以添加额外的属性
    say(): string; //接口也可以定义方法
}

// Teacher接口继承Person接口
interface Teacher extends Person {
    teacher(): string
}

//接口定义函数
interface SayHi {
    (word: string): string
}

const getPersonName = (person: Person): void => {
    console.log(person.name);
}

const setPersonName = (person: Teacher, name: string): void => {
    person.name = name;
}

const person = {
    name: 'dell',
    sex: '男',
    say() {
        return 'say hello';
    },
    teacher() {
        return 'teacher';
    }
}

getPersonName(person);
setPersonName(person, 'lee');

//接口规范类
class User implements Person {
    name = 'dell';
    say() {
        return 'hello';
    }
}

const say: SayHi = (word) => {
    return word;
}
