<template>
  <center>
    <h2 class="home-title">{{ listName }}</h2>
    <div class="simpleList" :class="{ 'show-all': showingAll }">
      <!--        单个应用模块-->
      <PkgItem
        v-for="item in list"
        :key="item.tip"
        :item="item"
        :img-src="ReplaceUrl(`${imgSource}/${item.Category}/${item.Pkgname}/icon.png`)"
        @click="GotoJson(ReplaceUrl(item.Pkgname), item.Category)"
      />
    </div>
    <button class="button" @click="ShowAll">{{ showingAll ? '收起' : '查看全部' }}</button>
  </center>
</template>

<script>
import axios from "axios";
import PkgItem from "./PkgItem.vue";
import { AARCH64_SEARCH_IP, X86_SEARCH_IP } from '../apis/https'

export default {
  components: { PkgItem },
  props: ['jsonUrl', "listName"],
  data() {
    return {
      list: [],
      category: "",
      downloadContent: "DOWNLOAD",
      source:
        location.protocol +
        "//" +
        location.hostname +
        "/" +
        (this.$route.query.arch === "aarch64" ? "aarch64-store" : "store"),
      imgSource:
        location.protocol +
        "//" +
        location.hostname +
        "/" +
        (this.$route.query.arch === "aarch64" ? "aarch64-store" : "store"),
    };
  },
  computed: {
    showingAll: {
      get() {
        const queryShowAll = this.$route.query.showAll;
        if (!queryShowAll) {
          return false;
        }
        return queryShowAll.split(",").includes(this.listName);
      },
      set(show) {
        const prev = this.$route.query.showAll;
        const next = [
          ...(prev ? prev.split(",").filter((n) => n !== this.listName) : []),
          ...(show ? [this.listName] : []),
        ].join(",");
        this.$router.replace({ query: { ...this.$route.query, showAll: next } });
      },
    },
  },
  methods: {
    getUrl() {
      if (location.hostname == "localhost" || location.hostname == "127.0.0.1") {
        this.source = this.$route.query.arch === "aarch64" ? AARCH64_SEARCH_IP : X86_SEARCH_IP;
        this.imgSource = this.$route.query.arch === "aarch64" ? AARCH64_SEARCH_IP : X86_SEARCH_IP;
      } else {
        this.source = `${location.protocol}//${location.hostname}/${
          this.$route.query.arch === "aarch64" ? "aarch64-store" : "store"
        }`;
        this.imgSource = `${location.protocol}//${location.hostname}/${
          this.$route.query.arch === "aarch64" ? "aarch64-store" : "store"
        }`;
      }
    },
    getInfo() {
      let jsonUrl;
      if (this.jsonUrl.includes("http")) {
        jsonUrl = this.jsonUrl;
      } else {
        jsonUrl = `${this.source}` + this.jsonUrl;
      }

      axios.get(jsonUrl).then((res) => {
        this.list = res.data;
      });
    },
    GotoJson(pkgn, category) {
      console.log(`${this.source}/${category}/${pkgn}/app.json`);
      window.open(`${this.source}/${category}/${pkgn}/app.json`);
    },
  },
};
</script>

