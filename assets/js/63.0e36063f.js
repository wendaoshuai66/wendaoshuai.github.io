(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{345:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"你不知道的-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#你不知道的-html"}},[s._v("#")]),s._v(" 你不知道的 HTML")]),s._v(" "),a("h2",{attrs:{id:"什么是同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是同源策略"}},[s._v("#")]),s._v(" 什么是同源策略")]),s._v(" "),a("p",[s._v('是一种约定，它是浏览器最核心最基本的安全功能，1995 年，同源政策由 Netscape 公司引入浏览器。目前，所有浏览器都实行这个政策。所谓"同源"指的是"三个相同"。'),a("br"),s._v("\n协议相同\n域名相同\n端口相同")]),s._v(" "),a("h2",{attrs:{id:"同源策略目的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同源策略目的"}},[s._v("#")]),s._v(" 同源策略目的")]),s._v(" "),a("p",[s._v("同源政策的目的，是为了保证用户信息的安全，防止恶意的网站窃取数据。")]),s._v(" "),a("h2",{attrs:{id:"非同源策略有三种行为限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非同源策略有三种行为限制"}},[s._v("#")]),s._v(" 非同源策略有三种行为限制")]),s._v(" "),a("p",[s._v("（1） Cookie、LocalStorage 和 IndexDB 无法读取。")]),s._v(" "),a("p",[s._v("（2） DOM 无法获得。")]),s._v(" "),a("p",[s._v("（3） AJAX 请求不能发送。")]),s._v(" "),a("h2",{attrs:{id:"如何设置同源策略-hosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何设置同源策略-hosts"}},[s._v("#")]),s._v(" 如何设置同源策略（hosts）")]),s._v(" "),a("p",[s._v("Cookie 是服务器写入浏览器的一小段信息，只有同源的网页才能共享。但是，两个网页一级域名相同，只是二级域名不同，浏览器允许通过设置 document.domain 共享 Cookie。\n例如 test1.xxx.com/a.html 与 test2.xxx.com/b.html")]),s._v(" "),a("p",[s._v("在 a.html 中")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("domain "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx.com'")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//设置同源策略")]),s._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test1=hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("在 b.html 中可以读到 Cookie")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" allCookie "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("另外，服务器也可以在设置 Cookie 的时候，指定 Cookie 的所属域名为一级域名，比如"),a("code",[s._v(".example.com")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("Set"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Cookie"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" domain"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("                                      \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"常见跨域的方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见跨域的方案"}},[s._v("#")]),s._v(" 常见跨域的方案")]),s._v(" "),a("p",[s._v("img iframe script 并没有规定到同源策略所限制的对象中，经常实现从本域到其他的一个域发起请求，最实用的的 HTML 的标签")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v('<img src="http://wwww.test.com/" alt="">\n<iframe src="http://wwww.test.com/" frameborder="0"></iframe>\n<script src="http://wwww.test.com/"><\/script>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("img  iframe script\t Jsonp（callback 与后端约定）link(background)")]),s._v(" "),a("h3",{attrs:{id:"jsonp-案列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp-案列"}},[s._v("#")]),s._v(" jsonp 案列")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("js部分\n第一种写法\n<script src=\"http://wwww.test.com/index.php?callback=test\"><\/script>\n\n<script>\nfunction test(data){\n    console.log(data)\n}\n<\/script>\n第二种写法\nfunction addScriptTag(src){\n  var s = document.createElement('script')\n  s.setAttribute('type','text/script')\n  s.src = src\n  document.body.appendChild(s)\n}\nwindow.onload =fuction(){\n  addScriptTag('http://wwww.test.com/index.php?callback=test')\n}\nfunction test(data) {\n        console.log('Your public IP address is: ' + data.ip);\n    }\njs也可以这样写\n\n\nphp 部分\nif(callback) {\n    test({\"data\":\"约定成功\"})\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h3",{attrs:{id:"标签拓展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标签拓展"}},[s._v("#")]),s._v(" 标签拓展")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("var img = new Image()\n    var start = Date.now()\n    img.src = 'http://img0.imgtn.bdimg.com/it/u=1375648583,1039230805&fm=26&gp=0.jpg'\n    img.onload =function (ev) {\n        var end = Date.now()\n        var t = (end -start)/1000\n        varv = 't'+= 'kb/s'\n        console.log(t/1000)\n    }\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"html-语义化标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-语义化标签"}},[s._v("#")]),s._v(" HTML 语义化标签")]),s._v(" "),a("p",[s._v("使用 div 进行布局，不要用 div 进行无意义的包裹，尽量少写 html，原因减少 dom 渲染时间，浪费文件大小")]),s._v(" "),a("p",[s._v("语义化标签是因为爬虫")])])}),[],!1,null,null,null);a.default=e.exports}}]);