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
      -->
        <!--
        <button @click="Search" class="bt-feedback" disabled>搜索应用(暂未开放)</button>
        <br>
        -->
        <button @click="distrowatch" class="bt-feedback"><b>Deepin国际排名</b></button>
        <br>
        <button @click="Dream" class="bt-feedback">愿望墙</button>
        <br>
        <button @click="FeedBack" class="bt-feedback">问题反馈</button>
        <br>
        <button @click="Proposal" class="bt-feedback">APP建议</button>
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
      Dream: function () {
        window.open("http://www.shenmo.tech:420/?p=91", "_self", "")
      },
      FeedBack: function () {
        window.open("http://www.shenmo.tech:420/?p=419", "_self", "")
      },
      Proposal: function () {
        window.open("http://www.shenmo.tech:420/?p=422", "_self", "")
      },
      distrowatch: function () {
        window.open("https://distrowatch.com/table.php?distribution=deepin", "_self", "")
      },
      Search: function () {
        this.$router.push({name: "Search"})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    height: 700px;
    overflow: hidden;
    border: transparent;
    font-family: Bahnschrift;
  }
  .more-info {
    color: gray;
    font-weight: lighter;
  }

  .bt-feedback {
    width: 300px;
    padding: 10px;
    margin: 15px;
    /*margin-top: 40px;*/
    border: transparent;
    background: #F4F4F6;
    transition: all 0.25s;
    border-radius: 18px;
    color: #6d6d6d;
    -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .bt-feedback:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    -webkit-transform: scale(1.07, 1.07);
    transform: scale(1.07, 1.07);
  }

  .buttons {
    margin-top: 100px;
  }

</style>
