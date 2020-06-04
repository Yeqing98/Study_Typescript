// 抽象类是将相似的类抽象剥离出来
abstract class Geom {
    width: number;
    getType() {
        return 'Geom';
    }
    // 抽象方法是将类中相似的方法抽象剥离出来
    abstract getArea(): number;
}

class Circle extends Geom {
    getArea() {
        return 123;
    }
}

class Square extends Geom {
    getArea() {
        return 123;
    }
}

class Triangle extends Geom {
    getArea() {
        return 123;
    }
}