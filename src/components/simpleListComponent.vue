<template>
    <center>
        <h2 class="home-title">{{ listName }}</h2>
        <div class="simpleList" :class="{ 'show-all': showingAll }">
            <!--        单个应用模块-->
            <PkgItem
                v-for="item in list"
                :key="item.tip"
                :item="item"
                :img-src="ReplaceUrl(`${imgSource}/store/${item.Category}/${item.Pkgname}/icon.png`)"
                @click="GotoJson(ReplaceUrl(item.Pkgname), item.Category)" />
        </div>
        <button class="button" @click="ShowAll">{{ showingAll ? '收起' : '查看全部' }}</button>
    </center>
</template>

<script>
import axios from "axios";
import PkgItem from "./PkgItem.vue";

export default {
    components: {PkgItem},
    props: ['jsonUrl',"listName"],
    data() {
        return {
            list: [],
            category: "",
            downloadContent: "DOWNLOAD",
            source: location.protocol + '//' + location.host + '/',
            imgSource: location.protocol + '//' + location.host + '/',
        };
    },
    computed: {
        showingAll: {
            get() {
                const queryShowAll = this.$route.query.showAll;
                if (!queryShowAll) {
                    return false
                }
                return queryShowAll.split(',').includes(this.listName)
            },
            set(show) {
                const prev = this.$route.query.showAll;
                const next = [
                    ...(prev ? prev.split(',').filter(n => n !== this.listName) : []),
                    ...(show ? [this.listName] : [])
                ].join(',')
                this.$router.replace({query: {...this.$route.query, showAll: next}})
            }
        }
    },
    methods: {
        getUrl() {
            if (location.hostname == 'localhost' || location.hostname == '127.0.0.1') {
                this.source = 'https://d.store.deepinos.org.cn/';
                this.imgSource = 'https://d.store.deepinos.org.cn/';
            }
        },
        getInfo() {
            let jsonUrl
            if(this.jsonUrl.includes('http'))
            {
                jsonUrl = this.jsonUrl
            }else{
                jsonUrl = `${this.source}/store` + this.jsonUrl
            }

            axios
                .get(
                    jsonUrl
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
        ShowAll() {
            this.showingAll = !this.showingAll
        },
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

<style scoped>
.simpleList:not(.show-all) {
    height: 130px;
}
.simpleList.show-all {
    height: auto;
}
</style>
