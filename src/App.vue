<!--
  writer:QINGDKJ
  E-mail:beautifuldistance@163.com
  Update date:2020/6/22
-->

<template>
  <div id="app">


    <div class="right">
      <center>
<!--        展示应用列表部分 (router)-->
        <router-view class="showRouterPage"></router-view>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  methods: {
    setTheme() {
      if (this.$route.query.theme == 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    },
    clickTitle: function() {
      window.open("/");
    }
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
};
</script>

<style>
@import url(../static/color.css);
@import url(../static/style.css);
</style>


