import axios from 'axios';
import { AARCH64_SEARCH_IP, X86_SEARCH_IP, appListUrls } from './https'

export const typeList=[]

export const searchApps = async (keyword, arch = '') => {
  try {
    typeList.length = 0;
    typeList.push("all");
    const url = arch === 'aarch64' ? AARCH64_SEARCH_IP : X86_SEARCH_IP;
    const promises = Object.entries(appListUrls).map(([key, value]) => axios.get(url+value)
      .then((response) => {
        const data = response.data;
        const filteredData = data.filter((item) =>
          item.Name.toLowerCase().includes(keyword.toLowerCase()));
        
          // 如果有符合条件的结果，将当前请求的类型添加到typeList中
          if (filteredData.length > 0) {
            typeList.push(key);
          }

        return filteredData.map((item) => ({
          ...item,
          type: key,
          jsonurl: `${url}/${key}/${item.Pkgname}/app.json`,
          iconurl: `${url}/${key}/${item.Pkgname}/icon.png`
      }));
    })
    .catch((error) => {
      console.error(error);
      return [];
    })
  );
  const allData = await Promise.all(promises).then((result) => result.flat());
  return allData;
} catch (error) {
  console.error(error);
}
};