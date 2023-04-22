import axios from 'axios';
import { AARCH64_SEARCH_IP,X86_SEARCH_IP } from './https'

export const searchApps = async (keyword, arch = '') => {
    try {
      const url = arch === 'aarch64' ? AARCH64_SEARCH_IP : X86_SEARCH_IP;
      const response = await axios.get(url);
      const data = response.data;
    
      // 创建索引
      const index = {};
      data.flat().forEach((item) => {
        index[item.Name.toLowerCase()] = item;
      });
  
      // 查找匹配的应用程序（大小写不区分）
      const filteredData = Object.values(index).filter((item) => item.Name.toLowerCase().includes(keyword.toLowerCase()));
      return filteredData;
    } catch (error) {
      console.error(error);
    }
  };