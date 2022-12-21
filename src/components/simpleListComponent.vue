<template>
    <center>
        <h2 class="home-title">{{ listName }}</h2>
        <div class="list">
            <!--        单个应用模块-->
            <div class="item" v-for="item in list" :key="item.tip" @click="GotoJson(ReplaceUrl(item.Pkgname),item.Category)">
                <span class="show">
                    <!--            应用icon-->
                    <img :src="ReplaceUrl(`${imgSource}/store/${item.Category}/${item.Pkgname}/icon.png`)" alt="icon"
                        class="icon-m" />
                    <span class="app-title">
                        <!--              应用名-->
                        <div>
                            <h3 class="app-name" :title="`${item.Name}`">{{ item.Name }}</h3>
                        </div>
                        <div>
                            <h4 class="app-more" :title="`${item.More}`">{{ item.More }}</h4>
                        </div>
                    </span>
                </span>
                <img :src="ReplaceUrl(`${imgSource}/store/${item.Category}/${item.Pkgname}/icon.png`)" alt="icon"
                    class="icon-bg" />
            </div>
        </div>
        <!-- <button class="button" @click="ShowAll">查看全部</button> -->
    </center>
</template>

<script>
import axios from "axios";

export default {
    props: ['jsonUrl',"listName"],
    data() {
        return {
            list: [],
            category: "",
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
                    `${this.source}/store/` + this.jsonUrl
                )
                //applist.json 软件列表
                .then((res) => {
                    this.list = res.data;
                });
        },
        GotoJson(pkgn,category) {
            console.log(
                `${this.source}/store/${category}/${pkgn}/app.json`
                //app.json 软件的详细信息
            );
            window.open(
                //pkgn 在仓库中的包名
                `${this.source}/store/${category}/${pkgn}/app.json`,
                "_self",
                ""
            );
        },
        //ShowAll() {
        //    this.$router.push({name:'AppList',query: {theme:this.$route.query.theme},params:{jsonUrl:this.jsonUrl}});
        //},
        ReplaceUrl(icon) {
            return icon.replace(/\+/g, '%2B')
        },
    },
    mounted() {
        this.getUrl();
        this.getInfo();
    }
};
</script>