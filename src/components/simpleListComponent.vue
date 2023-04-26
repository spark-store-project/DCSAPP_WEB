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
                @click="GotoJson(ReplaceUrl(item.Pkgname), item.Category)" />
        </div>
        <button class="button" @click="ShowAll">{{ showingAll ? '收起' : '查看全部' }}</button>
    </center>
</template>

<script>
import axios from "axios";
import PkgItem from "./PkgItem.vue";
import { AARCH64_SEARCH_IP, X86_SEARCH_IP } from '../apis/https'

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
            this.source = this.$route.query.arch === 'aarch64' ? AARCH64_SEARCH_IP : X86_SEARCH_IP;
            this.imgSource = this.$route.query.arch === 'aarch64' ? AARCH64_SEARCH_IP : X86_SEARCH_IP;
        },

        getInfo() {
            let jsonUrl
            if(this.jsonUrl.includes('http'))
            {
                jsonUrl = this.jsonUrl
            }else{
                jsonUrl = `${this.source}` + this.jsonUrl
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
                `${this.source}/${category}/${pkgn}/app.json`
                //app.json 软件的详细信息
            );
            window.open(
                //pkgn 在仓库中的包名
                `${this.source}/${category}/${pkgn}/app.json`,
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
