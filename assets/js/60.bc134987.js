(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{447:function(a,s,t){"use strict";t.r(s);var n=t(15),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"jvm-和-java-特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-和-java-特性"}},[a._v("#")]),a._v(" JVM 和 Java 特性")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#1-jvm-%E5%A6%82%E4%BD%95%E6%89%A7%E8%A1%8C%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8"}},[a._v("1. JVM 如何执行方法调用")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#11-%E9%9D%99%E6%80%81%E7%BB%91%E5%AE%9A%E5%92%8C%E5%8A%A8%E6%80%81%E7%BB%91%E5%AE%9A"}},[a._v("1.1. 静态绑定和动态绑定")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#12-%E8%B0%83%E7%94%A8%E6%8C%87%E4%BB%A4%E7%9A%84%E7%AC%A6%E5%8F%B7%E5%BC%95%E7%94%A8"}},[a._v("1.2. 调用指令的符号引用")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#13-%E8%99%9A%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8"}},[a._v("1.3. 虚方法调用")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#14-%E6%96%B9%E6%B3%95%E8%A1%A8"}},[a._v("1.4. 方法表")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#15-%E5%86%85%E8%81%94%E7%BC%93%E5%AD%98"}},[a._v("1.5. 内联缓存")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#2-jvm-%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86%E5%BC%82%E5%B8%B8"}},[a._v("2. JVM 如何处理异常")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#21-jvm-%E5%A6%82%E4%BD%95%E6%8D%95%E8%8E%B7%E5%BC%82%E5%B8%B8"}},[a._v("2.1. JVM 如何捕获异常")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#22-java-7-%E7%9A%84-supressed-%E5%BC%82%E5%B8%B8%E4%BB%A5%E5%8F%8A%E8%AF%AD%E6%B3%95%E7%B3%96"}},[a._v("2.2. Java 7 的 Supressed 异常以及语法糖")])])])]),a._v(" "),t("li",[t("a",{attrs:{href:"#3-jvm-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E5%8F%8D%E5%B0%84"}},[a._v("3. JVM 如何实现反射")])]),a._v(" "),t("li",[t("a",{attrs:{href:"#4-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[a._v("4. 参考资料")])])]),a._v(" "),t("h2",{attrs:{id:"_1-jvm-如何执行方法调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-jvm-如何执行方法调用"}},[a._v("#")]),a._v(" 1. JVM 如何执行方法调用")]),a._v(" "),t("p",[a._v("在 Java 程序里，如果同一个类中出现多个名字相同，并且参数类型相同的方法，那么它无法通过编译。如果我们想要在同一个类中定义名字相同的方法，那么它们的参数类型必须不同。这些方法之间的关系，我们称之为重载。")]),a._v(" "),t("p",[a._v("重载的方法在编译过程中即可完成识别。具体到每一个方法调用，Java 编译器会根据所传入参数的声明类型（注意与实际类型区分）来选取重载方法。选取的过程共分为三个阶段：")]),a._v(" "),t("ol",[t("li",[a._v("在不考虑对基本类型自动装拆箱（auto-boxing，auto-unboxing），以及可变长参数的情况下选取重载方法；")]),a._v(" "),t("li",[a._v("如果在第 1 个阶段中没有找到适配的方法，那么在允许自动装拆箱，但不允许可变长参数的情况下选取重载方法；")]),a._v(" "),t("li",[a._v("如果在第 2 个阶段中没有找到适配的方法，那么在允许自动装拆箱以及可变长参数的情况下选取重载方法。")])]),a._v(" "),t("h3",{attrs:{id:"_1-1-静态绑定和动态绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-静态绑定和动态绑定"}},[a._v("#")]),a._v(" 1.1. 静态绑定和动态绑定")]),a._v(" "),t("p",[a._v("Java 虚拟机识别方法的关键在于类名、方法名以及方法描述符（method descriptor）。方法描述符，它是由方法的参数类型以及返回类型所构成。")]),a._v(" "),t("p",[a._v("Java 虚拟机中关于方法重写的判定同样基于方法描述符。也就是说，如果子类定义了与父类中非私有、非静态方法同名的方法，那么只有当这两个方法的参数类型以及返回类型一致，Java 虚拟机才会判定为重写。")]),a._v(" "),t("p",[a._v("由于对重载方法的区分在编译阶段已经完成，我们可以认为 Java 虚拟机不存在重载这一概念。因此，在某些文章中，重载也被称为"),t("strong",[a._v("静态绑定（static binding）")]),a._v("，或者编译时多态（compile-time polymorphism）；而重写则被称为"),t("strong",[a._v("动态绑定（dynamic binding）")]),a._v("。")]),a._v(" "),t("p",[a._v("确切地说，Java 虚拟机中的静态绑定指的是在解析时便能够直接识别目标方法的情况，而动态绑定则指的是需要在运行过程中根据调用者的动态类型来识别目标方法的情况。")]),a._v(" "),t("p",[a._v("具体来说，Java 字节码中与调用相关的指令共有五种。")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("invokestatic")]),a._v("：用于调用静态方法。")]),a._v(" "),t("li",[t("code",[a._v("invokespecial")]),a._v("：用于调用私有实例方法、构造器，以及使用 "),t("code",[a._v("super")]),a._v(" 关键字调用父类的实例方法或构造器，和所实现接口的默认方法。")]),a._v(" "),t("li",[t("code",[a._v("invokevirtual")]),a._v("：用于调用非私有实例方法。")]),a._v(" "),t("li",[t("code",[a._v("invokeinterface")]),a._v("：用于调用接口方法。")]),a._v(" "),t("li",[t("code",[a._v("invokedynamic")]),a._v("：用于调用动态方法。")])]),a._v(" "),t("p",[a._v("【示例】")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("interface")]),a._v(" 客户 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isVIP")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" 商户 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" 折后价格 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" 原价"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 客户 某客户"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" 原价 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.8d")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" 奸商 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("extends")]),a._v(" 商户 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" 折后价格 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" 原价"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 客户 某客户"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("某客户"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("isVIP")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// invokeinterface")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" 原价 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" 价格歧视 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// invokestatic")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("else")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" 折后价格 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("原价"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" 某客户"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// invokespecial")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("double")]),a._v(" 价格歧视 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 咱们的杀熟算法太粗暴了，应该将客户城市作为随机数生成器的种子。")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Random")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("                          "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// invokespecial")]),a._v("\n           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nextDouble")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("                         "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// invokevirtual")]),a._v("\n           "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.8d")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h3",{attrs:{id:"_1-2-调用指令的符号引用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-调用指令的符号引用"}},[a._v("#")]),a._v(" 1.2. 调用指令的符号引用")]),a._v(" "),t("p",[a._v("在编译过程中，我们并不知道目标方法的具体内存地址。因此，Java 编译器会暂时用符号引用来表示该目标方法。这一符号引用包括目标方法所在的类或接口的名字，以及目标方法的方法名和方法描述符。")]),a._v(" "),t("p",[a._v("符号引用存储在 class 文件的常量池之中。根据目标方法是否为接口方法，这些引用可分为接口符号引用和非接口符号引用。")]),a._v(" "),t("p",[a._v("对于可以静态绑定的方法调用而言，实际引用是一个指向方法的指针。对于需要动态绑定的方法调用而言，实际引用则是一个方法表的索引。")]),a._v(" "),t("h3",{attrs:{id:"_1-3-虚方法调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-虚方法调用"}},[a._v("#")]),a._v(" 1.3. 虚方法调用")]),a._v(" "),t("p",[a._v("Java 里所有非私有实例方法调用都会被编译成 invokevirtual 指令，而接口方法调用都会被编译成 invokeinterface 指令。这两种指令，均属于 Java 虚拟机中的虚方法调用。")]),a._v(" "),t("p",[a._v("在 Java 虚拟机中，静态绑定包括用于调用静态方法的 invokestatic 指令，和用于调用构造器、私有实例方法以及超类非私有实例方法的 invokespecial 指令。如果虚方法调用指向一个标记为 final 的方法，那么 Java 虚拟机也可以静态绑定该虚方法调用的目标方法。")]),a._v(" "),t("h3",{attrs:{id:"_1-4-方法表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-方法表"}},[a._v("#")]),a._v(" 1.4. 方法表")]),a._v(" "),t("p",[a._v("方法表是 Java 虚拟机实现动态绑定的关键所在。")]),a._v(" "),t("p",[a._v("方法表本质上是一个数组，每个数组元素指向一个当前类及其祖先类中非私有的实例方法。")]),a._v(" "),t("p",[a._v("这些方法可能是具体的、可执行的方法，也可能是没有相应字节码的抽象方法。方法表满足两个特质：其一，子类方法表中包含父类方法表中的所有方法；其二，子类方法在方法表中的索引值，与它所重写的父类方法的索引值相同。")]),a._v(" "),t("p",[a._v("在执行过程中，Java 虚拟机将获取调用者的实际类型，并在该实际类型的虚方法表中，根据索引值获得目标方法。这个过程便是动态绑定。")]),a._v(" "),t("h3",{attrs:{id:"_1-5-内联缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-内联缓存"}},[a._v("#")]),a._v(" 1.5. 内联缓存")]),a._v(" "),t("p",[a._v("内联缓存是一种加快动态绑定的优化技术。它能够缓存虚方法调用中调用者的动态类型，以及该类型所对应的目标方法。在之后的执行过程中，如果碰到已缓存的类型，内联缓存便会直接调用该类型所对应的目标方法。如果没有碰到已缓存的类型，内联缓存则会退化至使用基于方法表的动态绑定。")]),a._v(" "),t("h2",{attrs:{id:"_2-jvm-如何处理异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-jvm-如何处理异常"}},[a._v("#")]),a._v(" 2. JVM 如何处理异常")]),a._v(" "),t("h3",{attrs:{id:"_2-1-jvm-如何捕获异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-jvm-如何捕获异常"}},[a._v("#")]),a._v(" 2.1. JVM 如何捕获异常")]),a._v(" "),t("p",[a._v("在编译生成的字节码中，每个方法都附带一个异常表。异常表中的每一个条目代表一个异常处理器，并且由 from 指针、to 指针、target 指针以及所捕获的异常类型构成。这些指针的值是字节码索引（bytecode index，bci），用以定位字节码。")]),a._v(" "),t("p",[a._v("其中，from 指针和 to 指针标示了该异常处理器所监控的范围，例如 try 代码块所覆盖的范围。target 指针则指向异常处理器的起始位置，例如 catch 代码块的起始位置。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mayThrowException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("catch")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("printStackTrace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 对应的 Java 字节码")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Code")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" invokestatic mayThrowException"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("V")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("goto")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" astore_1\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" aload_1\n    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" invokevirtual "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("Exception")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("printStackTrace\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" table"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n    from  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("to")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("target")]),a._v(" type\n      "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Class")]),a._v(" java"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("lang"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 异常表条目")]),a._v("\n")])])]),t("p",[a._v("说明：编译过后，该方法的异常表拥有一个条目。其 from 指针和 to 指针分别为 0 和 3，代表它的监控范围从索引为 0 的字节码开始，到索引为 3 的字节码结束（不包括 3）。该条目的 target 指针是 6，代表这个异常处理器从索引为 6 的字节码开始。条目的最后一列，代表该异常处理器所捕获的异常类型正是 Exception。")]),a._v(" "),t("p",[a._v("当程序触发异常时，Java 虚拟机会从上至下遍历异常表中的所有条目。当触发异常的字节码的索引值在某个异常表条目的监控范围内，Java 虚拟机会判断所抛出的异常和该条目想要捕获的异常是否匹配。如果匹配，Java 虚拟机会将控制流转移至该条目 target 指针指向的字节码。")]),a._v(" "),t("p",[a._v("如果遍历完所有异常表条目，Java 虚拟机仍未匹配到异常处理器，那么它会弹出当前方法对应的 Java 栈帧，并且在调用者（caller）中重复上述操作。在最坏情况下，Java 虚拟机需要遍历当前线程 Java 栈上所有方法的异常表。")]),a._v(" "),t("h3",{attrs:{id:"_2-2-java-7-的-supressed-异常以及语法糖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-java-7-的-supressed-异常以及语法糖"}},[a._v("#")]),a._v(" 2.2. Java 7 的 Supressed 异常以及语法糖")]),a._v(" "),t("p",[a._v("如果 catch 代码块捕获了异常，并且触发了另一个异常，那么 finally 捕获并且重抛的异常是哪个呢？答案是后者。也就是说原本的异常便会被忽略掉，这对于代码调试来说十分不利。")]),a._v(" "),t("p",[a._v("Java 7 引入了 Supressed 异常来解决这个问题。这个新特性允许开发人员将一个异常附于另一个异常之上。因此，抛出的异常可以附带多个异常的信息。")]),a._v(" "),t("p",[a._v("Java 7 专门构造了一个名为 try-with-resources 的语法糖，在字节码层面自动使用 Supressed 异常。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AutoCloseable")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("final")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throw")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RuntimeException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" foo0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Foo0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// try-with-resources")]),a._v("\n         "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" foo1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Foo1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n         "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),a._v(" foo2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Foo2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("throw")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RuntimeException")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Initial"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 运行结果：")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Exception")]),a._v(" in thread "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"main"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("RuntimeException")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Initial")]),a._v("\n        at "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("18")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Suppressed")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("RuntimeException")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo2")]),a._v("\n                at "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("13")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n                at "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Suppressed")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("RuntimeException")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo1")]),a._v("\n                at "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("13")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n                at "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Suppressed")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("lang"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),a._v("RuntimeException")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo0")]),a._v("\n                at "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("13")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n                at "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("19")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("除了 try-with-resources 语法糖之外，Java 7 还支持在同一 catch 代码块中捕获多种异常。实际实现非常简单，生成多个异常表条目即可。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 在同一 catch 代码块中捕获多种异常\ntry {\n  ...\n} catch (SomeException | OtherException e) {\n  ...\n}\n")])])]),t("h2",{attrs:{id:"_3-jvm-如何实现反射"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-jvm-如何实现反射"}},[a._v("#")]),a._v(" 3. JVM 如何实现反射")]),a._v(" "),t("h2",{attrs:{id:"_4-参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考资料"}},[a._v("#")]),a._v(" 4. 参考资料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《深入理解 Java 虚拟机》"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://time.geekbang.org/column/intro/100010301",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入拆解 Java 虚拟机"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);