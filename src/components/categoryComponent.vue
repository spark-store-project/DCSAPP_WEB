<template>
    <div class="app">
        <!-- <br />
        <br /> -->
        <center>
            <div class="topShadows"></div>
            <div class="list">
                <!--        单个应用模块-->
                <PkgItem
                    v-for="item in list"
                    :key="item.tip"
                    :item="item"
                    :img-src="ReplaceUrl(`${imgSource}/${category}/${item.Pkgname}/icon.png`)"
                    @click="GotoJson(ReplaceUrl(item.Pkgname))" />
            </div>
        </center>
    </div>
</template>

<script>
import axios from "axios";
import PkgItem from "./PkgItem.vue";
import { IMG_AARCH64_SEARCH_IP, IMG_X86_SEARCH_IP, IMG_LOONG64_SEARCH_IP, AARCH64_SEARCH_IP, X86_SEARCH_IP, LOONG64_SEARCH_IP } from '../apis/https'

export default {
    name: "categoryComponent",
    components: {PkgItem},
    listName: "",
    //category用来在App.vue中区分类别
    //category名称就是分类名
    props: ["category"],
    data() {
        return {
            list: [],
            downloadContent: "DOWNLOAD",
            source: location.protocol + '//' + location.host + '/',
            //imgSource: location.protocol + '//' + location.host + '/',
            imgSource: location.protocol + '//' + 'img-d.store.deepinos.org.cn' + '/',
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
                    `${this.source}/`+this.$route.query.type+`/applist.json`
                )
                //applist.json 软件列表
                .then((res) => {
                    this.category = this.$route.query.type;
                    // console.log(res.data, '<=======');
                    window.scrollTo(0, 0);
                    this.list.length = 0;
                    this.list = res.data;
                });
        },
        GotoJson(pkgn) {
            console.log(
                `${this.source}/${this.category}/${pkgn}/app.json`
                //app.json 软件的详细信息
            );
            window.open(
                //pkgn 在仓库中的包名
                `${this.source}/${this.category}/${pkgn}/app.json`,
                "_self",
                ""
            );
        },
        ReplaceUrl(icon) {
            return icon.replace(/\+/g,'%2B')
        },
    },
    mounted() {
        this.getUrl();
        this.getInfo();
    },
    watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val);
        this.getInfo();
      },
      // 深度观察监听
      deep: true
    },
    },
};
</script>
