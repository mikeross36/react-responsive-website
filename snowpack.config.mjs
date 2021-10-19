/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: {url:"/", static: true},
    src: {url: "/dist"}
  },
  plugins: [
    "@snowpack/plugin-sass",
    "@snowpack/plugin-react-refresh"
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    polyfillNode: true
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
