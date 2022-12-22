<template>
    <center>
        <h2 class="home-title">{{ listName }}</h2>
        <div class="simpleList">
            <!--        单个应用模块-->
            <div class="item" v-for="item in list" :key="item.tip" @click="GotoJson(ReplaceUrl(item.Pkgname),item.Category)">
                <span class="show">
                    <!--            应用icon-->
                    <img :src="ReplaceUrl(`${imgSource}/store/${item.Category}/${item.Pkgname}/icon.png`)" alt="icon"
                        class="icon-m" />
                    <span class="app-title">
                        <!--              应用名-->
                            <h3 class="app-name" :title="`${item.Name}`">{{ item.Name }}</h3>
                            <h4 class="app-more" :title="`${item.More}`">{{ item.More }}</h4>
                    </span>
                </span>
                <img :src="ReplaceUrl(`${imgSource}/store/${item.Category}/${item.Pkgname}/icon.png`)" alt="icon"
                    class="icon-bg" />
            </div>
        </div>
        <button class="button" @click="ShowAll($event)">查看全部</button>
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
        ShowAll($event) {
            if(event.target.innerHTML == "查看全部")
            {
                event.currentTarget.parentElement.childNodes[2].style.height = "auto"
                event.target.innerHTML = "收起"
            }else{
                event.currentTarget.parentElement.childNodes[2].style.height = "130px"
                event.target.innerHTML = "查看全部"
            }
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