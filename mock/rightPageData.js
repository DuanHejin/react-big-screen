// 右侧界面数据

const submitTimesDB = [
  {
    gitUserId: 5,
    deptName: "后端中间件",
    commitCount: 15,
    dname: "5月",
  },
  {
    gitUserId: 97,
    deptName: "前端Web组",
    commitCount: 19,
    dname: "4月",
  },
  {
    gitUserId: 139,
    deptName: "数据平台",
    commitCount: 8,
    dname: "3月",
  },
  {
    gitUserId: 146,
    deptName: "数据平台",
    commitCount: 12,
    dname: "2月",
  },
  {
    gitUserId: 157,
    deptName: "前端Web组",
    commitCount: 10,
    dname: "1月",
  },
];
const submitTimesShow = submitTimesDB
  // .sort((a, b) => b.commitCount - a.commitCount)
  .slice(0, 5)
  .map((item) => ({ name: item.dname, value: item.commitCount }));

module.exports = {
  "GET /api/rightPageData": {
    browseCategories: {
      data: [782, 621.2, 322.1, 525.3, 265, 224],
      indicator: [
        {
          name: "食物",
          max: 1000,
        },
        {
          name: "娱乐",
          max: 1000,
        },
        {
          name: "运动",
          max: 1000,
        },
        {
          name: "家居",
          max: 1000,
        },
        {
          name: "机械",
          max: 1000,
        },
        {
          name: "学习",
          max: 1000,
        },
      ],
    },
    departCycle: {
      data: [
        {
          name: "张行行",
          value: 30,
        },
        {
          name: "徐照钦",
          value: 50,
        },
        {
          name: "盛涛",
          value: 40,
        },
        {
          name: "徐加辉",
          value: 44,
        },
        {
          name: "朱隆飞",
          value: 52,
        },
      ],
    },
    userIdentityCategory: {
      data: submitTimesShow,
    },
    offline: {
      feedback: [
        {
          title: "舟易",
          number: 90,
        },
        {
          title: "CRM",
          number: 85,
        },
        {
          title: "店团",
          number: 82,
        },
      ],
      offlinePortalData: {
        data1: [80, 152, 101, 134, 90, 130],
        data2: [120, 182, 191, 210, 170, 110],
        data3: [110, 132, 201, 154, 150, 80],
        data4: [90, 142, 161, 114, 190, 170],
        xData: ["9:00", "12:00", "15:00", "18:00", "21:00", "00:00"],
        barData: [32.2, 60.0, 32.6, 36.4, 53.3, 35.0],
      },
    },
  },
};
