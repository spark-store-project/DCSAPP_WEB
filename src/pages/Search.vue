<template>
  <div id="app">
    <!-- <br />
    <br /> -->
    <center>
      <div class="list" v-if="isShow">
        <!--        单个应用模块-->
        <PkgItem
          v-for="item in list"
          :key="item.id"
          :item="{Name: item.name, More: item.more}"
          :img-src="ReplaceUrl(item.icon)"
          @click="GotoJson(ReplaceUrl(item.icon))" />
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
import PkgItem from "../components/PkgItem.vue";

export default {
  name: "Search",
  components: {PkgItem},
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
