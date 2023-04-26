//新建api请求总线，api地址写这里，需要改变直接写这里
export const appListUrls = {
    chat: "/chat/applist.json",
    development: "/development/applist.json",
    games: "/games/applist.json",
    image_graphics: "/image_graphics/applist.json",
    music: "/music/applist.json",
    network: "/network/applist.json",
    office: "/office/applist.json",
    others: "/others/applist.json",
    reading: "/reading/applist.json",
    themes: "/themes/applist.json",
    tools: "/tools/applist.json",
    video: "/video/applist.json"
  };

export const AARCH64_SEARCH_IP = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1') ? 'https://d.store.deepinos.org.cn/aarch64-store' : `${window.location.origin}/aarch64-store`;
export const X86_SEARCH_IP = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1') ? 'https://d.store.deepinos.org.cn/store' : `${window.location.origin}/store`;


