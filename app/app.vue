<script setup lang="ts"></script>
<template>
  <NuxtLayout class="flex flex-col min-h-screen">
    <main role="main" class="h-full grow flex flex-col">
      <NuxtPage class="grow" />
    </main>
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
