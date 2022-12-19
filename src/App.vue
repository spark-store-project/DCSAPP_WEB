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

body {
  padding: 0;
  margin: 0;
  border: 0;
}
html,body{
  -webkit-touch-callout:none ;
  -webkit-text-size-adjust:none ;
  -webkit-tap-highlight-color:transparent ;
  -webkit-user-select:none ;
}
/*滚动条样式*/
::-webkit-scrollbar {
  transition: all 1000ms;
  width: 10px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-color);
  border-radius: 6px;
}

body
{
  background-color: var(--body-backgroundColor);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:transparent;
}
a {
  text-decoration: none;
  color: black;
}
/*.left{
    float: left;
    height:50rem;
    width: 20%;
    border-radius: 30px 0 0 30px;
    background: #e3e3e3;
  }
   */
.right {
  border: 0;
  padding: 0;
  margin: 0;
  float: right;
  height: 100%;
  width: 100%;
  position: relative;
}
/*
  .biaoqian{
    padding: 10px;
    margin:30px;
    border-radius: 10px;
    transition: all 0.3s;
  }
.biaoqian:hover {
  background: #3d9dea;
}

*/
.showRouterPage {
  /* border: solid 1px black; */
  width: 100%;
  max-height: 80%;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>


