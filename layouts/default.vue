<template>
  <div>
    <Html :lang="head.htmlAttrs.lang">
      <Head>
        <Title>My page</Title>
        <template v-for="link in head.link" :key="link.hid">
          <Link :id="link.hid" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.hid">
          <Meta :id="meta.hid" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <Menu/>
        <slot />
      </Body>
    </Html>
  </div>
</template>

<script setup lang="ts">
import { useLocaleHead } from '#i18n'

const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({ addDirAttribute: true, addSeoAttributes: true })
</script>