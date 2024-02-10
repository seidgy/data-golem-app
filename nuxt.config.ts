import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Data Golem",
      meta: [
        { name: "description", content: "" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: 'og:site_name',  content: 'Data Golem'},
        { property: 'og:title',  content: 'Data Golem'},
        { property: 'og:description',  content: ''},
        { property: 'og:image',  content: '/OG.jpg'},
        { property: 'og:image:alt',  content: 'Imagem de página para Data Golem'},
        { name: 'twitter:image',  content: '/OG.jpg'},
        { name: 'twitter:image:alt',  content: 'Imagem de página para Data Golem'},
        { name: 'twitter:description', content: '' }
      ],
      script: [
        
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    }
  },
  css: [
    '/public/css/theme.scss',
    '/public/css/style.scss',
  ],
  components: {
    "dirs": [
      "~/components"
    ]
  },
  modules: [
    '@nuxt/content',
  ],
});
