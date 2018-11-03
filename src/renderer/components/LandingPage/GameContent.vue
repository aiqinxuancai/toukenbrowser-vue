<template>
  <div>
      <main>
          <webview ref="foo" src="http://www.dmm.com/netgame/social/-/gadgets/=/app_id=825012/" id="webview" :preload="preload"></webview>

      </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preload: `file:${require("path").resolve(
        __dirname,
        "../LandingPage/GetGameFrame.js"
      )}`
    };
  },
  methods: {},
  computed: {},
  created() {
    console.log("111");
  },

  mounted() {
    const webview = document.getElementById("webview");

    // var ses = webview.getWebContents().session;
    // var mySocks = "socks5://127.0.0.1:1080";
    // ses.setProxy({ proxyRules: mySocks }, function () { return true; });

    // 设置允许使用_blank打开链接
    webview.addEventListener("new-window", e => {
      console.log("new-window", e);
      const protocol = require("url").parse(e.url).protocol;
      if (protocol === "http:" || protocol === "https:") {
        // shell.openExternal(e.url)
        window.open(e.url);
      }
    });
    webview.addEventListener("console-message", e => {
      console.log("console-message:", e.message);
    });
    webview.addEventListener("did-frame-finish-load", e => {
      console.log("did-frame-finish-load:", e);
    });
    webview.addEventListener("dom-ready", e => {
      webview.insertCSS(`
  body, p {
    color: #ccc !important;
    background-color: #333 !important;
  }
`);
      console.log("dom-ready:", e);
    });
  }
};
</script>

<style scoped>
webview {
  display: inline-flex;
  width: 640px;
  height: 480px;
}
</style>
