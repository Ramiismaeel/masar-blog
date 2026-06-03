<script setup lang="ts">
const { t, locale } = useI18n()

definePageMeta({
  title: "masar",
})
useHead({
  meta: [{ property: "og:title", content: t("home") }],
})
</script>

<template>
  <div class="w-full max-w-full" role="main">
    <div class="w-full max-w-full">Masar Blog - {{ locale }}</div>
  </div>
</template>
