## 类的概念
类有三个访问类型：private, protected, public
public 允许在类的内外被调用
private 允许在类内部使用
protected 允许在类内及继承的子类中使用

construct的使用：
construct是类中的构造器，当父类中使用到了construct，那么子类中必须也需要使用到construct，并且在construct中使用super()

super的使用：
子类中super代表父类，当父类有construct，子类必须在construct中使用super()
在子类中也可以使用 super.函数名 来调用父类中的方法。