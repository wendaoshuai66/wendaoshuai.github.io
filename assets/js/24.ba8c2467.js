(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{307:function(a,s,n){"use strict";n.r(s);var r=n(10),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ecmascript5-1-新增语法下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ecmascript5-1-新增语法下"}},[a._v("#")]),a._v(" ECMAScript5.1 新增语法下")]),a._v(" "),s("h2",{attrs:{id:"额外的数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#额外的数组"}},[a._v("#")]),a._v(" 额外的数组")]),a._v(" "),s("h3",{attrs:{id:"array-prototype-indexof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-indexof"}},[a._v("#")]),a._v(" Array.prototype.indexOf")]),a._v(" "),s("h3",{attrs:{id:"array-prototype-lastindexof"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-lastindexof"}},[a._v("#")]),a._v(" Array.prototype.lastIndexOf")]),a._v(" "),s("h3",{attrs:{id:"array-prototype-every"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-every"}},[a._v("#")]),a._v(" Array.prototype.every")]),a._v(" "),s("h3",{attrs:{id:"array-prototype-some"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-some"}},[a._v("#")]),a._v(" Array.prototype.some")]),a._v(" "),s("h3",{attrs:{id:"array-prototype-foreach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-foreach"}},[a._v("#")]),a._v(" Array.prototype.forEach")]),a._v(" "),s("h3",{attrs:{id:"array-prototype-map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-map"}},[a._v("#")]),a._v(" Array.prototype.map")]),a._v(" "),s("p",[a._v("通常情况下，map 方法中的 callback 函数只需要接受一个参数，就是正在被遍历的数组元素本身。但这并不意味着 map 只给 callback 传了一个参数。这个思维惯性可能会让我们犯一个很容易犯的错误。")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v('var result=["1", "2", "3"].map(parseInt);\n        console.log(result)//[1,NaN,NaN]\n        //  惯性思维是[1,2,3]\n\n        //map参数\n        //1.callback\n        //   回调函数有三个参数：\n        //             currentValue\n        //               callback 数组中正在处理的当前元素。\n        //              index可选\n        //                 callback 数组中正在处理的当前元素的索引。\n        //               array可选\n        //                 callback  map 方法被调用的数组。\n        //2.thisArg 执行 callback 函数时使用的this 值。\n\n        // 通常使用parseInt时,只需要传递一个参数.\n        // 但实际上,parseInt可以有两个参数.第二个参数是进制数.\n        // 可以通过语句"alert(parseInt.length)===2"来验证.\n        //解决方法\n        //方法一\n        function returnInt(ele){\n            return parseInt(ele,10)\n        }\n        console.log(["1", "2", "3"].map(returnInt))\n        //方法二\n        console.log(["1", "2", "3"].map(val=>parseInt(val)))\n        //方法三\n        console.log(["1", "2", "3"].map(Number))\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br")])]),s("p",[a._v("实现数组中的 map 方法")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("\n if(!Array.prototype.map){\n        Array.prototype.map=function(callback,oThis){\n            var A //创建一个新数组\n            ,T  //是每个个回调函数执行 callback 函数时使用的this 值\n            ,k;\n            //首先判断\n            if(this===null){\n                throw new TypeError('this is null or undefined')\n            }\n            var o = Object(this);\n            var len = o.length;\n            if(Object.prototype.toString.call(callback) != \"[object Function]\"){\n                throw new TypeError(callback+ '  is not function')\n            }\n\n            A = new Array(len);\n            //如果有oThis是oThis，没有T为undefined\n            if(oThis){\n                T = oThis\n            }\n\n            k= 0;\n            while(k<len){\n                var kValue,deepValue;\n                if(k in o){\n                    kValue = o[k]\n                    deepValue = callback.call(T,kValue,k,o)\n                    A[k] = deepValue\n                }\n                k++\n            }\n            return A;\n        }\n       }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br")])]),s("h3",{attrs:{id:"array-prototype-filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-filter"}},[a._v("#")]),a._v(" Array.prototype.filter")]),a._v(" "),s("h3",{attrs:{id:"array-prototype-reduce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-reduce"}},[a._v("#")]),a._v(" Array.prototype.reduce")]),a._v(" "),s("p",[a._v("累加对象数组里的值")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("\n\n    var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];\n    var allname=names.reduce((pre,cur)=>{\n          (cur in pre) ?pre[cur]++ :pre[cur]=1\n          return pre\n      },{})\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("实现 reduce")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("if(!Array.prototype.reduce){\n        Object.defineProperty(Array.prototype,'reduce',{\n           value:function (callback) {\n               if(this===null){\n                   throw new TypeError('this is null or undefined')\n               }\n               if(typeof callback !=='function'){\n                   throw new TypeError(callback+'is not function')\n               }\n               var o = Object(this)\n               var len = o.length;\n               var value;\n               var k = 0;\n               if(arguments>=2){\n                   value = arguments[1]\n               }else {\n                   while (k<len && !(k in o)){\n                       k++\n                   }\n                   if (k >= len) {\n                       throw new TypeError( 'Reduce of empty array ' +\n                           'with no initial value' );\n                   }\n                   value = o[k++]\n               }\n               while (k<len){\n                   if(k in o){\n                       value = callback(value,o[k],k,o);\n                   }\n                   k++\n               }\n               console.log(value)\n               return value\n           }\n       })\n      }\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br")])]),s("h3",{attrs:{id:"array-prototype-reduceright"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#array-prototype-reduceright"}},[a._v("#")]),a._v(" Array.prototype.reduceRight")])])}),[],!1,null,null,null);s.default=e.exports}}]);