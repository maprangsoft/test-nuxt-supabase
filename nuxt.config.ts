// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
        script: [
            {
              type: 'module',
                src: 'https://cdn.jsdelivr.net/gh/Young-Einstein10/messaging-widget@main/main.js',
            }
        ],
    }
}
})
