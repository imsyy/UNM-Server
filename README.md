<!-- Thanks to https://zhconvert.org's Chinese (China) converter ! -->

<img src="./public/favicon.png" alt="logo" width="140" height="140" align="right">

# UNM-Server

匹配网易云无法播放歌曲

## 特性

- 支持多个音源，替换变灰歌曲链接

## 运行

```js
// 安装依赖
pnpm install

// 运行
pnpm start
```

## 反向代理

> 如需使用该功能，需要自行部署 [siteproxy](https://github.com/netptop/siteproxy)

如需在前端页面中使用，则可能会有部分音源的 `url` 不支持 `https`，则此时可以使用反向代理来解决（请在 `.env` 文件中填入部署后的接口地址）

## 使用

```http
GET https://example.com/match?id=1962165898&server=kuwo,kugou,bilibili
```

### 参数

| 参数   | 默认           |
| ------ | -------------- |
| id     | /              |
| server | 见下方音源清单 |

### 音源清单

| 名称                        | 代号         | 默认启用 | 注意事项                                                    |
| --------------------------- | ------------ | -------- | ----------------------------------------------------------- |
| QQ 音乐                     | `qq`         |          | 需要准备自己的 `QQ_COOKIE`                                  |
| 酷狗音乐                    | `kugou`      | ✅       |                                                             |
| 酷我音乐                    | `kuwo`       | ✅       |                                                             |
| 咪咕音乐                    | `migu`       | ✅       | 需要准备自己的 `MIGU_COOKIE`                                |
| JOOX                        | `joox`       |          | 需要准备自己的 `JOOX_COOKIE`，似乎有严格地区限制。          |
| YouTube（纯 JS 解析方式）   | `youtube`    |          | 需要 Google 认定的**非中国大陆区域** IP 地址。              |
| yt-download                 | `ytdownload` |          | **似乎不能使用**。                                          |
| YouTube（通过 `youtube-dl`) | `youtubedl`  |          | 需要自行安装 `youtube-dl`。                                 |
| YouTube（通过 `yt-dlp`)     | `ytdlp`      | ✅       | 需要自行安装 `yt-dlp`（`youtube-dl` 仍在活跃维护的 fork）。 |
| B 站音乐                    | `bilibili`   | ✅       |                                                             |
| 第三方网易云 API            | `pyncmd`     |          |                                                             |
