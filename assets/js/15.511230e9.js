(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{364:function(t,e,a){"use strict";a.r(e);var r=a(5),v=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("学习移动端、响应式，首先必须明白的就是像素和viewport的概念，才能搞清楚出现各种情况的原因。")]),t._v(" "),a("p",[t._v("本文主要介绍物理像素、逻辑像素的概念以及他们之间的关系，viewport的由来以及设置。下面与大家分享。")]),t._v(" "),a("h2",{attrs:{id:"一、像素的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、像素的概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、像素的概念")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("px")]),t._v(" ：逻辑像素 ，浏览器使用的抽象单位")]),t._v(" "),a("li",[a("strong",[t._v("dp、pt")]),t._v("：物理像素")]),t._v(" "),a("li",[a("strong",[t._v("dpr")]),t._v("：设备像素缩放比")]),t._v(" "),a("li",[a("strong",[t._v("ppi")]),t._v("：屏幕每英寸的像素数量，即单位英寸内的像素密度")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("ppi")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("120")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("160")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("240")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("320")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("dpr")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("0.75")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("1.0")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("1.5")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("2.0")])])])])]),t._v(" "),a("p",[a("strong",[t._v("ppi 越高，像素数越高，图像越清晰。")]),t._v(" "),a("strong",[t._v("Retina屏即高清屏，dpr 大于等于 2。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/7295449-25570b746afcccd5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"二、viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、viewport","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、viewport")]),t._v(" "),a("p",[t._v("web初期，网页渲染在手机上，会只显示页面的其中一部分。用户需要通过滑动屏幕才能查看网页的全貌。由于用户体验太差，于是浏览器商就引入了 viewport 的概念。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-手机浏览器的默认行为"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-手机浏览器的默认行为","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 手机浏览器的默认行为")]),t._v(" "),a("ul",[a("li",[t._v("页面默认先渲染在一个980px（ios）或其他的 viewport 里面")]),t._v(" "),a("li",[t._v("通过缩放，让用户能看到网页的全貌")])]),t._v(" "),a("blockquote",[a("p",[t._v("为什么渲染时，要加入 viewport ？\n直接渲染在小屏幕会"),a("strong",[t._v("导致排版布局等的混乱")])])]),t._v(" "),a("h3",{attrs:{id:"_2-2-viewport-的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-viewport-的概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 viewport 的概念")]),t._v(" "),a("p",[t._v("两个 viewport ："),a("strong",[t._v("视口（visual） viewport "),a("strong",[t._v("和")]),t._v("布局（layout） viewport")])]),t._v(" "),a("ul",[a("li",[t._v("视口 viewport 就是"),a("strong",[t._v("用户查看网页的视口")]),t._v("（可以理解为屏幕），可以通过"),a("strong",[t._v("缩放")]),t._v("来改变其大小")]),t._v(" "),a("li",[t._v("布局 viewport 就是"),a("strong",[t._v("网页渲染")]),t._v("的一个底层页面，ios 默认 viewport 为980 px 指的就是布局 viewport")])]),t._v(" "),a("blockquote",[a("p",[t._v("通过调用"),a("code",[t._v("document.body.clientWidth")]),t._v("查看默认布局Viewport\n"),a("code",[t._v("window.innerWidth")]),t._v("查看度量Viewport")])]),t._v(" "),a("h3",{attrs:{id:"_2-3-不使用默认布局-viewport-的原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-不使用默认布局-viewport-的原因","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3 不使用默认布局 viewport 的原因")]),t._v(" "),a("ul",[a("li",[t._v("不同设备的默认值不同，宽度"),a("strong",[t._v("不可控制")])]),t._v(" "),a("li",[t._v("缩放后连接可能因为太小不能准确触控，又有滚动，"),a("strong",[t._v("交互差")])]),t._v(" "),a("li",[t._v("font-size:40px=PC的12px，"),a("strong",[t._v("不规范")])])]),t._v(" "),a("h3",{attrs:{id:"_2-4-设置-viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-设置-viewport","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.4 设置 viewport")]),t._v(" "),a("p",[t._v("在 html 中使用元标签"),a("code",[t._v("meta")]),t._v("设置 viewport：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("viewport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("width=device-width,initial-scale=1,user-scalabel=no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h4",{attrs:{id:"相关参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 相关参数")]),t._v(" "),a("ul",[a("li",[t._v("width：设置布局viewport的值")]),t._v(" "),a("li",[t._v("initial-scale：设置页面的初始缩放")]),t._v(" "),a("li",[t._v("minimum-scale：最少缩放")]),t._v(" "),a("li",[t._v("maximum-scale：最大缩放")]),t._v(" "),a("li",[t._v("user-scalable：用户能否缩放")])]),t._v(" "),a("h3",{attrs:{id:"最佳设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 最佳设置")]),t._v(" "),a("p",[t._v("使视口 viewport = 设备宽度 = 布局 viewport")]),t._v(" "),a("ul",[a("li",[t._v("width = device-width，让布局 viewport 等于设备宽度，也就是说，设置 320px 的元素会铺满 iphone5 的屏幕宽度。")]),t._v(" "),a("li",[t._v("initial-scale = 1，设置初始缩放比为1，使得缩放比因为网页的大小而改变，让视口 viewport = 布局 viewport")]),t._v(" "),a("li",[t._v("user-scalable = no，使得视口 viewport = 布局 viewport 保持不变")])]),t._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("blockquote",[a("p",[t._v("慕课网教程："),a("a",{attrs:{href:"https://www.imooc.com/learn/494",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hello，移动WEB"),a("OutboundLink")],1)])]),t._v(" "),a("Quote",[t._v("生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。")])],1)},[],!1,null,null,null);e.default=v.exports}}]);