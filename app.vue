<script setup>
import { NuxtPage } from '#components';

useHead({
  title: 'Portfolio - Oasa',
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <!-- <NuxtRouteAnnouncer /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>