export const appName = 'Xu Happy'
export const appDescription = 'Xu Happy Web App'

export const navFilter = [
  { label: '首页', route: '/', children: [] },
  { label: '暂存', route: '/temporarily', children: [] },
  // { label: '项目', route: '/project', children: [] },
]

export const SITE = {
  title: '官网',
  author: 'Xu Happy',
  description: '记录 Xu Happy 主页',
  profileContent: '我是Xu Happy，目前在上海生活。',
  keywords: 'Xu Happy',
  coordinate: [121.46, 31.24],
  icon: 'https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/imageslogo.svg',
  pic: 'https://cdn.fliggy.coblogPagem/upic/2XFNGI.png',
  cv: 'https://cv.mmeme.me/',
  juejin: 'https://juejin.cn/user/149189314490520/posts',
  mail: 'mailto:xuhappy521@gmail.com',
  homePage: '/',
  profilePage: '/profile',
  twitterId: 'Xu Happy',
  twitterUrl: 'https://twitter.com/Xu HappynWang',
  githubId: 'china-xuhappy',
  githubHome: 'https://github.com/china-xuhappy',
  weeklyUrl: 'https://trade.xuhappy.com',
  repo: 'pinky-pig/what-is-my-astro-blog',
  notion: 'https://hail-manatee-fc5.notion.site/a3d8b723782e48a3b3570980e83c70ae?v=0c510fa996e2492b943e7746c1bd9974',
  consoleColorFulOutput: '%cDon\'t ignore your dreams \nDon\'t work too much \nsay what you think \ncultivate friendships \nbe happy~ ',
}

/**
 * 首页 Bento 通用组件布局
 */
export const bentoCommonComponentsCfg = [
  { id: 'Profile', x: 0, y: 0, width: 2, height: 2, index: 0 },
  { id: 'Weekly', x: 2, y: 0, width: 2, height: 1, index: 0 },
  { id: 'Mapbox', x: 0, y: 1, width: 2, height: 1, index: 0 },
  // { id: 'Dark', x: 3, y: 1, width: 1, height: 1, index: 0 },
  // { id: 'CountDown', x: 3, y: 1, width: 2, height: 1, index: 0 },
  // { id: 'Twitter', x: 4, y: 1, width: 1, height: 1, index: 0 },
  // { id: 'PlaneView', x: 0, y: 2, width: 1, height: 2, index: 0 },
  // { id: 'DragMotion', x: 3, y: 2, width: 1, height: 1, index: 0 },
  { id: 'Notion', x: 3, y: 2, width: 1, height: 1, index: 0 },
  // { id: 'PageTransition', x: 4, y: 2, width: 1, height: 1, index: 0 },
]

/**
 * 首页 Bento 自定义组件布局
 */
export const bentoCustomComponentsCfg = [
  // { id: 'StrokeText', x: 2, y: 2, width: 1, height: 1, index: 0 },
  // { id: 'Sticker8', x: 3, y: 3, width: 1, height: 1, index: 0 },
  // { id: 'Cover', x: 0, y: 2, width: 1, height: 2, index: 0 },
]

/**
 * 项目的内容
 */
export const PROJECTS = [
  {
    name: 'Xu Happy',
    desc: '个人网站',
    cover: 'https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230625154539.png',
    demoUrl: 'https://mmeme.me/',
    repoUrl: 'https://github.com/pinky-pig/Xu Happy',
  },
  {
    name: 'Superellipse SVG',
    desc: 'SVG 超椭圆生成器，支持直接下载及用作 SVG background-image',
    cover: 'https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230728150846.png',
    demoUrl: 'https://superellipse.mmeme.me/',
    repoUrl: 'https://github.com/pinky-pig/superellipse-svg',
  },
  {
    name: 'Encode SVG',
    desc: 'SVG 格式化，转 Base64 。background-image 可用',
    cover: 'https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20240222135732.png',
    demoUrl: 'https://encodesvg.mmeme.me/',
    repoUrl: 'https://github.com/pinky-pig/encode-svg',
  },
  {
    name: 'Html2particel',
    desc: 'DOM 元素转 Canvas 粒子',
    cover: 'https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20240222140019.png',
    demoUrl: 'https://html2particle.mmeme.me/guide/demo.html',
    repoUrl: 'https://github.com/pinky-pig/html2particle',
  },
  {
    name: 'What Is My V3 Dragblock',
    desc: 'Vue3 实现的拖拽组件',
    cover: 'https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230629151111.png',
    demoUrl: 'https://dragblock.mmeme.me/',
    repoUrl: 'https://github.com/pinky-pig/what-is-v3-dragblock',
  },
  {
    name: 'What Is My MouseTrail',
    desc: '浏览器插件：显示鼠标轨迹',
    cover: 'https://cdn.jsdelivr.net/gh/pinky-pig/pic-bed/images20230701013633.png',
    demoUrl: 'https://mousetrail.mmeme.me/',
    repoUrl: 'https://github.com/pinky-pig/what-is-my-mouse-trail/tree/refactor',
  },

]

export const giscusSetting = {
  'data-repo': 'pinky-pig/Xu Happy',
  'data-repo-id': 'R_kgDOLC_KIQ',
  'data-category': 'General',
  'data-category-id': 'DIC_kwDOLC_KIc4CexE9',
  'data-mapping': 'og:title',
  'data-strict': '0',
  'data-reactions-enabled': '1',
  'data-emit-metadata': '0',
  'data-input-position': 'bottom',
  'data-lang': 'zh-CN',
  'data-loading': '',
  'crossorigin': 'anonymous',
}

export enum MapboxSetting {
  token = 'pk.eyJ1IjoicGlua3ktcGlnIiwiYSI6ImNsZnJvZ2Q1cDAwZ3ozcG56bXFwbjAzZjAifQ.eEOFvRbKqZHQ3OxeqPBsXw',
  mapLightStyle = 'mapbox://styles/pinky-pig/clgc32u1e004g01n2bitvj86a',
  mapDarkStyle = 'mapbox://styles/pinky-pig/clft35kll000o01osk8svnlfg',
}
