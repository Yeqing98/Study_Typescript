class Person {
    name = 'dell';
    getName() {
        return this.name;
    }
}

class Teacher extends Person {
    getTeacherName() {
        return 'Teacher';
    }

    getName() {
        return super.getName() + 'lee';
    }
}

const person = new Teacher()

console.log(person.getTeacherName());
console.log(person.getName());