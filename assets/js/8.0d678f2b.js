(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{233:function(t,a,n){},236:function(t,a,n){"use strict";var e=n(233);n.n(e).a},415:function(t,a,n){"use strict";n.r(a);var e=n(243),s=n(244),o={components:{Navbar:e.a,Footer:s.a},data:function(){return{}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},pageClasses:function(){var t=this.$frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar},t]}},mounted:function(){},methods:{}},r=(n(236),n(8)),i=Object(r.a)(o,function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"theme-container",class:this.pageClasses},[this.shouldShowNavbar?a("Navbar"):this._e(),this._v(" "),a("Footer")],1)},[],!1,null,null,null);a.default=i.exports}}]);