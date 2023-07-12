export default {
  target: "static",
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "de",
    },
    title:
      "GM Professional Hairstudio - Der Bestbewerteste Salon in Freiburg im Breisgau",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Besuchen Sie den stilvollen und modernen GM Professional Hairstudio im Güterbahnhof von Freiburg. Unsere professionell ausgebildeten Friseure erfüllen jeden Kundenwunsch.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:title",
        content:
          "GM Professional Hairstudio - Der Bestbewerteste Salon in Freiburg im Breisgau",
      },
      {
        property: "og:description",
        content:
          "Besuchen Sie den stilvollen und modernen GM Professional Hairstudio im Güterbahnhof von Freiburg. Unsere professionell ausgebildeten Friseure erfüllen jeden Kundenwunsch.",
      },
      { property: "og:url", content: "https://www.gmhairstudio.de/" },
      {
        property: "og:image",
        content: "https://www.gmhairstudio.de/images/logo.jpg",
      },
      { property: "og:image:alt", content: "GM Professional Hairstudio Logo" },
      { property: "og:site_name", content: "GM Professional Hairstudio" },
      { property: "og:locale", content: "de_DE" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "GM Professional Hairstudio - Der Bestbewerteste Salon in Freiburg im Breisgau",
      },
      {
        name: "twitter:description",
        content:
          "Besuchen Sie den stilvollen und modernen GM Professional Hairstudio im Güterbahnhof von Freiburg. Unsere professionell ausgebildeten Friseure erfüllen jeden Kundenwunsch.",
      },
      {
        name: "twitter:image",
        content: "https://www.gmhairstudio.de/images/logo.jpg",
      },
      { name: "twitter:image:alt", content: "GM Professional Hairstudio Logo" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "img/favicon.png" }],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-compress"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/markdownit",
  ],

  "nuxt-compress": {
    gzip: {
      threshold: 8192,
    },
    brotli: {
      threshold: 8192,
    },
  },

  markdownit: {
    runtime: true, // Support `$md()`
    preset: "default",
    linkify: true,
    breaks: true,
    html: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  generate: {
    dir: "public",
    fallback: true,
  },

  router: {
    scrollBehavior(to) {
      if (to.hash) {
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop,
          behavior: "smooth",
        });
      }
      return window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
