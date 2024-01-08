(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{318:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux-中配置静态网络连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-中配置静态网络连接"}},[s._v("#")]),s._v(" Linux 中配置静态网络连接")]),s._v(" "),a("p",[s._v("许多新的 Linux 发行版都带有网络管理工具，可以帮你自动连接到无线网络，但是能够为 Linux 机器建立静态网络不是更好吗，该笔记将展示如何使用不同的 Linux 工具检查 CentOs 机器的网络连接，如何使用 nmcli 工具添加静态网络配置。")]),s._v(" "),a("h2",{attrs:{id:"检查网络连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查网络连接"}},[s._v("#")]),s._v(" 检查网络连接")]),s._v(" "),a("p",[s._v("ping 命令是一个众所周知的的程序，可以快速的检查网络的连通性：")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("ping -c3 opensource.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中 -c3 选项表示你只 ping 三次")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/ping1.png",alt:"ping"}})]),s._v(" "),a("p",[s._v("如果连接到了互联网，将会收到类似的数据包相应")]),s._v(" "),a("h2",{attrs:{id:"检查连接信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查连接信息"}},[s._v("#")]),s._v(" 检查连接信息")]),s._v(" "),a("p",[s._v("可以用 ip add 命令检查网络信息")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/ping2.png",alt:"ping"}})]),s._v(" "),a("p",[s._v("运行此命令显示设备信息和 ip 地址等，稍后将要用到，因此记住")]),s._v(" "),a("h2",{attrs:{id:"检查网络信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查网络信息"}},[s._v("#")]),s._v(" 检查网络信息")]),s._v(" "),a("p",[s._v("通过 输入一下命令，可以在 /etc/sysconfig/network-scripts 中找到网络信息")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("\nls /etc/sysconfig/network-scripts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/ping3.png",alt:"ping"}})]),s._v(" "),a("p",[s._v("该截图 显示了 ifcfg-ens33 和 ifcfg-lo，但这些取决于你运行的 Linux 以及设备的设置方式")]),s._v(" "),a("h2",{attrs:{id:"显示可用的连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示可用的连接"}},[s._v("#")]),s._v(" 显示可用的连接")]),s._v(" "),a("p",[s._v("可以用 nmcli 工具显示当前网络，输入以下命令：")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("\nnmcli con show\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/ping4.png",alt:"ping"}})]),s._v(" "),a("p",[s._v("此截图显示一台设备处于活动状态：ens33")]),s._v(" "),a("h2",{attrs:{id:"检查网络连接是否已打开"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查网络连接是否已打开"}},[s._v("#")]),s._v(" 检查网络连接是否已打开")]),s._v(" "),a("p",[s._v("用上面的 ping 可以命令检查你是否可以接受数据包，但现在我们要通过 systemctl 命令调用 network 来监视，更新网络状态和排除故障")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("systemctl status network\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/ping5.png",alt:"ping"}})]),s._v(" "),a("p",[s._v("如果网络支持程序没有问题，那么运行此命令是你会看到 active")]),s._v(" "),a("h2",{attrs:{id:"添加静态网络连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加静态网络连接"}},[s._v("#")]),s._v(" 添加静态网络连接")]),s._v(" "),a("p",[s._v("现在准备添加静态网落连接。使用此步骤中 2 从 ip  add 中获取的设备名称，输入以下添加新连接：")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v('nmcli con add con-name "SomeName"  ifname YOUR__DEVICE autoconnect yes type YOUR_CONNECTION_TYPE\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/ping6.png",alt:"ping"}})]),s._v(" "),a("h2",{attrs:{id:"验证连接是否已被添加到网络脚本路径中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证连接是否已被添加到网络脚本路径中"}},[s._v("#")]),s._v(" 验证连接是否已被添加到网络脚本路径中")]),s._v(" "),a("p",[s._v("可以用 nmcli 工具修改新的连接信息")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("nmcli con mod\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个命令实际修改了/etc/sysconfig/network-scripts 目录下的网络配置脚本，这也是修改连接信息的另一种方法。\n通过以下命令")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("ls /etc/sysconfig/network-scripts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://wendaoshuai66.github.io/study/note/images/ping7.png",alt:"ping"}})]),s._v(" "),a("h2",{attrs:{id:"确认你可以看到连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确认你可以看到连接"}},[s._v("#")]),s._v(" 确认你可以看到连接")]),s._v(" "),a("p",[s._v("检查 MyLikeCafe 是否为可见的可用的连接，使用以下命令")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("nmclie con up Some_CONNECTION NAME\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("也可以用一下命令将其关闭：")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("nmcli con down Some_CONNECTION_NAME\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"将连接修改为静态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将连接修改为静态"}},[s._v("#")]),s._v(" 将连接修改为静态")]),s._v(" "),a("p",[s._v("用文本编辑器（如 Vim Emacs 或 Nano）打开  /etc/sysconfig/network-scripts/Some_CONNECTION_NAME,")]),s._v(" "),a("p",[s._v("把连接配置为静态，需要修改一个参数，并添加三个参数：")]),s._v(" "),a("p",[s._v("1.修改 BOOTPROTO 为 static")]),s._v(" "),a("p",[s._v("2.添加 IPADDR 及你要设置的静态 IP 地址，可以通过 ip add 命令看到")]),s._v(" "),a("p",[s._v("3.添加 NETMASK。这是子网掩码，可以通过 ip add 找到")]),s._v(" "),a("p",[s._v("4.添加 GATEWAY。这个是默认的网关的 ip 地址。可以通过 ip add 找到")]),s._v(" "),a("p",[s._v("你可能需要添加 DNS，PREFIX 或其他信息，具体情况取决于你的网络和计算机设置\n完成后重启")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("systemctl restart network\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("检查状态")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("systemctl status network\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"确认连接处于活动状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确认连接处于活动状态"}},[s._v("#")]),s._v(" 确认连接处于活动状态")]),s._v(" "),a("div",{staticClass:"language-plain line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-plain"}},[a("code",[s._v("nmcli con show\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);