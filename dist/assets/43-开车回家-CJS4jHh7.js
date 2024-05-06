import{u as r,_ as i}from"./WrapperPost-ORcBZUie.js";import{o as p,g as o,w as c,e,B as t}from"./index-C7cZQplB.js";import"./dayjs.min-BQcujy4I.js";import"./dark-DYxvh2TT.js";const s=e("div",{class:"prose m-auto slide-enter-content"},[e("p",null,[e("div",{class:"table-of-contents"},[e("div",{class:"table-of-contents-anchor hidden"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3z"})])]),e("ul",null,[e("li",null,[e("a",{href:"#技术相关"},"技术相关 "),e("ul",null,[e("li",null,[e("a",{href:"#html2particle"},"html2particle "),e("ul",null,[e("li",null,[e("a",{href:"#实现思路"},"实现思路 ")]),e("li",null,[e("a",{href:"#开发逻辑"},"开发逻辑 ")])])]),e("li",null,[e("a",{href:"#vue-flat-sortable"},"vue-flat-sortable ")]),e("li",null,[e("a",{href:"#my-cover"},"my-cover ")])])]),e("li",null,[e("a",{href:"#生活相关"},"生活相关 "),e("ul",null,[e("li",null,[e("a",{href:"#开车回家"},"开车回家 ")]),e("li",null,[e("a",{href:"#试婚纱"},"试婚纱 ")]),e("li",null,[e("a",{href:"#返程"},"返程 ")])])]),e("li",null,[e("a",{href:"#本周阅读"},"本周阅读 ")])])])]),e("p",{align:"center"},[e("img",{alt:"my-cover",src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesmy-cover.png",width:"800"})]),e("h2",{id:"技术相关",tabindex:"-1"},[t("技术相关 "),e("a",{class:"header-anchor",href:"#技术相关","aria-hidden":"true"},"#")]),e("h3",{id:"html2particle",tabindex:"-1"},[t("html2particle "),e("a",{class:"header-anchor",href:"#html2particle","aria-hidden":"true"},"#")]),e("blockquote",null,[e("p",null,[t("Demo 及文档预览 : "),e("a",{href:"https://html2particle.mmeme.me/guide/demo.html",target:"_blank",rel:"noopener"},"https://html2particle.mmeme.me/guide/demo.html"),t(" NPM 包地址 : "),e("a",{href:"https://www.npmjs.com/package/html2particle",target:"_blank",rel:"noopener"},"https://www.npmjs.com/package/html2particle"),t(" GitHub 仓库地址 : "),e("a",{href:"https://github.com/pinky-pig/html2particle",target:"_blank",rel:"noopener"},"https://github.com/pinky-pig/html2particle"),t(" 掘金文档 : "),e("a",{href:"https://juejin.cn/post/7327305284854972450",target:"_blank",rel:"noopener"},"https://juejin.cn/post/7327305284854972450")])]),e("h4",{id:"实现思路",tabindex:"-1"},[t("实现思路 "),e("a",{class:"header-anchor",href:"#实现思路","aria-hidden":"true"},"#")]),e("p",null,"实现思路的话十分好理解，一句话就可以说的清。"),e("p",null,[e("strong",null,[t("先用 "),e("code",null,"html2canvas"),t(" 将 DOM 转成 canvas ，然后将 canvas 转成粒子开始做动画。")])]),e("p",null,[t("全部实现下来核心代码 200 多行，7kb左右吧。不过由于依赖了 "),e("code",null,"html2canvas"),t("，打包后还是有 200+ kb 的大小。")]),e("h4",{id:"开发逻辑",tabindex:"-1"},[t("开发逻辑 "),e("a",{class:"header-anchor",href:"#开发逻辑","aria-hidden":"true"},"#")]),e("p",null,[e("strong",null,"输入")]),e("p",null,"既然是要将 DOM 转为 Canvas 粒子，那么输入自然是 DOM 。这里预设了两种粒子效果，就如开篇的图所示。"),e("p",null,[e("strong",null,"获取图像数据")]),e("p",null,"调用方法，传入 DOM 和 动画类型初始化后，直接就是获取图像数据，这些数据就是后面要创建的粒子。"),e("p",null,[t("自己传入进来的 DOM 什么样，就能截图显示成什么样?（当然，"),e("code",null,"html2canvas"),t(" 的小缺陷还是避免不了，比如跨域图片的加载 。）")]),e("p",null,"然后除了图像数据外，还有 DOM 的尺寸也要记录下来，到时候在画布上渲染需要用得到。"),e("p",null,[e("strong",null,"开始动画")]),e("p",null,[t("初始化好后，自然不一定希望立即动画，所以导出了一个 "),e("code",null,"startAnimation"),t(" 方法，一旦调用就开始动画。")]),e("p",null,"而这个方法，自然有几处逻辑上的需要考虑，比如上一次的动画需要清除，动画的持续时间，动画结束之后又要清除以防内存泄露等等。考虑好后，自然就是逻辑上的开发了。"),e("p",null,[e("strong",null,"动画渲染")]),e("p",null,"终于到了关键的一步，而这里却很简单。"),e("p",null,"几个步骤："),e("ol",null,[e("li",null,"调用动画方法后，增加一个 Canvas 画布，用于渲染粒子。"),e("li",null,"requestAnimationFrame 渲染动画。"),e("li",null,[t("从 "),e("code",null,"html2canvas"),t(" 获取的图像数据，遍历创建粒子，这些粒子的位置随 requestAnimationFrame 改变。")])]),e("p",null,"核心逻辑就是这样，不过还有一些小细节要考虑。比如要更新一下传入 DOM 的位置，放置窗口 Resize 或者页面 Scroll 造成的位置影响。或者粒子的动画效果该如何去设置。不过这些都是优化项，主要初步的能渲染就行，粒子的动画效果无非就是改变 x || y 值，做匀速、匀加速、正弦余弦波动，几种组合在一起，整的花里胡哨的。"),e("p",null,"然后还有就是粒子的数量对浏览器的 FPS 的影响。"),e("h3",{id:"vue-flat-sortable",tabindex:"-1"},[t("vue-flat-sortable "),e("a",{class:"header-anchor",href:"#vue-flat-sortable","aria-hidden":"true"},"#")]),e("p",null,[t("之前使用 relative 、 absolute 、 transform 做的一个排序，感觉代码没有那么简洁。然后想使用 "),e("code",null,"draggable"),t(" 改写一下，基础排序比较简单，几行代码就可以实现，但是面临了动画的难点，看来还是需要研究一下")]),e("h3",{id:"my-cover",tabindex:"-1"},[t("my-cover "),e("a",{class:"header-anchor",href:"#my-cover","aria-hidden":"true"},"#")]),e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20240129101603.png",alt:"20240129101603"})]),e("p",null,"设计了一个自己的封面，画个一天给它做出来。"),e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20240129160707.png",alt:"20240129160707"})]),e("h2",{id:"生活相关",tabindex:"-1"},[t("生活相关 "),e("a",{class:"header-anchor",href:"#生活相关","aria-hidden":"true"},"#")]),e("h3",{id:"开车回家",tabindex:"-1"},[t("开车回家 "),e("a",{class:"header-anchor",href:"#开车回家","aria-hidden":"true"},"#")]),e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images%E5%91%A8%E6%9C%AB%E5%BC%80%E8%BD%A6%E5%9B%9E%E5%AE%B6.png",alt:"周末开车回家"})]),e("p",null,"开车回去，400公里作用。"),e("p",null,"第一次开车回老家，对于新手司机的我来说，南京内还是有点费劲。"),e("p",null,"而出了南京城没啥堵车，但还是花了四个半小时。南京到蚌埠这一段，开的有点累。后面一直到界首，就很放松了。"),e("p",null,"回南京的时候，也是到了曹庄服务区后，开始有点累了。"),e("p",null,"总的来说，第一次长途高速之旅，完美结束。回去的路程很舒服，可能是前面在南京开的很累，后面开的算是放松了。回南京的时候开的很累，因为后面开了那么久了，还在南京路况那么复杂的地方，更加累了。"),e("p",null,"没用定速巡航，最后脚踝及小腿肌肉很痛，还有脖子三角肌那里很累。"),e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images%E7%8B%97%E5%AD%902.jpg",alt:"狗子2"})]),e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images%E5%AE%B6%E9%87%8C%E7%8B%97%E5%AD%90.jpg",alt:"家里狗子"})]),e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images%E5%B0%8F%E7%8C%AB%E5%92%AA.jpg",alt:"小猫咪"})]),e("h3",{id:"试婚纱",tabindex:"-1"},[t("试婚纱 "),e("a",{class:"header-anchor",href:"#试婚纱","aria-hidden":"true"},"#")]),e("p",null,[e("img",{src:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images%E6%98%A5%E6%98%A5%E7%A7%80%E7%A6%BE%E6%9C%8D.jpg",alt:"春春秀禾服"})]),e("p",null,"去婚礼场子那里，问了经理的具体流程，说是婚庆流程会在结婚前两周通知，事无巨细，很清楚，让我们尽管放心。那就只剩婚纱和婚车了，他们提供的婚车，一辆车350，宝马车，但是感觉好贵，一个上午，如果是六辆车的话，那就一两千了又。还不如两辆好点的，其余的找亲戚借。"),e("p",null,"然后我们就去婚纱店了，也还是那个婚庆老板推荐的，2688三套加个跟妆，降不得价格。"),e("p",null,"春春试的都很好看，她很干净，适合素雅的衣服。因为有了上次婚纱照的经验，这次试婚纱也很快，因为知道自己的风格了。"),e("h3",{id:"返程",tabindex:"-1"},[t("返程 "),e("a",{class:"header-anchor",href:"#返程","aria-hidden":"true"},"#")]),e("p",null,"看到我妈鬓角白了好多，家里只有她自己。我在南京打工，我弟弟上高中学业压力大，也一周也就回家一次，我爸在外面打工，也是很少回去。回南京的时候，她给准备好的，自己榨的香油，还有自己炸的“麻叶”，还有自己家小麦磨得面粉，还有她转门在店里盯着，给我结婚准备弹的几床棉花被褥，都让我们带回南京。"),e("p",null,"棉花被子很舒服，红色的，看着也很喜庆。"),e("p",null,"唉，走的时候，其实感觉俺妈还是很孤独的在村里。"),e("h2",{id:"本周阅读",tabindex:"-1"},[t("本周阅读 "),e("a",{class:"header-anchor",href:"#本周阅读","aria-hidden":"true"},"#")])],-1),f="第43期 - 开车回家",b="2024/01/29",y="周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。",A=["#Weekly"],_="https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesmy-cover.png",w="https://mmeme.me/og%2F43-%E5%BC%80%E8%BD%A6%E5%9B%9E%E5%AE%B6.png",k="周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。",j=[{property:"og:title",content:"第43期 - 开车回家"},{name:"twitter:title",content:"第43期 - 开车回家"},{name:"description",content:"周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。"},{property:"og:description",content:"周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。"},{name:"twitter:description",content:"周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。"},{property:"og:image",content:"https://mmeme.me/og%2F43-%E5%BC%80%E8%BD%A6%E5%9B%9E%E5%AE%B6.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F43-%E5%BC%80%E8%BD%A6%E5%9B%9E%E5%AE%B6.png"},{name:"twitter:card",content:"summary_large_image"}],D={__name:"43-开车回家",setup(m,{expose:l}){const n={title:"第43期 - 开车回家",date:"2024/01/29",desc:"周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。",tags:["#Weekly"],cover:"https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imagesmy-cover.png",image:"https://mmeme.me/og%2F43-%E5%BC%80%E8%BD%A6%E5%9B%9E%E5%AE%B6.png",description:"周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。",meta:[{property:"og:title",content:"第43期 - 开车回家"},{name:"twitter:title",content:"第43期 - 开车回家"},{name:"description",content:"周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。"},{property:"og:description",content:"周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。"},{name:"twitter:description",content:"周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。"},{property:"og:image",content:"https://mmeme.me/og%2F43-%E5%BC%80%E8%BD%A6%E5%9B%9E%E5%AE%B6.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F43-%E5%BC%80%E8%BD%A6%E5%9B%9E%E5%AE%B6.png"},{name:"twitter:card",content:"summary_large_image"}]};return l({frontmatter:n}),r({title:"第43期 - 开车回家",meta:[{property:"og:title",content:"第43期 - 开车回家"},{name:"twitter:title",content:"第43期 - 开车回家"},{name:"description",content:"周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。"},{property:"og:description",content:"周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。"},{name:"twitter:description",content:"周末开车回家，去试婚纱，春春很漂亮。在界首这个小县城租婚纱3套，外加一个跟妆和伴郎伴娘服，要2688，好贵，最后我妈出的钱，谢谢俺妈。"},{property:"og:image",content:"https://mmeme.me/og%2F43-%E5%BC%80%E8%BD%A6%E5%9B%9E%E5%AE%B6.png"},{name:"twitter:image",content:"https://mmeme.me/og%2F43-%E5%BC%80%E8%BD%A6%E5%9B%9E%E5%AE%B6.png"},{name:"twitter:card",content:"summary_large_image"}]}),(d,u)=>{const a=i;return p(),o(a,{frontmatter:n},{default:c(()=>[s]),_:1})}}};export{_ as cover,b as date,D as default,y as desc,k as description,w as image,j as meta,A as tags,f as title};
