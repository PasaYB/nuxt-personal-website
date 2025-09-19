<script setup>
import { ref, onMounted } from 'vue'

const repos = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://api.github.com/users/pasayb/repos?sort=created&direction=desc&per_page=5')
    const data = await res.json()
    repos.value = data
    console.log('Repos fetched:', repos.value)
  } catch (error) {
    console.error('Gagal fetch repos:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="p-6 max-w-4xl mx-auto">
    <div v-if="loading">Loading...</div>

    <ul v-else class="grid gap-4">
      <li v-for="(repo, index) in repos" :key="repo.id" class="rounded-3xl p-4 shadow bg-sugar-glaze w-full" data-aos="fade-down" :data-aos-duration="1000 + (index * 100)">
        <div class="text-sm text-gray-500 mt-2 flex justify-between">
          <div class="flex flex-col gap-8 px-2">
            <a class="text-lg font-semibold text-firebrick">
              {{ repo.name }}
            </a>
            <span class="text-firebrick">🕒 {{ new Date(repo.updated_at).toLocaleDateString('id-ID') }}</span>
          </div>
          <a :href="repo.html_url" target="_blank" class="flex items-center">
            <ExploreButton />
          </a>
        </div>
      </li>
    </ul>
  </section>
</template>