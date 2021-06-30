 
/*
 * @Description: xx模块
 * @Company: zhoupudata
 * @Author: duanhejin
 * @Date: 2021-06-29 20:32:28
 * @LastEditors: duanhejin
 * @LastEditTime: 2021-06-30 14:46:37
 */
// 左侧界面数据
const top10CodeDataDB = [
  {
    gitUserId: 146,
    deptName: "App组",
    additions: 85,
    dname: "周蓉君",
  },
  {
    gitUserId: 97,
    deptName: "App组",
    additions: 81,
    dname: "施德磊",
  },
  {
    gitUserId: 55,
    deptName: "Web组",
    additions: 80,
    dname: "朱隆飞",
  },
  {
    gitUserId: 139,
    deptName: "Web组",
    additions: 80,
    dname: "徐加辉",
  },
  {
    gitUserId: 106,
    deptName: "Web组",
    additions: 78,
    dname: "黄良辰",
  },
  {
    gitUserId: 163,
    deptName: "后端",
    additions: 77,
    dname: "高源龙",
  },
  {
    gitUserId: 157,
    deptName: "后端",
    additions: 74,
    dname: "李昊",
  },
  {
    gitUserId: 155,
    deptName: "后端",
    additions: 70,
    dname: "盛涛",
  },
  {
    gitUserId: 21,
    deptName: "后端",
    additions: 70,
    dname: "徐照钦",
  },
  {
    gitUserId: 145,
    deptName: "后端",
    additions: 69,
    dname: "张行行",
  },
];

const top10CodeDataShow = top10CodeDataDB
  .sort((a, b) => b.additions - a.additions)
  .map((item) => [item.dname, item.deptName, item.additions]);

module.exports = {
  "GET /api/leftPageData": {
    accessFrequency: 1500,
    peakFlow: 300,
    trafficSitua: {
      timeList: ["05/06", "05/12", "05/18", "05/24", "05/30", "06/06"],
      outData: [300, 240, 180, 120, 60, 0],
      inData: [300, 230, 230, 140, 80, 20],
      thirdData: [50, 40, 60, 20, 33, 44],
    },
    userSitua: {
      header: ["姓名", "部门", "综合值"],
      data: top10CodeDataShow,
    },
  },
};
