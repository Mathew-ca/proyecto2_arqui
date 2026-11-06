export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      // Se configuran como variables de entorno en Netlify
      snipcartKey: process.env.SNIPCART_KEY || 'PEGUE_AQUI_SU_PUBLIC_API_KEY',
      utterancesRepo: process.env.UTTERANCES_REPO || 'usuario/repositorio-comentarios'
    }
  },
  app: {
    head: {
      title: 'Luminaria - Tienda de lámparas',
      htmlAttrs: { lang: 'es' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Tienda en línea de lámparas de mesa, pie, colgantes, pared, escritorio y exterior.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://app.snipcart.com' },
        { rel: 'preconnect', href: 'https://cdn.snipcart.com' },
        { rel: 'stylesheet', href: 'https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.css' }
      ],
      script: [
        { src: 'https://cdn.snipcart.com/themes/v3.7.1/default/snipcart.js', async: true }
      ]
    }
  }
})
