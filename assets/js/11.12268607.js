(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{254:function(s,n,a){"use strict";a.r(n);var t=a(28),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"c-语言的基本知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-语言的基本知识"}},[s._v("#")]),s._v(" c 语言的基本知识")]),s._v(" "),a("ul",[a("li",[s._v("要学习写什么？")])]),s._v(" "),a("blockquote",[a("p",[s._v("c 用指针管理内存，内存管理和数据解构算法都离不开指针")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("内存管理")])]),s._v(" "),a("li",[a("p",[s._v("算法/数据结构")])])]),s._v(" "),a("h4",{attrs:{id:"语言发展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语言发展"}},[s._v("#")]),s._v(" 语言发展")]),s._v(" "),a("p",[s._v("机器语言 -》 汇编语言 -》 FORTRAN 语言、Pascal语言（Delphi）、Basic语言（Visual Basic）、 C语言（C++ 、Java）")]),s._v(" "),a("blockquote",[a("p",[s._v("c 最早始是编写Unix内核的，现在主要用于做底层开发和嵌入式等")])]),s._v(" "),a("h4",{attrs:{id:"c-与-javascript-的异同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-与-javascript-的异同"}},[s._v("#")]),s._v(" c 与 JavaScript 的异同")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("c")]),s._v(" "),a("th",[s._v("js")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("c语言是编译型语言")]),s._v(" "),a("td",[s._v("js 是解释性语言")])]),s._v(" "),a("tr",[a("td",[s._v("c语言要借助编译器转换成可执行程序")]),s._v(" "),a("td",[s._v("js需要借助解释引擎运行")])])])]),s._v(" "),a("h4",{attrs:{id:"配置环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置环境"}},[s._v("#")]),s._v(" 配置环境")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Windows")]),s._v(" "),a("th",[s._v("Linux/unix")]),s._v(" "),a("th",[s._v("Mac")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("visual C++/MingWin")]),s._v(" "),a("td",[s._v("gcc/g++")]),s._v(" "),a("td",[s._v("Xcode/gcc")])])])]),s._v(" "),a("h3",{attrs:{id:"编译软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译软件"}},[s._v("#")]),s._v(" 编译软件")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx 为例"),a("OutboundLink")],1),s._v(",复制下载链接(pgp格式)")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" temp\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" temp  \n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -c https://nginx.org/download/nginx-1.16.1.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zvxf nginx-1.16.1.tar.gz\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" nginx-1.16.1   // 源代码都在这里的 src\n\n// 当前目录下有configure\n\n./configure    // 执行这个检查系统配置是否完善\n\n// 如果执行之后当前目录出现 Makefile 这个文件，就可以执行编译了\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("       // 开始编译\n\n// 如果编译出错，需要重新编译 执行 "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" clean "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(", 删除之前的编译文件\n\n// 编译后会在当前目录生成一个objs 文件夹，最终的可执行文件就在这个文件夹下的 nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("    // 执行安装，之后文件就会被安装到指定位置了\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"敲一个hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#敲一个hello-world"}},[s._v("#")]),s._v(" 敲一个hello world")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n// 安装 gcc， 如果没有  ， centOs下\n\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc\n\n// 编译c++ 需要\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc-c++\n\n// ubuntu 下安装\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc\n\n// 编译c++ 安装\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" g++\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("写一个c文件 hello.c")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* \n    引入头文件，头文件里定义了一些必要的库  \n    stdio   输入（标准输入--键盘）输出（标准输出--终端）库  \n*/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<stdio.h>")]),s._v(" ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n    main 入口函数,程序在这开始执行，必须是main\n\n    也可以写成 \n    void main(){}\n\n    int main(int argc, char const *argv[] ){\n    int argc  // 参数的个数\n    char const *argv[]  字符串数组\n\n    \\n  换行\n    \\r  回车\n\n*/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("printf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world! \\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("执行编译")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\ngcc hello.c -o hello   // -o 后面接输出文件的名字\n\n// 执行,即可打印\n./hello    \n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);