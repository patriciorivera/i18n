<template>
  <div>
    <nav style="padding: 1em">
      <span v-for="locale in locales" :key="locale.code">
        <SwitchLocalePathLink :locale="locale.code">{{ locale.name }}</SwitchLocalePathLink> |
      </span>
    </nav>
    <nav>
        <ul>
            <li>
                <NuxtLinkLocale to="/">home</NuxtLinkLocale>
            </li>
            <li>
                <NuxtLinkLocale :to="{ name: 'about' }">{{ t('about') }}</NuxtLinkLocale>
            </li>
            <li>
                <span>{{ t('products') }}</span>
                <ul>
                    <li v-for="product in data" :key="product.id">
                        <NuxtLinkLocale
                            :to="{ name: 'products-slug', params: { slug: product?.slugs?.[locale] ?? 'none' } }"
                        >
                            {{ product.name?.[locale] }}
                        </NuxtLinkLocale>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>              
  </div>
</template>

<script setup>


//const route = useRoute()
const {
  t,
  locale,
  locales,
} = useI18n()

//const localePath = useLocalePath()

const { data } = await useAsyncData('products', () => $fetch(`/api/products`))

</script>

<style>

</style>