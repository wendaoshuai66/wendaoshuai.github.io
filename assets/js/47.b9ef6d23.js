(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{330:function(s,n,a){"use strict";a.r(n);var t=a(10),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"css-简介及实用技巧"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-简介及实用技巧"}},[s._v("#")]),s._v(" CSS 简介及实用技巧")]),s._v(" "),n("h2",{attrs:{id:"css-设计理念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-设计理念"}},[s._v("#")]),s._v(" CSS 设计理念")]),s._v(" "),n("p",[s._v("CSS2.1 作为 CSS2 和 CSS1 的后序版本，基于一下一组设计理念：")]),s._v(" "),n("ul",[n("li",[s._v("向前和向后兼容。CSS2.1 的用户代理能够理解 CSS1 的样式表。 CSS1 的用户代理能够读取 CSS2.1 的样式表，并且丢弃他们不能理解的部分。同时，对于不支持 CSS 的用户代理可以显示样式增强的文档。当然通过 CSS 增强的样式将不被渲染，但所有的内容可以被表现。")]),s._v(" "),n("li",[s._v("作为结构化文档的补充。样式表补充结构化文档（例如，HTML 和 XML 应用程序），为标记文本提供样式信息。样式表应该非常容易修改，并对标记的影像甚微或没有。")]),s._v(" "),n("li",[s._v("供应商，平台和设备无关。样式表使文档保持供应商，平台和设备无关。样式表本身也是供应商和平台无关的，但 CSS2.1 允许你为一组设备指定一个样式表（例如，打印机）。")]),s._v(" "),n("li",[s._v("可维护性。通过在文档中指向样式表，网站管理员能简化站点的维护和保持整个站点的一致外观和感觉。例如，如果组织的背景色发生改变，仅需更改一个文件。")]),s._v(" "),n("li",[s._v("简单。CSS 是一门简单的样式语言，是对人类读写友好的。CSS 的属性保持最大程度上的相互独立，一般实现一个效果只有一种方法。")]),s._v(" "),n("li",[s._v("网络性能。CSS 为内容的呈现方式提供了紧凑的编码。图片或音频文件常被作者用来实现某种特定的渲染效果，样式表和其比起来体积要小的多。同时，减少网络链接的次数，进一步提高网络性能。")]),s._v(" "),n("li",[s._v("灵活性。有几种方法可以将 CSS 应用到内容。关键特征是不同位置的样式信息能够层叠，包括默认（用户代理）样式表，用户样式表，链接样式表，内嵌样式，和元素属性中的样式信息。渴求的某些渲染效果和设备无关相冲突，但 CSS2.1")]),s._v(" "),n("li",[s._v("丰富的。为作者提供一组丰富的渲染效果，增加网站作为表达媒介的丰富性。设计师们已经对桌面版和幻灯片应用中的常见功能渴望许久。但 CSS2.1 为满足设计师的要求，向前迈了一大步。")]),s._v(" "),n("li",[s._v("可选的语言绑定。规范中描述的一组 CSS 属性使视觉和听觉格式化模型表现一致。其格式化模型可以通过 CSS 语言访问，但也可以绑定到其他语言。例如，在 JavaScript 程序中可以动态改变某个元素的‘color’属性值。")]),s._v(" "),n("li",[s._v("可访问性。一些 CSS 功能将使网络更方便残障用户：\n"),n("ul",[n("li",[s._v("控制字体外观属性允许作者消除不可访问的文图图片。")]),s._v(" "),n("li",[s._v("位置属性允许作者消除强制布局的标记技巧（例如，不可见图片）。")]),s._v(" "),n("li",[s._v("!improtan 规则的意义在于有特别演示要求的用户可以覆盖作者的样式表。")]),s._v(" "),n("li",[s._v("所有属性的‘inherit’值用来提升层叠的通用性，和更容易生成一致的风格。")]),s._v(" "),n("li",[s._v("改进媒体支持，包括媒体分组和 braille，embossed，和 tty 媒体类型，允许用户或作者为这些设备定制页面。")])])])]),s._v(" "),n("h2",{attrs:{id:"css-选择器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器"}},[s._v("#")]),s._v(" CSS 选择器")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://wendaoshuai66.github.io/study/note/images/css%E9%80%89%E6%8B%A9%E5%99%A8.svg",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/css%E9%80%89%E6%8B%A9%E5%99%A8.svg",alt:"css选择器"}}),n("OutboundLink")],1)]),s._v(" "),n("h2",{attrs:{id:"圣杯布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#圣杯布局"}},[s._v("#")]),s._v(" 圣杯布局")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://yanhaijing.com/css/2018/01/17/horizontal-vertical-center/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CSS 实现水平垂直居中的 1010 种方式 "),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v(' <div class="contant">\n     \x3c!--        //类似京东商城banner，中间需要提前加载--\x3e\n     <div class="middle">中间</div>\n     <div class="left">\n         <p>你好</p>\n         <p>您好</p>\n     </div>\n     <div class="right">右边</div>\n </div>\n  <style>\n        *{\n            margin: 0;\n            padding: 0;\n        }\n        div{\n            text-align: center;\n        }\n        .contant{\n            padding: 0 200px 0 150px;\n            overflow: hidden;\n        }\n        .middle{\n            float: left;\n            background: pink;\n            width: 100%;\n        }\n        .left{\n            float: left;\n            width: 150px;\n            margin-left: -100%;\n            background: yellow;\n            position: relative;\n            left: -150px;\n        }\n        .right{\n            float: left;\n            width: 200px;\n            margin-left: -200px;\n            background: blue;\n            position: relative;\n            left: 200px;\n        }\n        .left ,.middle ,.right{\n            padding-bottom: 9999px;\n            margin-bottom: -9999px;\n        }\n    </style>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])]),n("h2",{attrs:{id:"双飞翼布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#双飞翼布局"}},[s._v("#")]),s._v(" 双飞翼布局")]),s._v(" "),n("p",[s._v("margin 不改变盒子布局")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('<div class="contant">\n    <div class="middle">\n        <div class="inner">\n            中间\n        </div>\n    </div>\n    <div class="left">\n        左边\n    </div>\n    <div class="right">\n        右边\n    </div>\n</div>\n    <style>\n        *{\n            margin:0;\n            padding: 0;\n        }\n        .contant{\n            overflow: hidden;\n        }\n        .middle{\n            width: 100%;\n            float: left;\n            background: yellow;\n        }\n        .inner{\n            margin-left: 200px;\n            margin-right: 150px;\n        }\n        .left{\n            float: left;\n            margin-left: -100%;\n            width: 200px;\n            background: red;\n        }\n        .right{\n            width: 150px;\n            background: blue;\n            float: left;\n            margin-left: -150px;\n        }\n        .left,.middle,.right{\n            padding-bottom:9999px;\n            margin-bottom:-9999px;\n        }\n    </style>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br")])]),n("h2",{attrs:{id:"flex-布局"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#flex-布局"}},[s._v("#")]),s._v(" flex 布局")]),s._v(" "),n("p",[s._v("在 flex 之前，传统布局有流式布局（就是默认的方式），绝对定位布局，弹性布局（em），和浮动布局，其中浮动布局并不是为布局而设计的，使用起来略显繁琐")]),s._v(" "),n("p",[s._v("2009 年，对前端来说是不平凡的一年，html5 定稿，es5.1 发布，flex 应运而生，天生响应式，生而为布局，使用及其简单")]),s._v(" "),n("h3",{attrs:{id:"容器的属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器的属性"}},[s._v("#")]),s._v(" 容器的属性")]),s._v(" "),n("p",[s._v("容器属性包括：")]),s._v(" "),n("ul",[n("li",[s._v("display")]),s._v(" "),n("li",[s._v("flex-direction")]),s._v(" "),n("li",[s._v("flex-wrap")]),s._v(" "),n("li",[s._v("flex-flow")]),s._v(" "),n("li",[s._v("justify-content")]),s._v(" "),n("li",[s._v("align-items")]),s._v(" "),n("li",[s._v("align-content")])]),s._v(" "),n("p",[s._v("display")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("标准版")]),s._v(" "),n("th",[s._v("09 版")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("display: flex")]),s._v(" "),n("td",[s._v("display: box")])]),s._v(" "),n("tr",[n("td",[s._v("display: inline-flex")]),s._v(" "),n("td",[s._v("display: inline-box")])])])]),s._v(" "),n("p",[s._v("flex-direction")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("标准版")]),s._v(" "),n("th",[s._v("09 版")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("flex-direction: row")]),s._v(" "),n("td",[s._v("box-orient: horizontal; box-direction: normal")])]),s._v(" "),n("tr",[n("td",[s._v("flex-direction: row-reverse")]),s._v(" "),n("td",[s._v("box-orient: horizontal; box-direction: reverse")])]),s._v(" "),n("tr",[n("td",[s._v("flex-direction: column")]),s._v(" "),n("td",[s._v("box-orient: vertical; box-direction: normal")])]),s._v(" "),n("tr",[n("td",[s._v("flex-direction: column-reverse")]),s._v(" "),n("td",[s._v("box-orient: vertical; box-direction: reverse")])])])]),s._v(" "),n("p",[s._v("flex-wrap")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("标准版")]),s._v(" "),n("th",[s._v("09 版")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("flex-wrap: nowrap")]),s._v(" "),n("td",[s._v("box-lines: single")])]),s._v(" "),n("tr",[n("td",[s._v("flex-wrap: wrap")]),s._v(" "),n("td",[s._v("box-lines: multiple")])]),s._v(" "),n("tr",[n("td",[s._v("flex-wrap: wrap-reverse")]),s._v(" "),n("td",[s._v("无")])])])]),s._v(" "),n("p",[s._v("flex-flow 是 flex-direction 和 flex-wrap 两个属性的简写，09 版无对应属性，09 版可以分开写两条属性")]),s._v(" "),n("p",[s._v("justify-content")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("标准版")]),s._v(" "),n("th",[s._v("09 版")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("justify-content: flex-start")]),s._v(" "),n("td",[s._v("box-pack: start")])]),s._v(" "),n("tr",[n("td",[s._v("justify-content: flex-end")]),s._v(" "),n("td",[s._v("box-pack: end")])]),s._v(" "),n("tr",[n("td",[s._v("justify-content: center")]),s._v(" "),n("td",[s._v("box-pack: center")])]),s._v(" "),n("tr",[n("td",[s._v("justify-content: space-between")]),s._v(" "),n("td",[s._v("box-pack: justify")])]),s._v(" "),n("tr",[n("td",[s._v("justify-content: space-around")]),s._v(" "),n("td",[s._v("无")])])])]),s._v(" "),n("p",[s._v("align-items")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("标准版")]),s._v(" "),n("th",[s._v("09 版")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("align-items: flex-start")]),s._v(" "),n("td",[s._v("box-align: start")])]),s._v(" "),n("tr",[n("td",[s._v("align-items: flex-end")]),s._v(" "),n("td",[s._v("box-align: end")])]),s._v(" "),n("tr",[n("td",[s._v("align-items: center")]),s._v(" "),n("td",[s._v("box-align: center")])]),s._v(" "),n("tr",[n("td",[s._v("align-items: baseline")]),s._v(" "),n("td",[s._v("box-align: baseline")])]),s._v(" "),n("tr",[n("td",[s._v("align-items: stretch")]),s._v(" "),n("td",[s._v("box-align: stretch")])])])]),s._v(" "),n("p",[s._v("align-content，09 版无对应属性")]),s._v(" "),n("h3",{attrs:{id:"项目属性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目属性"}},[s._v("#")]),s._v(" 项目属性")]),s._v(" "),n("p",[s._v("项目属性包括：")]),s._v(" "),n("ul",[n("li",[s._v("order")]),s._v(" "),n("li",[s._v("flex-grow")]),s._v(" "),n("li",[s._v("flex-shrink")]),s._v(" "),n("li",[s._v("flex-basis")]),s._v(" "),n("li",[s._v("flex")]),s._v(" "),n("li",[s._v("align-self")])]),s._v(" "),n("p",[s._v("order")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("标准版")]),s._v(" "),n("th",[s._v("09 版")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("order: number")]),s._v(" "),n("td",[s._v("box-ordinal-group: number")])])])]),s._v(" "),n("p",[s._v("flex-grow，09 版无对应属性")]),s._v(" "),n("p",[s._v("flex-shrink，09 版无对应属性")]),s._v(" "),n("p",[s._v("flex-basis，09 版无对应属性")]),s._v(" "),n("p",[s._v("flex，标准版的 flex 是一个复合属性，09 版的 box-flex 仅支持配置数字")]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("标准版")]),s._v(" "),n("th",[s._v("09 版")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("flex: flex-grow flex-shrink flex-basis")]),s._v(" "),n("td",[s._v("box-flex: number")])])])]),s._v(" "),n("p",[s._v("align-self，09 版无对应属性")]),s._v(" "),n("h3",{attrs:{id:"弹性盒模型与-reset-的选择"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#弹性盒模型与-reset-的选择"}},[s._v("#")]),s._v(" 弹性盒模型与 reset 的选择")]),s._v(" "),n("p",[s._v("*的杀伤力太大")]),s._v(" "),n("p",[s._v("Reset.css 重置 Normalize.css 修复   Neat.css 融合了 Reset.css 与 Normalize.css")]),s._v(" "),n("p",[s._v("html{box-sizing: border-box;} "),n("em",[s._v(",")]),s._v(":before,X:after{box-sizing: inherit;} inherit 继承")]),s._v(" "),n("h3",{attrs:{id:"相关资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关资料"}},[s._v("#")]),s._v(" 相关资料")]),s._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Flex 布局教程：语法篇"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-examples.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Flex 布局教程：实例篇"),n("OutboundLink")],1)])]),s._v(" "),n("h2",{attrs:{id:"bfc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[s._v("#")]),s._v(" BFC")]),s._v(" "),n("p",[s._v("Box: CSS 布局的基本单位")]),s._v(" "),n("p",[s._v("Box 是 CSS 布局的对象和基本单位， 直观点来说，就是一个页面是由很多个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。 不同类型的 Box， 会参与不同的 Formatting Context（一个决定如何渲染文档的容器），因此 Box 内的元素会以不同的方式渲染。让我们看看有哪些盒子：")]),s._v(" "),n("p",[s._v("block-level box:display 属性为 block, list-item, table 的元素，会生成 block-level box。并且参与 block fomatting context；")]),s._v(" "),n("p",[s._v("inline-level box:display 属性为 inline, inline-block, inline-table 的元素，会生成 inline-level box。并且参与 inline formatting context；")]),s._v(" "),n("p",[s._v("Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称 BFC)和 Inline formatting context (简称 IFC)")]),s._v(" "),n("h3",{attrs:{id:"哪些元素会生成-bfc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#哪些元素会生成-bfc"}},[s._v("#")]),s._v(" 哪些元素会生成 BFC")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("根元素\n\nfloat属性不为none\n\nposition为absolute或fixed\n\ndisplay为inline-block, table-cell, table-caption, flex, inline-flex\n\noverflow不为visible\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("根据 BFC 布局规则：每个元素的 margin box 的左边，与包含块 border box 的左边相接触（对于从左往右的格式化）。即使存在浮动也是如此。BFC 的区域不会与 float box 重叠")]),s._v(" "),n("p",[s._v("根据 BFC 布局规则：每个元素的 margin box 的左边，与包含块 border box 的左边相接触（对于从左往右的格式化）。即使存在浮动也是如此。BFC 的区域不会与 float box 重叠")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('<style>\n    body {\n        width: 300px;\n        position: relative;\n    }\n\n    .aside {\n        width: 100px;\n        height: 150px;\n        float: left;\n        background: #f66;\n    }\n\n    .main {\n        height: 200px;\n        background: #fcc;\n    }\n</style>\n\n<body>\n    <div class="aside">1111</div>\n    <div class="main"></div>\n</body>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/bfc2.jpg",alt:"bfc1"}})]),s._v(" "),n("p",[s._v("自适应两栏布局")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v(".main {overflow: hidden;}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/bfc1.jpg",alt:"bfc1"}})]),s._v(" "),n("p",[s._v("清除内部浮动，生成 BFC 元素，计算 BFC 高度时，浮动元素也会参与计算")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('        .par {\n            border: 5px solid #fcc;\n            width: 300px;\n        }\n\n        .child {\n             border: 5px solid #f66;\n            width: 100px;\n            height: 100px;\n            float: left;\n        }\n    </style>\n\n<body>\n<div class="par">\n    <div class="child"></div>\n    <div class="child"></div>\n </div>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/bfc3.jpg",alt:"bfc1"}})]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v(".par{\n              overflow: hidden;\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/bfc4.png",alt:"bfc1"}})]),s._v(" "),n("p",[s._v("Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 box 的 margin 会发生重叠·。我们可以在 p 外面包裹一层容器，并触发该容器生成 BFC，那 p 标签在不同的 BFC，margin 就不会发生重叠了。")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("<style>    \n    p {\n         color: #f55;\n         background: #fcc;\n         width: 200px;\n        line-height: 100px;\n         text-align: center;\n         margin: 100px;\n    }\n\n  </style>\n    \n<body>\n<p>Haha</p>\n<p>Hehe</p> \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("##CSS 绘制特殊图形")]),s._v(" "),n("p",[s._v("等腰三角形")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v(" /* 相邻的border组合成矩形，各负责一个三角形 */\n div.dengyaosanjiaoxing {\n            width: 0;\n            height: 0;\n            background-color: transparent;\n            border: 30px solid;\n            border-left-color: transparent;\n            border-bottom-color: yellowgreen;\n            border-top-color: transparent;\n            border-right-color: transparent;\n        }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("直角三角形")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("div.zhijiaosanjiaoxing {\n            width: 0;\n            height: 0;\n            background-color: transparent;\n            border: 30px solid;\n            border-left: 0;\n            border-bottom: 0;\n            border-right-color: yellow;\n            border-top-color: transparent;\n        }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("绘制五角星")]),s._v(" "),n("p",[s._v("实现三个三角形，可以是通过三个标签；但是这里用的是 CSS 的伪元素选择器(::before, ::after)来实现的并且对于三个选择器通过 position 定位就能组合成一个完整的五角星了")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v(" \n        .star-five {\n            width: 0;\n            height: 0;\n            position: relative;\n            border-bottom: 70px solid blue;\n            border-left: 100px solid transparent;\n            border-right: 100px solid transparent;\n            transform: rotate(35deg);\n            -moz-transform: rotate(35deg);\n            /* Firefox */\n            -o-transform: rotate(35deg);\n            /* Opera */\n            -webkit-transform: rotate(35deg);\n            /* Safari and Chrome */\n            -ms-transform: rotate(35deg);\n            /* IE 9 */\n            margin-top: 80px;\n        }\n        \n        .star-five::before {\n            content: '';\n            width: 0;\n            height: 0;\n            display: block;\n            border-bottom: 70px solid red;\n            border-left: 100px solid transparent;\n            border-right: 100px solid transparent;\n            position: absolute;\n            top: 0;\n            left: -94px;\n            transform: rotate(75deg);\n            -moz-transform: rotate(75deg);\n            /* Firefox */\n            -o-transform: rotate(75deg);\n            /* Opera */\n            -webkit-transform: rotate(75deg);\n            /* Safari and Chrome */\n            -ms-transform: rotate(75deg);\n            /* IE 9 */\n        }\n        \n        .star-five::after {\n            content: '';\n            width: 0;\n            height: 0;\n            color: blue;\n            border-bottom: 70px solid green;\n            border-left: 100px solid transparent;\n            border-right: 100px solid transparent;\n            transform: rotate(-70deg);\n            -moz-transform: rotate(-70deg);\n            /* Firefox */\n            -o-transform: rotate(-70deg);\n            /* Opera */\n            -webkit-transform: rotate(-70deg);\n            /* Safari and Chrome */\n            -ms-transform: rotate(-70deg);\n            /* IE 9 */\n            position: absolute;\n            left: -100px;\n            top: 0;\n        }\n        \n        /* 上半圆 */\n        \n        .semi-circle {\n            margin-top: 100px;\n            width: 100px;\n            height: 50px;\n            border-radius: 50px 50px 0 0;\n            background: orange;\n        }\n        /* 下半圆 */\n        \n        .semi-circle1 {\n            margin-top: 100px;\n            width: 100px;\n            height: 50px;\n            border-radius: 0 0 50px 50px;\n            background: orange;\n        }\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br")])]),n("p",[s._v("css 绘制腾讯公司"),n("a",{attrs:{href:"http://www.333cn.com/shejizixun/201806/43498_141178.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("企鹅 logo"),n("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);