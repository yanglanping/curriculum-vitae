
// pc/移动端处理
var userAgent = navigator.userAgent;
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

// 项目
const projectArray = [
  {
    date:'2023-11 ~ 2023-12',
    name:'退款小程序',
    enterprise:'广州沧海传媒有限公司',
    details:`主要是给购买过公司旗下商户的产品的用户使用。用户出现误买或者其他等情况，想退款通过购买时支付详情中的交易订单或者商户订单进入小程序进行退款。
      退款会进入到一个系统审核，当系统审核完成后用户即可进行退款，退款成功失败会给到用户一个状态提示。
      如果用户有不满意的地方可以针对情况进行填写信息投诉，也可以联系商户/客服了解具体情况`,
    content:`1、项目的搭建，主要是通过uniapp + vue搭建项目
        2、封装uview中请求、响应拦截器、公共方法
        3、实现退款的业务逻辑功能。例如：存储数据进行审核，请求后端进行退款等。 
        4、后期的维护及更新`,
    technologyStack:'uniapp + uview'
  },
  {
    date:'2023-12 ~ 2023-12',
    name:'数据展示小程序',
    enterprise:'广州沧海传媒有限公司',
    details:`用于公司内部人员使用，方便公司人员随时查看公司业务的一个数据。`,
    content:`1、封装uniapp自带的请求，实现拦截器的效果
        2、封装公共的组件，使用vuex+minixs进行数据的交互
        3、使用ucharts绘画图表，通过uview组件实现全屏展示
        4、与后端配合，获取并处理数据，将其渲染到页面和图表
        5、后期的维护及更新
      `,
    technologyStack:'uniapp + uview + ucharts'
  },
  {
    date:'2022-12 ~ 2023-07',
    name:'岭南洞天药市',
    enterprise:'广东三道堂投资控股集团有限公司',
    details:`岭南洞天药市是线上线下相融合的中医药交易平台。
          主要围绕交易这个核心为中医药种植，加工，销售，服务环节赋能，为商家和个人提供线上服务。
          其中我主要负责的模块：框架的搭建与维护，十六大功能，溯源大屏检测系统`,
    content:`1、对岭南洞天药市沙盘进行维护及二次开发
      2、使用uniapp+firstui搭建岭南洞天药市框架，并对一些公共的组件和方法进行封装。运用vue+vant搭建web端，web端主要实现的是十六大功能
      3、溯源检测系统是岭南洞天药市溯源功能中的一个模块，主要是使用mtqq搭配硬件做一个植物数据的实时监控。实现是用uniapp+ucharts搭建的整体页面。
      通过封装axios拦截器，使用axios请求后台接口并进行页面数据的渲染
    `,
    technologyStack:'vue+vant,uniapp+firstui+ucahrts,axios,vuex等。'
  },
  {
    date:'2023-02 ~ 2023-03',
    name:'罗浮山八卦掌小程序',
    enterprise:'广东三道堂投资控股集团有限公司',
    details:`主要宣传八卦掌之术，其中有登录/入会，咨询以及功法教学`,
    content:`1、使用uniapp+first-ui搭建基本框架
    2、封装公共组件（方法）和拦截器
    3、使用webview连接web端
    4、使用vant+vue搭建web页面，使用FTP管理
    5、与后端有效的沟通，并渲染数据
    `,
    technologyStack:'vue,uniapp,firstui,vant,sass,axios,ftp'
  }
]
// console.log(page)
// let pageIndex = page==1?page-1:(isMobile?(page-1)*3:(page-1)*2);  //从第几个开始截取
// let numberJudge = isMobile?projectArray.length-pageIndex>2:projectArray.length-pageIndex>3; //判断除去截取的部分后面是否还有数据，得到截取指定个数，还是后面的全部
// console.log(pageIndex,numberJudge,page)
// var tempArr = isMobile?(numberJudge?:projectArray.slice(pageIndex)):(numberJudge?projectArray.slice(pageIndex,2):projectArray.slice(pageIndex));
var pageIndex = page-1;
var tempArr = [];
if(isMobile){ //是否是手机端，手机端展示两个，电脑展示三个
  if(page!=1) pageIndex = pageIndex*3;
  tempArr = projectArray.length-pageIndex>3?projectArray.slice(pageIndex,3):projectArray.slice(pageIndex);
}else{
  if(page!=1) pageIndex = pageIndex*2;
  tempArr = projectArray.length-pageIndex>2?projectArray.slice(pageIndex,2):projectArray.slice(pageIndex);
}
tempArr.forEach(item => {
  // 创建容器
  const box = document.createElement('div');
  box.className = 'box';

  const title = document.createElement('div');
  title.classList.add('title','flex-around-center')
  const titleDate = document.createElement('div')
  titleDate.textContent=item.date;
  const titleName = document.createElement('h2')
  titleName.textContent=item.name;
  const titleCompany = document.createElement('b')
  titleCompany.textContent=item.enterprise;

  const p = document.createElement('p');
  const pB =  document.createElement('b');
  pB.textContent = '项目描述：';
  p.textContent = item.details;
  
  const mainContent = document.createElement('div');
  const contentB = document.createElement('b');
  contentB.textContent = '主要实现：';
  const ol = document.createElement('ol');

  var contentArr = item.content.replace(/\s/g, '').split(/\d+、/);
  contentArr.forEach(it=>{
    if(it.length>0){
      const li = document.createElement('li');
      li.textContent = it;
      ol.appendChild(li);
    }
  })

  const technologyStack = document.createElement('div');
  const stackB = document.createElement('b');
  stackB.textContent = '技术栈：';
  stackB.style.color = 'black';

  technologyStack.className = 'technology-stack';
  technologyStack.textContent = item.technologyStack;

  document.body.appendChild(box);
  box.appendChild(title);
  title.appendChild(titleDate);
  title.appendChild(titleName);
  title.appendChild(titleCompany);

  box.appendChild(p);
  p.insertBefore(pB,p.firstChild);  //新增节点到前面
  
  box.appendChild(technologyStack);
  technologyStack.insertBefore(stackB,technologyStack.firstChild);

  box.appendChild(mainContent);
  mainContent.appendChild(contentB);
  mainContent.appendChild(ol);
});