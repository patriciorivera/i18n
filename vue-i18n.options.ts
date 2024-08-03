
export default defineI18nConfig(() => {
  const config = useRuntimeConfig()
  return {
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    modifiers: {
      // @ts-ignore
      snakeCase: (str: string) => str.split(' ').join('-')
    },
  }
})
