<template>
  <div id="app">
    <!--    主页-->
    <center>
      <div class="topShadows"></div>
      <h2 class="home-title">链接</h2>
      <div class="links">
        <!--        单个链接模块-->
        <div class="link" v-for="links in links" :key="links.tip" @click="openLink(links.url, links.type)">
          <div>
            <img class="links-cover" :src="ReplaceUrl(`${imgSource}${links.imgUrl}`)"/>
            <div class="links-data">
              <h3 class="link-name">{{ links.name }}</h3>
              <p class="link-more">{{ links.more }}</p>
            </div>
          </div>
        </div>
      </div>
    </center>
    <simpleListComponent v-for="lists in lists" :json-url="lists.jsonUrl" :listName="lists.name"></simpleListComponent>
  </div>
</template>

<script>
import axios from "axios";
import { IMG_AARCH64_SEARCH_IP, IMG_X86_SEARCH_IP, IMG_LOONG64_SEARCH_IP, AARCH64_SEARCH_IP, X86_SEARCH_IP, LOONG64_SEARCH_IP } from '../apis/https'
import simpleListComponent from "../components/simpleListComponent";

export default {
  name: 'Mainpage',
  components: {
    simpleListComponent
  },
  data() {
    return {
      links: [],
      lists: [],
      source: location.protocol + '//' + location.host + '/',
      imgSource: location.protocol + '//' + location.host + '/',
    };
  },
  methods: {
    getUrl() {
      switch (this.$route.query.arch) {
        case 'aarch64':
          this.source = AARCH64_SEARCH_IP;
          this.imgSource = IMG_AARCH64_SEARCH_IP;
          break;
        case 'loong64':
          this.source = LOONG64_SEARCH_IP;
          this.imgSource = IMG_LOONG64_SEARCH_IP;
          break;
        default:
          this.source = X86_SEARCH_IP;
          this.imgSource = IMG_X86_SEARCH_IP;
          break;
      }
    },
    getInfo() {
      axios
        .get(
          `${this.source}/home/homelinks.json`
        )
        //homelinks.json 链接列表
        .then((res) => {
          this.links = res.data;
        });

      axios
        .get(
          `${this.source}/home/homelist.json`
        )
        //homelist.json 列表
        .then((res) => {
          this.lists = res.data;
        });
    },
    openLink(url, type) {
      window.open(url, type, "")
    },
    ReplaceUrl(icon) {
            return icon.replace(/\+/g,'%2B')
    }
  },
  mounted() {
    this.getUrl();
    this.getInfo();
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.getUrl();
      },
      deep: true,
    },
  },
}
</script>