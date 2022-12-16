<template>
    <div id="app">
  <!--    主页-->
      <center>

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
        goNew()
        {
            let theme;
            let name = this.$route.params.name;
            name = name.toLowerCase();
            if(name.includes('dark'))
            {
                theme = 'dark';
            }else{
                theme = 'light';
            }
            console.log(name);
            name = name.replace(/dark/g, '');
            console.log(name);
            if(name == "")
            {
                this.$router.push({name:'MainPage',query: {theme:theme}});
            }else{
                let oldType = ["programming","themes","musicandsound","games","photos","relations","tools","videos","others","network","office","reading"];
                let newType = ["development","themes","music","games","image_graphics","chat","tools","video","others","network","office","reading"];
                this.$router.push({name:'AppList',query: {type:newType[oldType.indexOf(name)],theme:theme}});
            }
        },
      },
      mounted() {
          this.goNew();
      },
      watch: {
      $route: {
        handler: function (val, oldVal) {
          console.log(val);
          this.goNew();
        },
        // 深度观察监听
        deep: true
      },
      },
    }
  </script>
  
  <style scoped>
  @import "../../static/style.css";
  </style>
  