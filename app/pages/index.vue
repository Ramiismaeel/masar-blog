<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  title: "masar",
})
useHead({
  meta: [{ property: "og:title", content: t("home.title") }],
})
const categories = [
  {
    title: t("home.topics.design"),
    icon: "🎨",
    class: "bg-indigo-100 ",
  },
  {
    title: t("home.topics.development"),
    icon: "💻",
    class: "bg-sky-100 ",
  },
  {
    title: t("home.topics.productivity"),
    icon: "🚀",
    class: "bg-emerald-100 ",
  },
  {
    title: t("home.topics.lifestyle"),
    icon: "✨",
    class: "bg-amber-100 ",
  },
]
</script>

<template>
  <div class="w-full max-w-full" role="main">
    <div class="bg-white dark:bg-black dark:text-white">
      <!-- Hero -->
      <section class="relative overflow-hidden">
        <div
          class="absolute inset-0 bg-linear-to-br from-indigo-50 via-white to-sky-50 dark:from-indigo-300 dark:via-black dark:to-sky-950"
        />

        <div class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div class="mx-auto max-w-3xl text-center">
            <span
              class="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-500 dark:bg-indigo-900 dark:text-indigo-300"
            >
              {{ $t("home.hero.eyebrow") }}
            </span>

            <h1
              class="mt-8 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
            >
              {{ $t("home.hero.title") }}
            </h1>

            <p
              class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400"
            >
              {{ $t("home.hero.subtitle") }}
            </p>

            <div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <NuxtLinkLocale
                to="/blog"
                class="rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
              >
                {{ $t("home.hero.ctaPrimary") }}
              </NuxtLinkLocale>

              <NuxtLinkLocale
                :to="{ path: '/', hash: '#categories' }"
                class="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                {{ $t("home.hero.ctaSecondary") }}
              </NuxtLinkLocale>
            </div>
          </div>
        </div>
      </section>

      <!-- Topics -->
      <section id="categories" class="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-slate-900 dark:text-slate-200">
            {{ $t("home.topics.title") }}
          </h2>
        </div>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(item, index) in categories"
            :key="index"
            class="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div
              :class="item.class"
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-xl"
            >
              {{ item.icon }}
            </div>
            <h3 class="font-semibold text-slate-900">
              {{ item.title }}
            </h3>
          </div>
        </div>
      </section>

      <!-- About -->
      <section class="bg-slate-50 py-20">
        <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 class="text-3xl font-bold text-slate-900">
            {{ $t("home.about.title") }}
          </h2>

          <p class="mt-6 text-lg leading-8 text-slate-600">
            {{ $t("home.about.text") }}
          </p>
        </div>
      </section>

      <!-- Newsletter -->
      <section class="mx-auto max-w-4xl px-6 py-20">
        <div
          class="rounded-3xl bg-linear-to-r from-indigo-600 to-sky-600 p-10 text-center text-white"
        >
          <h2 class="text-3xl font-bold">
            {{ $t("home.newsletter.title") }}
          </h2>

          <p class="mt-4 text-indigo-100">
            {{ $t("home.newsletter.subtitle") }}
          </p>

          <form class="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              :placeholder="$t('home.newsletter.placeholder')"
              class="flex-1 rounded-xl border-0 px-4 py-3 text-slate-900 outline-none"
            />

            <button
              class="rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-slate-100"
            >
              {{ $t("home.newsletter.button") }}
            </button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>
