(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{229:function(s,n,a){"use strict";a.r(n);var e=a(28),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"mysql-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-常用命令"}},[s._v("#")]),s._v(" mysql 常用命令")]),s._v(" "),a("ol",[a("li",[s._v("MySQL workbench 图形化的MySQL管理工具")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("1.1. 下载地址https://dev.mysql.com/downloads/workbench/")])]),s._v(" "),a("li",[a("p",[s._v("1.2. 创建表的时候 要选择字符集 utf-8")])])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("MySQL常用命令")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 连接数据库 \nmysql -uroot -p\n\n// 查看所有的数据库 ,进入MySQL后，输入的每个命令都要以 分号 结尾\nshow databases;\n\n//新建一个数据库\nCREATE DATABASE 库名(不能已经存在) CHARSET=UTF8;\n\n// 删除某个数据库\ndrop database [if exists] databaseName;\n\n//查看数据库字符编码\nshow create database test1;\n\n// 进入 指定数据库\nuse phplesson;\n\n// 显示所有的表\nshow tables;\n\n// 新建表 一定要用反引号\ncreate table `phplesson`.`t_study` (\n    `id` int not null auto_increment ,\n    `name` varchar(40) not null,\n    `birth` date not null,\n    `gender` char(1) not null,\n    primary key (`id`) \n);\n\n删除表\ndrop table tableName;\n\n//删除表中的所有数据，但是表结构依然存在\ndelete from tableName;\n\n\n//显示表结构\ndescribe tableName; (或者简写: desc tableName;)\n\n\n// 查看服务器版本和当前日期\nselect version(),current_date;\n\nselect version();\n\nselect now();\n\n// 把mysql作为一个简单的计算器\nselect pi();\n\nselect pi()*10;\n\n// 退出MYSQL命令: exit (回车)\n\n// 查询所有用户\nSELECT User, Host, Password FROM mysql.user;\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);