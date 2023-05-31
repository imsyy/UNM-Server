const getProxyUrl = (url) => {
  console.log(url);
  if (typeof url === "string") {
    if (typeof process.env.PROXY_URL === "string") {
      return process.env.PROXY_URL + url.replace(/^http:/, "");
    } else {
      return url;
    }
  } else {
    return null;
  }
};

module.exports = getProxyUrl;
