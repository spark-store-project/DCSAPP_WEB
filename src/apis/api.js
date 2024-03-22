import axios from 'axios';
import { IMG_AARCH64_SEARCH_IP, IMG_X86_SEARCH_IP, AARCH64_SEARCH_IP, X86_SEARCH_IP, appListUrls } from './https'

export var typeList=[];

export async function searchApps(keyword, arch = '') {
  try {
    typeList.length = 0;
    typeList.push("all");
var url;
      var img_url;
      switch (this.$route.query.arch) {
        case 'aarch64':
          url = AARCH64_SEARCH_IP;
          img_url = IMG_AARCH64_SEARCH_IP;
          break;
        case 'loong64':
          url = LOONG64_SEARCH_IP;
          img_url = IMG_LOONG64_SEARCH_IP;
          break;
        default:
          url = X86_SEARCH_IP;
          img_url = IMG_X86_SEARCH_IP;
          break;
      }
    var promises = Object.entries(appListUrls).map(function([key, value]) {
      return axios.get(url+value)
        .then(function(response) {
          var data = response.data;
          var filteredData = data.filter(function(item) {
            return item.Name.toLowerCase().includes(keyword.toLowerCase()) || item.Pkgname.toLowerCase().includes(keyword.toLowerCase());
          });
          
          // 如果有符合条件的结果，将当前请求的类型添加到typeList中
          if (filteredData.length > 0) {
            typeList.push(key);
          }

          return filteredData.map(function(item) {
            return {
              ...item,
              type: key,
              jsonurl: `${url}/${key}/${item.Pkgname}/app.json`,
              iconurl: `${img_url}/${key}/${item.Pkgname}/icon.png`
            };
          });
        })
        .catch(function(error) {
          console.error(error);
          return [];
        });
    });

    const allData = [].concat.apply([], await Promise.all(promises));
    return allData;

  } catch (error) {
    console.error(error);
  }
};