## interface
interface和type（类型别名）类似，但是有一点差异，平时基本上都使用interface，type很少使用。

定义接口必有属性时：直接定义就可以

定义接口非必要属性时：在属性后面加?

当不知道会有多少属性时：[propName: string]: any;

定义接口方法时：say(): string;

定义函数时： interface SayHi {
                (word: string): string
            }

接口继承接口时：interface Teacher extends Person

接口规范类时：class User implements Person