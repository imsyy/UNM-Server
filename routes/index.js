const Router = require("koa-router");
const match = require("@unblockneteasemusic/server");
const router = new Router();

// 根目录
router.get("/", async (ctx) => {
  await ctx.render("index");
});

// 测试
router.get("/test", async (ctx) => {
  const data = await match(1962165898, [
    "kugou",
    "kuwo",
    "migu",
    "pyncmd",
  ]).then((res) => {
    return res;
  });
  ctx.body = {
    code: 200,
    message: "获取成功",
    data,
  };
});

// 匹配
router.get("/match", async (ctx) => {
  try {
    const id = ctx.request.query.id;
    const server = ctx.request.query.server
      ? ctx.request.query.server.split(",")
      : ["kugou", "kuwo", "migu", "bilibili", "pyncmd"];
    console.log("开始匹配：" + id + " - " + server);
    if (!id) {
      ctx.body = { code: 400, message: "参数不完整" };
      ctx.status = 400;
      return false;
    }
    const data = await match(id, server).then((res) => {
      return res;
    });
    // 反代
    const proxy = process.env.PROXY_URL;
    if (proxy && data.url.includes("kuwo")) {
      data.proxyUrl = proxy + data.url.replace(/^http:\/\//, "http/");
    }
    ctx.body = {
      code: 200,
      message: "匹配成功",
      data,
    };
  } catch (error) {
    console.log("匹配出现错误：" + error);
    ctx.body = {
      code: 500,
      message: "匹配失败",
    };
    ctx.status = 500;
  }
});

// 404 路由
router.use(async (ctx) => {
  await ctx.render("404");
});

module.exports = router;
