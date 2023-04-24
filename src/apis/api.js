import axios from 'axios';
import { AARCH64_SEARCH_IP, X86_SEARCH_IP, appListUrls } from './https'

export const searchApps = async (keyword, arch = '') => {
  try {
    const url = arch === 'aarch64' ? AARCH64_SEARCH_IP : X86_SEARCH_IP;
    const allData = [];
    for (const [key, value] of Object.entries(appListUrls)) {
      const response = await axios.get(url+value);
      const data = response.data;
      const filteredData = data.filter((item) => item.Name.toLowerCase().includes(keyword.toLowerCase()));
      const typedData = filteredData.map((item) => ({
        ...item,
        type: key,
        jsonurl: `${url}${key}/${item.Pkgname}/app.json`,
        iconurl: `${url}${key}/${item.Pkgname}/icon.png`
      }));
      allData.push(...typedData);
    }
    console.log(allData);
    return allData;
  } catch (error) {
    console.error(error);
  }
};
