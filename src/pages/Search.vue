<template>
  <div id="app">
    <!-- <br />
    <br /> -->
    <center>
      <div class="list" v-if="isShow">
        <!--        单个应用模块-->
        <div class="item" v-for="item in list" :key="item.id" @click="GotoJson(ReplaceUrl(item.icon))">
          <span class="show">
            <!--            应用icon-->
            <img :src="ReplaceUrl(item.icon)" alt="icon" class="icon-m" />
            <span class="app-title">
              <!--              应用名-->
              <div>
                <h3 class="app-name" :title="`${item.name}`">{{ item.name }}</h3>
              </div>
              <div>
                <h4 class="app-more" :title="`${item.more}`">{{ item.more }}</h4>
              </div>
            </span>
          </span>
          <img :src="ReplaceUrl(item.icon)" alt="icon" class="icon-bg" />
        </div>
      </div>
    </center>
    <center>
      <div class="notice" v-if="isEmpty">
        <h1 class="title">暂时没有找到相关应用 :)</h1>
      </div>
    </center>
  </div>

</template>

<script>
import { $_getResult } from '@/apis/api'

export default {
  name: "Search",
  data() {
    return {
      list: [],
      isShow: false,//判断是否有搜索，没有不创建app列表
      isEmpty: false,
      searchInput: "",
      downloadContent: "DOWNLOAD"
    };
  },
  methods: {
    GotoJson(icon) {
      let appUrl = icon.replace('icon.png', 'app.json')
      console.log(appUrl);
      /* console.log(
        `https://d.store.deepinos.org.cn//store/${this.category}/${pkgn}/app.json`
        //app.json 软件的详细信息
      ); */
      window.open(
        //pkgn 在仓库中的包名
        appUrl,
        "_self",
        ""
      );
    },
    ReplaceUrl(icon) {
      return icon.replace(/\+/g,'%2B')
    },
    async Search() {
      console.log(this.$route.query.keywords);
      if (this.$route.query.keywords) {
        let res = await $_getResult({ keyword: this.$route.query.keywords })
        this.list = res.data
        this.result = this.list.length
        console.log(this.result)
        if(this.result == 0){
          this.isEmpty = true
          this.isShow = false
        }
        else{
          this.isEmpty = false
          this.isShow = true
        }     
      }
    }
  },
  async mounted() {
    this.Search();
  },
  beforeCreate() {
    document.body.className = 'light-body';
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val);
        this.Search();
      },
      // 深度观察监听
      deep: true
    },
  },



};
</script>

<style scoped>
@import "../../static/style.css";
</style>

