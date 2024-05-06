import{u as e,_ as i}from"./WrapperPost-ORcBZUie.js";import{o as E,g as r,w as p,e as s,B as t}from"./index-C7cZQplB.js";import"./dayjs.min-BQcujy4I.js";import"./dark-DYxvh2TT.js";const h=s("div",{class:"prose m-auto slide-enter-content"},[s("p",null,[s("div",{class:"table-of-contents"},[s("div",{class:"table-of-contents-anchor hidden"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[s("path",{fill:"currentColor",d:"M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"})])]),s("ul",null,[s("li",null,[s("a",{href:"#前言"},"前言 ")]),s("li",null,[s("a",{href:"#实现思路"},"实现思路 ")]),s("li",null,[s("a",{href:"#开发逻辑"},"开发逻辑 ")]),s("li",null,[s("a",{href:"#使用方法"},"使用方法 "),s("ul",null,[s("li",null,[s("a",{href:"#vue"},"vue ")])])]),s("li",null,[s("a",{href:"#结尾"},"结尾 ")])])])]),s("p",null,[s("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesdom2particle1.awebp",alt:"html2particleNew.gif"})]),s("h2",{id:"前言",tabindex:"-1"},[t("前言 "),s("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#")]),s("p",null,"在我网络冲浪的时候，无意之间看到了一位大佬做的粒子效果很是炫酷，不过只做了 Mac 端的示例，我于是就学习做了一个 Web 端的 DOM 转 Canvas 粒子动画效果。代码仓库、说明文档及NPM包都在结尾。"),s("p",null,[s("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesdom2particle2.awebp",alt:"dom2particle2"})]),s("h2",{id:"实现思路",tabindex:"-1"},[t("实现思路 "),s("a",{class:"header-anchor",href:"#实现思路","aria-hidden":"true"},"#")]),s("p",null,"实现思路的话十分好理解，一句话就可以说的清。"),s("p",null,[s("strong",null,[t("先用 "),s("code",null,"html2canvas"),t(" 将 DOM 转成 canvas ，然后将 canvas 转成粒子开始做动画。")])]),s("p",null,[t("全部实现下来核心代码 200 多行，7kb左右吧。不过由于依赖了 "),s("code",null,"html2canvas"),t("，打包后还是有 200+ kb 的大小。")]),s("h2",{id:"开发逻辑",tabindex:"-1"},[t("开发逻辑 "),s("a",{class:"header-anchor",href:"#开发逻辑","aria-hidden":"true"},"#")]),s("p",null,[s("strong",null,"输入")]),s("p",null,"既然是要将 DOM 转为 Canvas 粒子，那么输入自然是 DOM 。这里预设了两种粒子效果，就如开篇的图所示。"),s("p",null,[s("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesdom2particle3.awebp",alt:"dom2particle3"})]),s("p",null,[s("strong",null,"获取图像数据")]),s("p",null,"调用方法，传入 DOM 和 动画类型初始化后，直接就是获取图像数据，这些数据就是后面要创建的粒子。"),s("p",null,[t("自己传入进来的 DOM 什么样，就能截图显示成什么样?（当然，"),s("code",null,"html2canvas"),t(" 的小缺陷还是避免不了，比如跨域图片的加载 。）")]),s("p",null,"然后除了图像数据外，还有 DOM 的尺寸也要记录下来，到时候在画布上渲染需要用得到。"),s("p",null,[s("strong",null,"开始动画")]),s("p",null,[t("初始化好后，自然不一定希望立即动画，所以导出了一个 "),s("code",null,"startAnimation"),t(" 方法，一旦调用就开始动画。")]),s("p",null,"而这个方法，自然有几处逻辑上的需要考虑，比如上一次的动画需要清除，动画的持续时间，动画结束之后又要清除以防内存泄露等等。考虑好后，自然就是逻辑上的开发了。"),s("p",null,[s("strong",null,"动画渲染")]),s("p",null,"终于到了关键的一步，而这里却很简单。"),s("p",null,"几个步骤："),s("ol",null,[s("li",null,"调用动画方法后，增加一个 Canvas 画布，用于渲染粒子。"),s("li",null,"requestAnimationFrame 渲染动画。"),s("li",null,[t("从 "),s("code",null,"html2canvas"),t(" 获取的图像数据，遍历创建粒子，这些粒子的位置随 requestAnimationFrame 改变。")])]),s("p",null,"核心逻辑就是这样，不过还有一些小细节要考虑。比如要更新一下传入 DOM 的位置，放置窗口 Resize 或者页面 Scroll 造成的位置影响。或者粒子的动画效果该如何去设置。不过这些都是优化项，主要初步的能渲染就行，粒子的动画效果无非就是改变 x || y 值，做匀速、匀加速、正弦余弦波动，几种组合在一起，整的花里胡哨的。"),s("p",null,"然后还有就是粒子的数量对浏览器的 FPS 的影响。"),s("h2",{id:"使用方法",tabindex:"-1"},[t("使用方法 "),s("a",{class:"header-anchor",href:"#使用方法","aria-hidden":"true"},"#")]),s("p",null,[t("经过两天的时间，开发了一个 "),s("code",null,"html2particle"),t(" NPM 包，并写了一个简要的说明文档和用法示例。使用 TS 开发的，编译成 JS 发布上去的，所以使用也无关前端框架，都可以使用。这里只放一个 Vue 版本（包括样式）的代码示例，用 Vitepress 写的说明文档还有原生和 React 的用法。")]),s("h3",{id:"vue",tabindex:"-1"},[t("vue "),s("a",{class:"header-anchor",href:"#vue","aria-hidden":"true"},"#")]),s("pre",{class:"shiki shiki-themes github-dark catppuccin-latte",style:{"--s-dark":"#e1e4e8","--s-light":"#4c4f69","--s-dark-bg":"#24292e","--s-light-bg":"#eff1f5"},tabindex:"0"},[s("code",{class:"language-vue"},[s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"<"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"script"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," setup"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," lang"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"ts"'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"import"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," onMounted"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," ref "),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}}," from"),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}}," 'vue'")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"import"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," html2particle "),s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"from"),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}}," 'html2particle'")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"const"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," item4Ref"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," ref"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#04A5E5"}},"<"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"HTMLElement"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#04A5E5"}},">"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"let"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," handleItem4Click"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," ()"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," =>"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"const"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," isShow4"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," ref"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"("),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}},"true"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"function"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," initItem4Event"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"()"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  const"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," startAnimation"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," }"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," html2particle"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"(item4Ref"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"value"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"!"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," type"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}}," 'ExplodingParticle'"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," }"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"  handleItem4Click"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," ()"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," =>"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"    isShow4"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"value "),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," false")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"    startAnimation"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"  }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"const"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," item5Ref"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," ref"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#04A5E5"}},"<"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"HTMLElement"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#04A5E5"}},">"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"let"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," handleItem5Click"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," ()"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," =>"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"const"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," isShow5"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," ref"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"("),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}},"true"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"function"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," initItem5Event"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"()"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"  const"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," startAnimation"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," }"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}}," html2particle"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"(item5Ref"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"value"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"!"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},","),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}}," type"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}}," 'SinWaveParticle'"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," }"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"  handleItem5Click"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," ="),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," ()"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," =>"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"    isShow5"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"."),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"value "),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," false")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"    startAnimation"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"  }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"onMounted"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"("),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"()"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#179299"}}," =>"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"  initItem4Event"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B392F0","--s-light":"#1E66F5","--s-dark-font-style":"inherit","--s-light-font-style":"italic"}},"  initItem5Event"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"()")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"</"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"script"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"<"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"template"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"  <"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"div"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," class"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"container"'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"    <"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"div"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," ref"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"item4Ref"'),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," class"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"image"'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," @"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}},"click"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"handleItem4Click"),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"      <"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"img"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}}," v-if"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"isShow4"),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"'),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," src"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"/1.jpg"'),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," alt"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'""'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"    </"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"div"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"    <"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"div"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," ref"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"item5Ref"'),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," class"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"image"'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," @"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}},"click"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"handleItem5Click"),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"      <"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"img"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}}," v-if"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#4C4F69"}},"isShow5"),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"'),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," src"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'"/2.jpg"'),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," alt"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"="),s("span",{style:{"--s-dark":"#9ECBFF","--s-light":"#40A02B"}},'""'),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"    </"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"div"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"  </"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"div"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"</"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"template"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"<"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"style"),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}}," scoped"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B392F0","--s-light":"#7C7F93"}},"."),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}},"container"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  align-items"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," center"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  user-select"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," none"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  display"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," flex"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  flex-direction"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," row"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#B392F0","--s-light":"#7C7F93"}},"."),s("span",{style:{"--s-dark":"#B392F0","--s-light":"#DF8E1D"}},"image"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  width"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 300"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"px"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  height"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 200"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"px"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  cursor"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," pointer"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  margin"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 0"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," auto"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 20"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"px"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  display"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," flex"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  justify-content"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," center"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  align-items"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," center"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"img"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  object-fit"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," cover"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  width"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 100"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#FE640B"}},"%"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  height"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 100"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#FE640B"}},"%"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  border-radius"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 10"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"px"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  overflow"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," hidden"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  outline"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 2"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"px"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}}," solid"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#7C7F93"}}," #"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#4C4F69"}},"887cc8"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#1E66F5"}},"  outline-offset"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},":"),s("span",{style:{"--s-dark":"#79B8FF","--s-light":"#FE640B"}}," 2"),s("span",{style:{"--s-dark":"#F97583","--s-light":"#8839EF"}},"px"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#7C7F93"}},"}")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},"</"),s("span",{style:{"--s-dark":"#85E89D","--s-light":"#1E66F5"}},"style"),s("span",{style:{"--s-dark":"#E1E4E8","--s-light":"#179299"}},">")])])]),s("p",null,"码上掘金演示的是原生 HTML 示例。"),s("p",null,[s("a",{href:"https://code.juejin.cn/pen/7327590990317879331",target:"_blank",rel:"noopener"},"👀 码上掘金地址")]),s("h2",{id:"结尾",tabindex:"-1"},[t("结尾 "),s("a",{class:"header-anchor",href:"#结尾","aria-hidden":"true"},"#")]),s("p",null,"总的来说，因为样式炫目，才引起的兴趣研究一下这个。虽然代码量不多，不过还是有点意思。如果可以自定义传入粒子效果，而不是只有这两种，那应该更好用些。希望在 GitHub 仓库上帮我点个 star 🥺"),s("p",null,[t("Demo 及文档预览 : "),s("a",{href:"https://html2particle.mmeme.me/guide/demo.html",target:"_blank",rel:"noopener"},"https://html2particle.mmeme.me/guide/demo.html"),s("br"),t(" NPM 包地址 : "),s("a",{href:"https://www.npmjs.com/package/html2particle",target:"_blank",rel:"noopener"},"https://www.npmjs.com/package/html2particle"),s("br"),t(" GitHub 仓库地址 : "),s("a",{href:"https://github.com/pinky-pig/html2particle",target:"_blank",rel:"noopener"},"https://github.com/pinky-pig/html2particle")])],-1),m="开发一个炫酷的DOM转粒子动画",C="2024/01/08",u="canvas 粒子",f=["#全部","#困难"],A="https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesdom2particle1.awebp",D="https://mmeme.me/og%2F20-%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%82%AB%E9%85%B7%E7%9A%84DOM%E8%BD%AC%E7%B2%92%E5%AD%90%E5%8A%A8%E7%94%BB.png",v="canvas 粒子",w=[{property:"og:title",content:"开发一个炫酷的DOM转粒子动画"},{name:"twitter:title",content:"开发一个炫酷的DOM转粒子动画"},{name:"description",content:"canvas 粒子"},{property:"og:description",content:"canvas 粒子"},{name:"twitter:description",content:"canvas 粒子"},{property:"og:image",content:"https://mmeme.me/og%2F20-%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%82%AB%E9%85%B7%E7%9A%84DOM%E8%BD%AC%E7%B2%92%E5%AD%90%E5%8A%A8%E7%94%BB.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F20-%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%82%AB%E9%85%B7%E7%9A%84DOM%E8%BD%AC%E7%B2%92%E5%AD%90%E5%8A%A8%E7%94%BB.png"},{name:"twitter:card",content:"summary_large_image"}],b={__name:"20-开发一个炫酷的DOM转粒子动画",setup(d,{expose:a}){const l={title:"开发一个炫酷的DOM转粒子动画",date:"2024/01/08",desc:"canvas 粒子",tags:["#全部","#困难"],cover:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesdom2particle1.awebp",image:"https://mmeme.me/og%2F20-%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%82%AB%E9%85%B7%E7%9A%84DOM%E8%BD%AC%E7%B2%92%E5%AD%90%E5%8A%A8%E7%94%BB.png",description:"canvas 粒子",meta:[{property:"og:title",content:"开发一个炫酷的DOM转粒子动画"},{name:"twitter:title",content:"开发一个炫酷的DOM转粒子动画"},{name:"description",content:"canvas 粒子"},{property:"og:description",content:"canvas 粒子"},{name:"twitter:description",content:"canvas 粒子"},{property:"og:image",content:"https://mmeme.me/og%2F20-%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%82%AB%E9%85%B7%E7%9A%84DOM%E8%BD%AC%E7%B2%92%E5%AD%90%E5%8A%A8%E7%94%BB.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F20-%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%82%AB%E9%85%B7%E7%9A%84DOM%E8%BD%AC%E7%B2%92%E5%AD%90%E5%8A%A8%E7%94%BB.png"},{name:"twitter:card",content:"summary_large_image"}]};return a({frontmatter:l}),e({title:"开发一个炫酷的DOM转粒子动画",meta:[{property:"og:title",content:"开发一个炫酷的DOM转粒子动画"},{name:"twitter:title",content:"开发一个炫酷的DOM转粒子动画"},{name:"description",content:"canvas 粒子"},{property:"og:description",content:"canvas 粒子"},{name:"twitter:description",content:"canvas 粒子"},{property:"og:image",content:"https://mmeme.me/og%2F20-%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%82%AB%E9%85%B7%E7%9A%84DOM%E8%BD%AC%E7%B2%92%E5%AD%90%E5%8A%A8%E7%94%BB.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F20-%E5%BC%80%E5%8F%91%E4%B8%80%E4%B8%AA%E7%82%AB%E9%85%B7%E7%9A%84DOM%E8%BD%AC%E7%B2%92%E5%AD%90%E5%8A%A8%E7%94%BB.png"},{name:"twitter:card",content:"summary_large_image"}]}),(g,y)=>{const n=i;return E(),r(n,{frontmatter:l},{default:p(()=>[h]),_:1})}}};export{A as cover,C as date,b as default,u as desc,v as description,D as image,w as meta,f as tags,m as title};
