<template>
  <div id="app">
    <div class="category-selector">
      <button v-for="(value, key) in categories"
              :class="{active: activeCategory === key}"
              @click="selectCategory(key)"
              v-if="includesTypeList(key)">
        {{value}}
      </button>
    </div>

    <center>
      <div class="search-list" v-if="isShow">
        <!-- 单个应用模块-->
        <PkgItem v-for="item in filteredList" :key="item.id"
                 :item="{Name: item.Name, More: item.More}"
                 :img-src="ReplaceUrl(item.iconurl)"
                 @click="GotoJson(ReplaceUrl(item.jsonurl))" />
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
import { searchApps, typeList } from '@/apis/api'
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
      downloadContent: "DOWNLOAD",
      categories: {
        all: "全部",
        chat: "聊天",
        development: "开发",
        games: "游戏",
        image_graphics: "图像与图形",
        music: "音乐",
        network: "网络",
        office: "办公",
        others: "其他",
        reading: "阅读",
        themes: "主题",
        tools: "工具",
        video: "视频",
      },
      activeCategory: 'all', // 默认选中 All 分类
    };
  },
  computed: {
    filteredList() {
      // 根据当前选中的分类筛选出符合条件的列表
      if (this.activeCategory === 'all') {
        return this.list;
      } else {
        return this.list.filter(item => item.type === this.activeCategory);
      }
    },
  },
  methods: {
    GotoJson(icon) {
      let appUrl = icon.replace('icon.png', 'app.json')
      console.log(appUrl);
      window.open(
        appUrl,
        "_self",
        ""
      );
    },
    ReplaceUrl(icon) {
      return icon.replace(/\+/g,'%2B')
    },
    async Search() {
      if (this.$route.query.keywords) {
        const res = await searchApps(this.$route.query.keywords,this.$route.query.arch);
        
        this.list = res;
        this.isShow = true;
        if (this.result === 0) {
          this.isEmpty = true;
        } else {
          this.isEmpty = false;
        }
      }
    },
    selectCategory(category) {
      // 更新当前选中的分类
      this.activeCategory = category;
    },
    includesTypeList(key){
      return typeList.includes(key);
    }
  },
  async mounted() {
    this.Search();
    // 获取category-selector元素
    const categorySelector = document.querySelector('.category-selector');

    // 监听页面滚动事件
    window.addEventListener('scroll', function() {
      // 获取滚动条的scrollTop属性
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > 60) {
        // scrollTop大于0时，添加阴影样式
        categorySelector.classList.add('shadow');
      } else {
        // 否则移除阴影样式
        categorySelector.classList.remove('shadow');
      }
    });
  },
  beforeDestroy() {
    // 移除页面滚动事件的监听器
    window.removeEventListener('scroll', function() {});
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val);
        this.Search();
      },
      deep: true,
    },
  },
};
</script>
