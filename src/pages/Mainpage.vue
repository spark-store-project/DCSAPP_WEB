<template>
  <div id="app">
<!--    主页-->
    <center>
      <br><br>
      <h1 class="title">Spark Store</h1>
      <h3 class="more-info">
        Have more.
      </h3>
      <div class="buttons">


        <!--
          愿望墙: http://www.shenmo.tech:420/?p=91
          应用问题反馈: http://www.shenmo.tech:420/?p=419
          APP建议: http://www.shenmo.tech:420/?p=422
          国际排名：http://distrowatch.com/table.php?distribution=deepin
          
          商店官网: https://www.spark-app.store/
          所有的问题反馈换成这统一的入口
          社区反馈中心: https://www.deepinos.org/t/spark-feedback
          gitee反馈中心: https://gitee.com/deepin-community-store/feedback
      -->
        <!--
        <button @click="Search" class="bt-feedback" disabled>搜索应用(暂未开放)</button>
        <br>
        <button @click="distrowatch" class="bt-feedback"><b>Deepin国际排名</b></button>
        -->
        <br>
        <button @click="Wishwall" class="bt-feedback">愿望墙</button>
        <br>
        <button @click="FeedBack" class="bt-feedback">反馈中心</button>
        <br>
        <button @click="Contri" class="bt-feedback">参与贡献</button>
        <br>
        <button @click="Donate" class="bt-feedback">随喜捐赠</button>
        <br>
        <button @click="Monitor" class="bt-feedback">节点监控</button>
        <br>
      </div>
    </center>
  </div>

</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {}
    },
    methods: {
      setTheme()
      {
            if(this.$route.query.theme == 'dark')
            {
                document.body.classList.add('dark'); 
            }else{
                document.body.classList.remove('dark');
            }
      },
      //反馈中心
      FeedBack() {
        window.open(" https://www.deepinos.org/t/spark-feedback", "_blank", "")
      },
      //愿望墙,跳转到指定页面
      Wishwall(){window.open(" https://www.deepinos.org/t/Wish-wall", "_blank", "")},
      
      //节点监控
      Monitor(){
        window.open("https://status.deepinos.org.cn/", "_self", "")
      },
      //参与贡献
      Contri(){window.open("https://gitee.com/deepin-community-store", "_blank", "")},
      //随喜捐赠，地址改为二维码地址
      Donate(){window.open("https://donate.deepinos.org.cn/donate/index.html", "_self", "")},
     /*  officialwebsite: function () {
        window.open(" https://www.spark-app.store/", "_self", "")
      }, */
      //国际排名
      /* distrowatch: function () {
        window.open("https://distrowatch.com/table.php?distribution=deepin", "_self", "")
      }, */
     /*  GiteeFeedBack: function () {
        window.open("https://gitee.com/deepin-community-store/feedback", "_self", "")
      }, */
      
     /*  Search: function () {
        this.$router.push({name: "Search"})
      } */
    },
    mounted() {
        this.setTheme();
    },
    watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val);
        this.setTheme();
      },
      // 深度观察监听
      deep: true
    },
    },
  }
</script>