// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    // "@snowpack/plugin-webpack",
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-typescript",
      {
        /* Yarn PnP workaround: see https://www.npmjs.com/package/@snowpack/plugin-typescript */
        ...(process.versions.pnp ? { tsc: "yarn pnpify tsc" } : {}),
      },
    ],
  ],
  optimize: {
    // bundle: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 8000,
    open: "default", // 새 브라우저 탭에 개발 서버를 열기, "default" | "none" | "BROWSER_NAME"
    output: "dashboard", // 콘솔의 출력 모드를 지정, "stream" | "dashbaord"
    hostname: "localhost",
    hmr: true, // Hot Module Replacement(HMR, 수정사항을 즉시 반영) 활성화
    hmrErrorOverlay: true, // HMR 활성화시 자바스크립트 오류 표시 여부
    secure: false, // HTTP2 활성화 상태에서 HTTPS 사용 여부
  },
  buildOptions: {
    /* ... */
  },
};
