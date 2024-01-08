(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{325:function(s,n,a){"use strict";a.r(n);var e=a(10),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"react-入门必学【下】"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-入门必学【下】"}},[s._v("#")]),s._v(" React 入门必学【下】")]),s._v(" "),n("h2",{attrs:{id:"react-生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-生命周期"}},[s._v("#")]),s._v(" React 生命周期")]),s._v(" "),n("p",[s._v("每个软件都有从开始创建到运行到最终销毁的一段路程，这可以说成是软件的生命周期")]),s._v(" "),n("p",[s._v("组件本质是状态机，输入确定，输出一定的确定。状态发生转化时会触发不同的钩子函数，从而让开发者做出响应，可以用事件的思路理解状态。")]),s._v(" "),n("p",[s._v("初始化----》运行中----》销毁")]),s._v(" "),n("h3",{attrs:{id:"react16-3-0-之前生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react16-3-0-之前生命周期"}},[s._v("#")]),s._v(" React16.3.0 之前生命周期:")]),s._v(" "),n("p",[s._v("16 版本之前的 react 组件的生命周期相信大家已经很熟悉。16 版本的 react 对组件的生命周期函数进行了一些修改,下面进行详细说明。")]),s._v(" "),n("p",[s._v("如图：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/react15%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/react15%E5%A3%B0%E6%98%8E%E5%90%8E%E6%9C%9F%E6%B5%81%E7%A8%8B.png",alt:""}})]),s._v(" "),n("p",[s._v("创建期:")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("1.constructor(props, context)\n\n2.componentWillMount()\n\n3.render()\n\n4.componentDidMount()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("运行时:\nprops 发生变化时")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("\n\n1.componentWillReceiveProps(nextProps, nextContext)\n\n2.shouldComponentUpdate(nextProps, nextState, nextContext)\n\n3.componentWillUpdate(nextProps, nextState, nextContext)\n\n4.render\n\n5.componentDidUpdate(prevProps, prevState, snapshot)\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[s._v("state 发生变化时")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("\n1.shouldComponentUpdate(nextProps, nextState, nextContext)\n\n2.componentWillUpdate(nextProps, nextState, nextContext)\n\n3.render\n\n4.componentDidUpdate(prevProps, prevState, snapshot)\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("卸载时:")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("componentWillUnmount()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"react16-3-0-之后的生命周期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react16-3-0-之后的生命周期"}},[s._v("#")]),s._v(" React16.3.0 之后的生命周期")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/react16%E5%91%A8%E6%9C%9F-1.png",alt:""}})]),s._v(" "),n("p",[n("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/react16%E5%91%A8%E6%9C%9F.png",alt:""}})]),s._v(" "),n("p",[s._v("创建期:")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("1.constructor(props, context)\n\n2.static getDerivedStateFromProps(props, status)\n\n3.render()\n\n4.componentDidMount()\n\n或者如下生命周期:\n\n1.constructor(props, context)\n\n2.componentWillMount() / UNSAFE_componentWillMount()\n\n3.render()\n\n4.componentDidMount()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("p",[s._v("注意: getDerivedStateFromProps/getSnapshotBeforeUpdate 和 componentWillMount/componentWillReceiveProps/componentWillUpdate 如果同时存在，React 会在控制台给出警告信息，且仅执行 getDerivedStateFromProps/getSnapshotBeforeUpdate 【React@16.7.0】")]),s._v(" "),n("p",[s._v("运行时:")]),s._v(" "),n("p",[s._v("props 发生变化时")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("1.static getDerivedStateFromProps(props, status)\n\n2.shouldComponentUpdate(nextProps, nextState, nextContext)\n\n3.render\n\n4.getSnapshotBeforeUpdate(prevProps, prevState)\n\n5.componentDidUpdate(prevProps, prevState, snapshot)\n\n或者如下生命周期:\n\n1.componentWillReceiveProps(nextProps, nextContext)/\n\n2.UNSAFE_componentWillReceiveProps\n\n3.shouldComponentUpdate(nextProps, nextState, nextContext)\n\n4.componentWillUpdate(nextProps, nextState, nextContext)\n\n5.render\n\n6.componentDidUpdate(prevProps, prevState, snapshot)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("state 发生变化时")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("1.static getDerivedStateFromProps(props, status)\n\n2.shouldComponentUpdate(nextProps, nextState, nextContext)\n\n3.render\n\n4.getSnapshotBeforeUpdate(prevProps, prevState)\n\n5.componentDidUpdate(prevProps, prevState, snapshot)\n\n或者如下生命周期:\n\n1.shouldComponentUpdate(nextProps, nextState, nextContext)\n\n2.componentWillUpdate(nextProps, nextState, nextContext)/\n\n3.UNSAFE_componentWillUpdate\n\n4.render\n\n5.componentDidUpdate(prevProps, prevState, snapshot)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("销毁时")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("componentWillUnmount()\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"生命周期详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#生命周期详解"}},[s._v("#")]),s._v(" 生命周期详解")]),s._v(" "),n("p",[s._v("1.constructor(props, context)")]),s._v(" "),n("p",[s._v("constructor 生命周期，如不需要，可缺省。通常会在 constructor 方法中初始化 state 和绑定事件处理程序。\n但是，如果写了 constructor，那么必须在其中调用 super(props);否则可能会引起报错")]),s._v(" "),n("p",[s._v("如:")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("class Base extends Component {\n    constructor(props) {\n        super();  //应该为 super(props);\n    }\n    state = {\n        name: this.props.name\n    }\n    //....code\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("抛出异常: Uncaught TypeError: Cannot read property 'name' of undefined.")]),s._v(" "),n("p",[s._v("同样，如果定义了 context,在 state 中需要使用 this.context 去获取 context 上的内容，则需要 super(props, context);")]),s._v(" "),n("p",[s._v("不过，如果你缺省 constructor,那么在 state 中，可以放心的使用 this.props 或者是 this.context，不会引起报错。")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("class Base extends Component {\n    state = {\n        name: this.props.name,\n        color: this.context.color\n    }\n    //....code\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("初始化的 state 同样可以在 constructor 中定义。如果需要给方法绑定 this，那么统一在 constructor 中进行。")]),s._v(" "),n("p",[s._v("2.static getDerivedStateFromProps(props, state)")]),s._v(" "),n("p",[s._v("当组件的 state 需要根据 props 来改变的时候可调用此方法。这个方法是在 render() 前会被执行，每次触发 render 前，都会触发此方法。")]),s._v(" "),n("p",[s._v("该方法有两个参数 props 和 state; 返回值为 state 对象, 不需要返回整体 state，把需要改变的 state 返回即可。如果不需要，可以返回 null.")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("class Base extends Component {\n    state = {\n        age: 20\n    }\n    static getDerivedStateFromProps(props, state) {\n        return {\n            age: 50\n        }\n    }\n    render() {\n        // 50\n        return (\n            <div>{this.state.age}</div>\n        )\n    }\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("这个方法允许组件基于 props 的变更来更新其内部状态,以这种方式获得的组件状态被称为派生状态。应该谨慎使用派生状态，可能会引入潜在的错误")]),s._v(" "),n("p",[s._v("3.render")]),s._v(" "),n("p",[s._v("React 组件中必须要提供的方法。当 state 或者 props 任一数据有更新时都会执行。")]),s._v(" "),n("p",[s._v("render() 是一个纯函数，因此，不要在其中执行 setState 诸如此类的操作。render 必须有一个返回值，返回的数据类型可以有:")]),s._v(" "),n("p",[s._v("null、String、Number、Array、Boolean。")]),s._v(" "),n("p",[s._v("React elements")]),s._v(" "),n("p",[s._v("Fragment")]),s._v(" "),n("p",[s._v("Portal")]),s._v(" "),n("p",[s._v("注意不要在 render 中调用 setState")]),s._v(" "),n("p",[s._v("4.componentDidMount")]),s._v(" "),n("p",[s._v("componentDidMount()方法是在组件加载完后立即执行，也就是当该组件相关的 dom 节点插入到 dom 树中时。该方法在组件生命中只执行一次。")]),s._v(" "),n("p",[s._v("一般情况，我们会在这里 setState(),或者进行接口请求，设置订阅等。")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("class Base extends Component {\n    state = {\n        age: 20\n    }\n    componentDidMount() {\n        this.fetchDate();\n    }\n    render() {\n        return (\n            <div>{this.state.age}</div>\n        )\n    }\n    //other code\n}\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("5.shouldComponentUpdate(nextProps, nextState, nextContext)")]),s._v(" "),n("p",[s._v("在渲染新的 props 或 state 前，shouldComponentUpdate 被调用，默认返回 true。forceUpdate()时不会调用此方法。")]),s._v(" "),n("p",[s._v("如果 shouldComponentUpdate()返回 false，那么 getSnapshotBeforeUpdate,render 和 componentDidUpdate 不会被调用。")]),s._v(" "),n("p",[s._v("此生命周期主要用于优化性能。")]),s._v(" "),n("p",[s._v("6.getSnapshotBeforeUpdate(prevProps, prevState)")]),s._v(" "),n("p",[s._v("在 render()的输出被渲染到 DOM 之前被调用。使组件能够在它们被更改之前捕获当前值（如滚动位置）。这个生命周期返回的任何值都将作为第三个参数传递给 componentDidUpdate().")]),s._v(" "),n("p",[s._v("7.componentDidUpdate(prevProps, prevState, snapshot)")]),s._v(" "),n("p",[s._v("在更新发生后调用 componentDidUpdate()。当组件更新时，将此作为一个机会来操作 DOM。如将当前的 props 与以前的 props 进行比较（例如，如果 props 没有改变，则可能不需要网络请求。")]),s._v(" "),n("p",[s._v("如果组件使用 getSnapshotBeforeUpdate()，则它返回的值将作为第三个“快照”参数传递给 componentDidUpdate()。否则，这个参数是 undefined。")]),s._v(" "),n("p",[s._v("8.componentWillUnmount()")]),s._v(" "),n("p",[s._v("在组件被卸载并销毁之前立即被调用。在此方法中执行任何必要的清理，例如使定时器无效，取消网络请求或清理在 componentDidMount（）中创建的任何监听。")]),s._v(" "),n("h2",{attrs:{id:"不可控组件-与-可控组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不可控组件-与-可控组件"}},[s._v("#")]),s._v(" 不可控组件 与 可控组件")]),s._v(" "),n("h3",{attrs:{id:"不可控组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#不可控组件"}},[s._v("#")]),s._v(" 不可控组件:")]),s._v(" "),n("p",[s._v("当一个表单元素设置了 defaultValue 属性的时候，那么这个组件就变成了不可控组件。")]),s._v(" "),n("p",[s._v("为什么这么说呢？")]),s._v(" "),n("p",[s._v("defaultValue 属性设置的值大多数情况下是不允许更改的，由于 React 的所有的 View 是基于状态的改变而动态渲染的，而设置了 defaultValue 是不允许更改，所以就可以称组件为不可控组件。")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('export default class App extends React.Component{\n    constructor(props){\n        super(props);\n        this.state = {\n            value : "hello React",\n        }\n        this.handleChange = this.handleChange.bind(this);\n    }\n    handleChange(){\n        this.setState({\n            value : "hello world"\n        })\n        console.log(this.state.value);\n    }\n    render(){\n        return (\n            <input \n                onMouseEnter = {this.handleChange}\n                defaultValue = {this.state.value}\n            />\n        )\n    }\n}\n\n\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("上面代码是：在 input 元素上设置 defaultValue 并监听 onMouseEnter 事件，当鼠标移入的时候，状态改变。可以从图上看出，状态改变但是 input 中的值并没有改变。")]),s._v(" "),n("p",[s._v("我们在书写代码的时候无法通过状态去控制组件，这就是不可控组件。")]),s._v(" "),n("p",[s._v("但是不可控组件并不是非不可控，通过 React.findDOMNode(this.refs.input).value 直接取到 DOM 元素就可以改变。修改一下上面代码。")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('export default class App extends React.Component{\n    constructor(props){\n        super(props);\n        this.state = {\n            value : "hello React",\n        }\n        this.handleChange = this.handleChange.bind(this);\n    }\n    handleChange(){\n        \n        this.setState({\n            value : "hello world"\n        })\n        console.log(this.state.value);\n        ReactDOM.findDOMNode(this.refs.input).value = this.state.value;\n    }\n    render(){\n        return (\n            <input \n                onMouseEnter = {this.handleChange}\n                defaultValue = {this.state.value}\n                ref = "input"\n            />\n        )\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h3",{attrs:{id:"可控组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#可控组件"}},[s._v("#")]),s._v(" 可控组件")]),s._v(" "),n("p",[s._v("当我们在表单元素上不使用 defaultValue 而使用 value 的使用，组件就变成了可控的了。")]),s._v(" "),n("p",[s._v("上面代码修改一下。")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('\nexport default class App extends React.Component{\n    constructor(props){\n        super(props);\n        this.state = {\n            value : "hello React",\n        }\n        this.handleChange = this.handleChange.bind(this);\n    }\n    handleChange(){\n        \n        this.setState({\n            value : "hello world"\n        })\n        console.log(this.state.value);\n    }\n    render(){\n        return (\n            <input \n                onMouseEnter = {this.handleChange}\n                value = {this.state.value}\n            />\n        )\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[s._v("状态改变，值也改变了，我们发现报了个错。 这个错是因为使用 vlaue 必须配合一个事件来使用，要么用 onChange 要么把值设置成 readOnly。")]),s._v(" "),n("p",[s._v("把原来的代码 onMouseEnter 改成 onChange：")]),s._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('export default class App extends React.Component{\n    constructor(props){\n        super(props);\n        this.state = {\n            value : "hello React",\n        }\n        this.handleChange = this.handleChange.bind(this);\n    }\n    handleChange(e){\n        this.setState({\n            value : e.target.value\n        })\n        \n        console.log(this.state.value);\n    }\n    render(){\n        return (\n            <input \n                onChange = {this.handleChange}\n                value = {this.state.value}\n            />\n        )\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br")])]),n("p",[s._v("可控组件的好处:")]),s._v(" "),n("p",[s._v("符合 React 的数据流")]),s._v(" "),n("p",[s._v("数据存储在 state 中，便于使用")]),s._v(" "),n("p",[s._v("便于对数据进行处理")]),s._v(" "),n("h2",{attrs:{id:"react-事件表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#react-事件表"}},[s._v("#")]),s._v(" React 事件表")]),s._v(" "),n("h3",{attrs:{id:"触摸事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#触摸事件"}},[s._v("#")]),s._v(" 触摸事件")]),s._v(" "),n("p",[s._v("onTouchCancel")]),s._v(" "),n("p",[s._v("onTouchEnd")]),s._v(" "),n("p",[s._v("onTouchMove")]),s._v(" "),n("p",[s._v("onTouchStart")]),s._v(" "),n("h3",{attrs:{id:"键盘事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#键盘事件"}},[s._v("#")]),s._v(" 键盘事件")]),s._v(" "),n("p",[s._v("onKeyDown")]),s._v(" "),n("p",[s._v("onKeyPress")]),s._v(" "),n("p",[s._v("onKeyUp")]),s._v(" "),n("h3",{attrs:{id:"剪切事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#剪切事件"}},[s._v("#")]),s._v(" 剪切事件")]),s._v(" "),n("p",[s._v("onCopy")]),s._v(" "),n("p",[s._v("onCut")]),s._v(" "),n("p",[s._v("onPaste")]),s._v(" "),n("h3",{attrs:{id:"焦点事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#焦点事件"}},[s._v("#")]),s._v(" 焦点事件")]),s._v(" "),n("p",[s._v("onFocus")]),s._v(" "),n("p",[s._v("onBlur")]),s._v(" "),n("h3",{attrs:{id:"ui-元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ui-元素"}},[s._v("#")]),s._v(" UI 元素")]),s._v(" "),n("p",[s._v("onScroll")]),s._v(" "),n("h3",{attrs:{id:"滚动事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#滚动事件"}},[s._v("#")]),s._v(" 滚动事件")]),s._v(" "),n("p",[s._v("onWheel")]),s._v(" "),n("h3",{attrs:{id:"鼠标事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#鼠标事件"}},[s._v("#")]),s._v(" 鼠标事件")]),s._v(" "),n("p",[s._v("onClick")]),s._v(" "),n("p",[s._v("onContextMenu")]),s._v(" "),n("p",[s._v("onDoubleClick")]),s._v(" "),n("p",[s._v("onMouseDown")]),s._v(" "),n("p",[s._v("onMouseEnter")]),s._v(" "),n("p",[s._v("onMouseLeave")]),s._v(" "),n("p",[s._v("onMouseMove")]),s._v(" "),n("p",[s._v("onMouseOut")]),s._v(" "),n("p",[s._v("onMouseOver")]),s._v(" "),n("p",[s._v("onMouseUp")]),s._v(" "),n("h3",{attrs:{id:"拖拽事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#拖拽事件"}},[s._v("#")]),s._v(" 拖拽事件")]),s._v(" "),n("p",[s._v("onDrop")]),s._v(" "),n("p",[s._v("onDrag")]),s._v(" "),n("p",[s._v("onDragEnd")]),s._v(" "),n("p",[s._v("onDragEnter")]),s._v(" "),n("p",[s._v("onDragExit")]),s._v(" "),n("p",[s._v("onDragLeave")]),s._v(" "),n("p",[s._v("onDragOver")]),s._v(" "),n("p",[s._v("onDragStart")])])}),[],!1,null,null,null);n.default=t.exports}}]);