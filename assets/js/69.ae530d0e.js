(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{354:function(t,s,a){"use strict";a.r(s);var v=a(10),r=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"实战-手搭一个-react-typescript-koa-graphql-环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实战-手搭一个-react-typescript-koa-graphql-环境"}},[t._v("#")]),t._v(" 实战：手搭一个 React，Typescript，Koa，GraphQL 环境")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("在实际的开发过程中，从零开始初始化一个项目往往很麻烦，所以各种各样的脚手架工具应运而生。crea-react-app，vue-cli，@angular/cli 等脚手架工具，只需要执行一个命令，项目结构以及开发环境就搭建好了。")]),t._v(" "),s("p",[t._v("脚手架工具确实方便了我们使用，开发者可以专注于业务，而不需要考虑太多的环境搭建。但作者认为，学习脚手架工具背后的搭建过程也是很重要的，以防脚手架挂了之后，我们还能正常搭建项目。基于这个目的，作者从零搭建了 cdfang-spider 项目。")]),t._v(" "),s("p",[t._v("现在让我们就以这个项目为例，从零开始搭建项目吧。")]),t._v(" "),s("h2",{attrs:{id:"项目选型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目选型"}},[t._v("#")]),t._v(" 项目选型")]),t._v(" "),s("h3",{attrs:{id:"三大框架里选哪个"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三大框架里选哪个"}},[t._v("#")]),t._v(" 三大框架里选哪个？")]),t._v(" "),s("p",[t._v("react (市面上技术栈很火并且个人喜好)。")]),t._v(" "),s("p",[t._v("react-router 定义路由。")]),t._v(" "),s("p",[t._v("react context 状态管理。")]),t._v(" "),s("p",[t._v("react hooks 组件化。")]),t._v(" "),s("h3",{attrs:{id:"引入强类型语言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入强类型语言"}},[t._v("#")]),t._v(" 引入强类型语言？")]),t._v(" "),s("p",[t._v("typescript。为 js 提供类型支持，编辑器友好，增加代码可维护性，使用起来心里踏实。")]),t._v(" "),s("p",[t._v("在使用第三方库时，可以写出更加符合规范的代码，避免 api 乱用等。")]),t._v(" "),s("p",[t._v("项目中依赖了大量 @types/xxx 包，无形中增加了项目体积。")]),t._v(" "),s("p",[t._v("编辑器对 ts 文件进行类型检查，需要遍历 node_modules 目录下所有的 @types 文件，会造成编辑器卡顿现象。")]),t._v(" "),s("p",[t._v("目前仍然存在很多库没有 @types 支持，使用起来并不方便。")]),t._v(" "),s("h3",{attrs:{id:"css-选型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-选型"}},[t._v("#")]),t._v(" css 选型？")]),t._v(" "),s("p",[t._v("预编译器 less。项目中使用了变量定义，选择器嵌套，选择器复用等，less 够用了。")]),t._v(" "),s("p",[t._v("解决命名冲突可以使用 css modules，暂未考虑 css in js。")]),t._v(" "),s("p",[t._v("使用 bem 命名规范。")]),t._v(" "),s("p",[t._v("使用 postcss 插件 autoprefixer，增加 css 兼容性。")]),t._v(" "),s("h3",{attrs:{id:"构建工具选哪个"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建工具选哪个"}},[t._v("#")]),t._v(" 构建工具选哪个？")]),t._v(" "),s("p",[t._v("webpack。内置 tree shaking，scope hosting 等，打包效率高，社区活跃。")]),t._v(" "),s("p",[t._v("webpack-merge 合并不同环境配置文件。")]),t._v(" "),s("p",[t._v("配置 externals。引入 cdn 代替 node_modules 中体积较大的包。")]),t._v(" "),s("p",[t._v("gulp。用来打包 node 端代码。")]),t._v(" "),s("h3",{attrs:{id:"代码规范检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码规范检查"}},[t._v("#")]),t._v(" 代码规范检查？")]),t._v(" "),s("p",[t._v("eslint。辅助编码规范执行，有效控制代码质量。同时也支持校验 typescript 语法。")]),t._v(" "),s("p",[t._v("配置 eslint-config-airbnb 规则。")]),t._v(" "),s("p",[t._v("配置 eslint-config-prettier 关闭和 prettier 冲突的规则")]),t._v(" "),s("h3",{attrs:{id:"测试框架选型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试框架选型"}},[t._v("#")]),t._v(" 测试框架选型？")]),t._v(" "),s("p",[t._v("jest。大而全，包含：测试框架，断言库，mock 数据，覆盖率等。")]),t._v(" "),s("p",[t._v("enzyme。测试 react 组件。")]),t._v(" "),s("p",[t._v("后端框架选型？")]),t._v(" "),s("h3",{attrs:{id:"koa。精简好用-中间件机制强大。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koa。精简好用-中间件机制强大。"}},[t._v("#")]),t._v(" koa。精简好用，中间件机制强大。")]),t._v(" "),s("p",[t._v("apollo-server。帮助搭建 graphQL 后端环境。")]),t._v(" "),s("h3",{attrs:{id:"数据库选型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库选型"}},[t._v("#")]),t._v(" 数据库选型？")]),t._v(" "),s("p",[t._v("mongodb。类 json 的存错格式，方便存储，前端友好。")]),t._v(" "),s("p",[t._v("配置 mongoose，方便给 mongodb 数据库建模。")]),t._v(" "),s("p",[t._v("接口方式选型？")]),t._v(" "),s("h3",{attrs:{id:"graphql。可以根据需要格式获取对应数据-减少接口冗余数据。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graphql。可以根据需要格式获取对应数据-减少接口冗余数据。"}},[t._v("#")]),t._v(" graphql。可以根据需要格式获取对应数据，减少接口冗余数据。")]),t._v(" "),s("p",[t._v("graphql schema 定义了后端接口的参数，操作和返回类型，从此不需要提供接口文档。")]),t._v(" "),s("p",[t._v("前端可以在 schema 定义后开始开发，数据格式自己掌握。")]),t._v(" "),s("p",[t._v("schema 可拼接。可以组合和连接多个 graphql api，进行级联查询等。")]),t._v(" "),s("p",[t._v("社区友好，有很多优秀的库可以直接使用： apollo，relay 等。")]),t._v(" "),s("h2",{attrs:{id:"搭建-typescript-环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建-typescript-环境"}},[t._v("#")]),t._v(" 搭建 TypeScript 环境")]),t._v(" "),s("p",[t._v("TypeScript 是 JavaScript 的超集，意味着可以完全兼容 JavaScript 文件，但 TypeScript 文件却并不能直接在浏览器中运行，需要经过编译生成 JavaScript 文件后才能运行。")]),t._v(" "),s("h3",{attrs:{id:"新建-tsconfig-json-文件。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#新建-tsconfig-json-文件。"}},[t._v("#")]),t._v(" 新建 tsconfig.json 文件。")]),t._v(" "),s("p",[t._v("tsc -init 生成初始化 tsconfig.json 文件。")]),t._v(" "),s("p",[t._v("vscode 会根据 tsconfig.json 文件，进行动态类型检查，语法错误提示等。")]),t._v(" "),s("p",[t._v("tsc 命令会根据 tsconfig.json 文件配置的规则，将 ts 代码转换为 js 代码。")]),t._v(" "),s("p",[t._v("tslint 会读取 tsconfig.json 文件中的规则，辅助编码规范校验。")]),t._v(" "),s("p",[t._v("tslint 官宣会被废弃，后将被 eslint 代替。")]),t._v(" "),s("p",[t._v("eslint 同样会用到 tsconfig.json 文件中的内容。")])])}),[],!1,null,null,null);s.default=r.exports}}]);