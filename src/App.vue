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
    clickTitle: function() {
      window.open("/");
    }
  }
};
</script>

<style>
@import url(../static/color.css);
@import url(../static/style.css);
</style>


