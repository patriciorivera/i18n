
export default defineNuxtConfig({
  features: {
    devLogs: false
  },
  experimental: {
    typedPages: true
  },
  vite: {
    // Prevent reload by optimizing dependency before discovery
    optimizeDeps: {
      include: ['@unhead/vue']
    }
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/devtools'
  ],
  vite: {
    build: {
      minify: false
    }
  },
  // debug: true,
  i18n: {
    experimental: {
      switchLocalePathLinkSSR: true,
      autoImportTranslationFunctions: true
    },
    compilation: {
      // jit: false,
      strictMessage: false,
      escapeHtml: true
    },
    bundle: {
      // dropMessageCompiler: true
    },
    langDir: 'locales',
    lazy: true,
    baseUrl: 'http://localhost:3000',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en.ts',
        name: 'English'
      },
      {
        code: 'es',
        iso: 'es-ES',
        file: 'es.ts',
        name: 'Español'
      }
    ],
    defaultLocale: 'en',
    dynamicRouteParams: true,
    customRoutes: 'config',
    pages: {
      about: {
        en: '/about',
        es: '/acerca'
      },
      'products/[slug]': {
        en: '/products/[slug]',
        es: '/productos/[slug]'

      }
    },
    //skipSettingLocaleOnNavigate: true,
    //detectBrowserLanguage: false,
    vueI18n: './vue-i18n.options.ts'
  },

  compatibilityDate: '2024-08-02'
})