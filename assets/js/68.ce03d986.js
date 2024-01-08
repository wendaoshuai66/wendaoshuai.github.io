(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{352:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端架构与性能优化那些事"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端架构与性能优化那些事"}},[t._v("#")]),t._v(" 前端架构与性能优化那些事")]),t._v(" "),a("h2",{attrs:{id:"前端的性能到底对业务数据有多大的影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端的性能到底对业务数据有多大的影响"}},[t._v("#")]),t._v(" 前端的性能到底对业务数据有多大的影响")]),t._v(" "),a("p",[t._v("来个小故事")]),t._v(" "),a("p",[t._v("从前有个工程师，特别注重代码细节，有一天他发现系统中的一段代码写的性能很差，因此，他用汇编重写了整段代码，执行效率足足提升了三倍。但是最后，大家发现，用户反馈性能丝毫没有提高，因为他优化的那个进程名字叫“System Idle”。")]),t._v(" "),a("p",[t._v("所以你看，性能优化不能只着眼于局部的代码。这里，我要提出一个我的观点："),a("strong",[t._v("一切没有 profiling 的性能都是耍流氓")]),t._v("。凡是真正有价值的性能优化，必定是从端到端的业务场景建立体系来考虑的。")]),t._v(" "),a("p",[t._v("总结：性能体系的建立可以分成以下几部分：")]),t._v(" "),a("p",[t._v("1.现状评估和建立指标；")]),t._v(" "),a("p",[t._v("2.技术方案；")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/%E6%8A%80%E6%9C%AF%E6%96%B9%E6%A1%88.png",alt:""}})]),t._v(" "),a("p",[t._v("3.执行；")]),t._v(" "),a("p",[t._v("4.结果评估和监控。")]),t._v(" "),a("p",[t._v("57%的⽤用户更更在乎⽹网⻚页在 3 秒内是否完成加载。\n52%的在线⽤用户认为⽹网⻚页打开速度影响到他们对⽹网站的忠实度。\n每慢 1 秒造成⻚页⾯面 PV 降低 11%，⽤用户满意度也随之降低降低 16%。\n近半数移动⽤用户因为在 10 秒内仍未打开⻚页⾯面从⽽而放弃。")]),t._v(" "),a("h2",{attrs:{id:"性能优化学徒"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化学徒"}},[t._v("#")]),t._v(" 性能优化学徒")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/xingnengyouhua.png",alt:""}})]),t._v(" "),a("p",[t._v("几个核心是：压缩 ，合并，md5")]),t._v(" "),a("p",[t._v("使用 HTML CSS HIND 对 HTML 的数量进行控制，HTML 数量如果多的话渲染的会比较慢，对 HTML 的数量进行严格把控，不能滥用 HTML")]),t._v(" "),a("p",[t._v("使用多个 CDN 的资源，多个 CDN 的优势：一般大型网站 Cookie 会非常的长，Cookie 比较烦的一点是每次请求会带去，然后后台 response 一个新的 Cookie，那么这个 Cookie 可能就会带来带去的，那么这么大的东西每次请求带来带去的会比较头痛，然而静态资源不需要 Cookie，那么就会使用到 CDN；那么这就是 CDN；CDN 的功能不仅仅是多资源很快的定位做缓存，并且可以节省 Cookie。")]),t._v(" "),a("p",[t._v("GZIP 的开启一般是 Nginx 中设置----》gzip:on")]),t._v(" "),a("h3",{attrs:{id:"缓存优先级-服务器缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存优先级-服务器缓存策略"}},[t._v("#")]),t._v(" 缓存优先级--服务器缓存策略")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/huancunyouxianji.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/huancunyouxianji1.png",alt:""}})]),t._v(" "),a("p",[t._v("为什么会有这么多缓存：浏览器发展，http 的版本形态状态的设置。")]),t._v(" "),a("p",[t._v("优点：减少相应的延迟。减少网络带宽消耗。本地缓存不可控。")]),t._v(" "),a("p",[t._v("一般库文件才会使用 http 缓存，库文件一般不会频繁变动，所有一般是强缓")]),t._v(" "),a("p",[t._v("业务文件是一般是 etag 和离线缓存")]),t._v(" "),a("h3",{attrs:{id:"离线缓存-localstorage-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#离线缓存-localstorage-的使用"}},[t._v("#")]),t._v(" 离线缓存--localstorage 的使用")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/addyosmani/basket.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/addyosmani/basket.js"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("1.首先使用 webpack-manifest-plugin，打印出 md5.js")]),t._v(" "),a("p",[t._v("例如")]),t._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v('{\n  "a.js": "axx4.js",\n  "omega.js": "mods/omega.0987654321.js"\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("2.本地缓存去取 a.js")]),t._v(" "),a("p",[t._v("3.有激活 js addScript")]),t._v(" "),a("p",[t._v("3-1 a.js -> axx2.js 对比")]),t._v(" "),a("p",[t._v("3-2 更新流程 a.js -> axx4.js")]),t._v(" "),a("p",[t._v("3-3 删除 axx2.js")]),t._v(" "),a("p",[t._v("3-4 跳到下一步")]),t._v(" "),a("p",[t._v("4.没有")]),t._v(" "),a("p",[t._v("4-1 请求 axx4.js")]),t._v(" "),a("p",[t._v("4-1 axx4.js 放到缓存")]),t._v(" "),a("h3",{attrs:{id:"from-memory-cache-与-from-disk-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-memory-cache-与-from-disk-cache"}},[t._v("#")]),t._v(" from memory cache 与 from disk cache")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/mery.png",alt:""}})]),t._v(" "),a("p",[t._v("1.浏览器 Network 的 Size 栏")]),t._v(" "),a("p",[t._v("在浏览器开发者工具的 Network 的 Size 栏会出现的三种情况：")]),t._v(" "),a("p",[t._v("from memory cache")]),t._v(" "),a("p",[t._v("from disk cache")]),t._v(" "),a("p",[t._v("资源本身大小（比如：13.6K)")]),t._v(" "),a("p",[t._v("2.三级缓存原理")]),t._v(" "),a("p",[t._v("1)、先查找内存，如果内存中存在，从内存中加载；")]),t._v(" "),a("p",[t._v("2)、如果内存中未查找到，选择硬盘获取，如果硬盘中有，从硬盘中加载；")]),t._v(" "),a("p",[t._v("3)、如果硬盘中未查找到，那就进行网络请求；")]),t._v(" "),a("p",[t._v("4)、加载到的资源缓存到硬盘和内存；")]),t._v(" "),a("p",[t._v("3.区别")]),t._v(" "),a("p",[t._v("根据系统的配置环境分配 from memory cache 或 from disk cache")]),t._v(" "),a("p",[t._v("4.几种状态的执行顺序")]),t._v(" "),a("p",[t._v("现加载一种资源（例如：图片）：")]),t._v(" "),a("p",[t._v("访问-> 200 -> 退出浏览器")]),t._v(" "),a("p",[t._v("再进来-> 200(from disk cache) -> 刷新 -> 200(from memory cache)")]),t._v(" "),a("h3",{attrs:{id:"http"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" http")]),t._v(" "),a("p",[t._v("http2 出现也就可以放弃打包压缩那一步了")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/http2duolu.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"渲染中性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染中性能优化"}},[t._v("#")]),t._v(" 渲染中性能优化")]),t._v(" "),a("h3",{attrs:{id:"网页渲染流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网页渲染流程"}},[t._v("#")]),t._v(" 网页渲染流程")]),t._v(" "),a("p",[t._v("1-1.获取 dom 分割成多层 Parse HTML")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/%E5%88%86%E5%B1%82.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/%E9%87%8D%E7%BB%98.png",alt:""}})]),t._v(" "),a("p",[t._v("1-2.对每个层计算样式结果 Recalculate Style")]),t._v(" "),a("p",[t._v("1-3 为每个节点生成图形和位置 重排 Layout")]),t._v(" "),a("p",[t._v("1-4 将每个节点绘制并填充到图层的位图中。重绘 Paint")]),t._v(" "),a("p",[t._v("1-5 绘制出来的纹理上传到 GPU Composite Layers")]),t._v(" "),a("p",[t._v("2 大致流程 Layout  、Paint 、Composite Layers")]),t._v(" "),a("p",[t._v("3 网页分层")]),t._v(" "),a("p",[t._v("根元素 position transform 半透明 滤镜 canvas video overflow")]),t._v(" "),a("p",[t._v("GPU 参与 参与好处：跨过 重排 重绘")]),t._v(" "),a("p",[t._v("CSS3d video webgl transform 滤镜")]),t._v(" "),a("p",[t._v("4.cpu gpu")]),t._v(" "),a("p",[t._v("相同点：两者总有总线和外界联系 ，有自己的缓存体系 以及数字和逻辑运算单元，为了完成计算任务而生的")]),t._v(" "),a("p",[t._v("不同点： cpu 主要负责操作系统和应用程序。而 gpu 负责和显示相关的 ，gpu 能干的活 cpu 都能干只不过效率低")]),t._v(" "),a("p",[t._v("5.有些属性读会造成重排")]),t._v(" "),a("p",[t._v("重绘不一定引起重排，重排一定会引起重绘。")]),t._v(" "),a("p",[t._v("会引起重排属性：offset scroll width height")]),t._v(" "),a("p",[t._v("建议 dom 读写分离\n读：ele.height ele.offset")]),t._v(" "),a("p",[t._v("下一帧的时候再去设置相关的值 requestAnimationFrame requestIdleCallback(浏览器支持的不是很好)。60 帧 1000 毫秒内渲染出来")]),t._v(" "),a("h2",{attrs:{id:"⻚页面面加载性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⻚页面面加载性能优化"}},[t._v("#")]),t._v(" ⻚页⾯面加载性能优化")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/TTFB.png",alt:""}})]),t._v(" "),a("p",[t._v("FP(First Paint) 首次绘制")]),t._v(" "),a("p",[t._v("FCP （First Contentful Paint）, ⾸次 有内容的绘制")]),t._v(" "),a("p",[t._v("FMP （First Meaningful Pain）  ⾸ 次有意义的绘制 没有绝对，自己决定")]),t._v(" "),a("p",[t._v("TTI （Time To Interactive）, 可交互 时间 整个页面 ok")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/tti.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/fmp.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/baiping.png",alt:""}})]),t._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v('<div class="container">\n    <div class="ball" id="ball">ball</div>\n</div>\n\nconst observer = new PerformanceObserver((list) => {\n    for (const entry of list.getEntries()) {\n        console.log(entry);\n    }\n});\n\nobserver.observe({ entryTypes: [\'paint\'] })\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("PerformancePaintTiming {name: “first-paint”, entryType: “paint”, startTime: 16.30499999737367, duration: 0}")]),t._v(" "),a("p",[t._v("duration: 0")]),t._v(" "),a("p",[t._v("entryType: “paint”")]),t._v(" "),a("p",[t._v("FP")]),t._v(" "),a("p",[t._v("name: “first-paint”")]),t._v(" "),a("p",[t._v("startTime: 16.30499999737367")]),t._v(" "),a("p",[t._v("proto: PerformancePaintTiming")]),t._v(" "),a("p",[t._v("index.html:61")]),t._v(" "),a("p",[t._v("FCP")]),t._v(" "),a("p",[t._v("PerformancePaintTiming {name: “first-contentful-paint”, entryType: “paint”, startTime: 16.315000000759028, duration: 0}")]),t._v(" "),a("p",[t._v("duration: 0")]),t._v(" "),a("p",[t._v("entryType: “paint”")]),t._v(" "),a("p",[t._v("name: “first-contentful-paint”")]),t._v(" "),a("p",[t._v("startTime: 16.315000000759028")]),t._v(" "),a("p",[t._v("proto: PerformancePaintTiming")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/longtask.png",alt:""}}),t._v("\n验证")]),t._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[t._v("let arr = [];\nfor (let i = 0; i < 10000000; i++) {\n    arr.push(i)\n}\n\nconst observer = new PerformanceObserver((list) => {\n    for (const entry of list.getEntries()) {\n        console.log(entry);\n    }\n});\n\nobserver.observe({ entryTypes: ['longtask'] })\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[t._v("PerformanceLongTaskTiming {attribution: Array(1), name: “self”, entryType: “longtask”, startTime: 12.879999994765967, duration: 303.82500000996515}")]),t._v(" "),a("p",[t._v("attribution: [TaskAttributionTiming]")]),t._v(" "),a("p",[t._v("duration: 303.82500000996515")]),t._v(" "),a("p",[t._v("longtask")]),t._v(" "),a("p",[t._v("entryType: “longtask”")]),t._v(" "),a("p",[t._v("name: “self”")]),t._v(" "),a("p",[t._v("startTime: 12.879999994765967")]),t._v(" "),a("p",[t._v("proto: PerformanceLongTaskTiming")])])}),[],!1,null,null,null);a.default=n.exports}}]);