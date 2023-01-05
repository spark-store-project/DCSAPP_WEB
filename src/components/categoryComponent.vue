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
                    :img-src="ReplaceUrl(`${imgSource}/store/${category}/${item.Pkgname}/icon.png`)"
                    @click="GotoJson(ReplaceUrl(item.Pkgname))" />
            </div>
        </center>
    </div>
</template>

<script>
import axios from "axios";
import PkgItem from "./PkgItem.vue";

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
            imgSource: "https://code.gitlink.org.cn/shenmo7192/spark-store-png-accelerate/raw/branch/master/",
        };
    },
    methods: {
        getUrl() {
            if (location.hostname == 'localhost' || location.hostname == '127.0.0.1') {
                this.source = 'https://d.store.deepinos.org.cn/';
                this.imgSource = 'https://d.store.deepinos.org.cn/';
            }
        },
        getInfo() {
            axios
                .get(
                    `${this.source}/store/`+this.$route.query.type+`/applist.json`
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
                `${this.source}/store/${this.category}/${pkgn}/app.json`
                //app.json 软件的详细信息
            );
            window.open(
                //pkgn 在仓库中的包名
                `${this.source}/store/${this.category}/${pkgn}/app.json`,
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
