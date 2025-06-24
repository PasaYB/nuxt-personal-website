<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const sections = ['home', 'about', 'project', 'contact']
</script>

<template>
  <header class="fixed w-full bg-[#3B060A] shadow z-50">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold text-white">Chae</h1>
      <ul class="hidden md:flex space-x-6">
        <li v-for="section in sections" :key="section">
          <a
            :href="'#' + section.toLowerCase()"
            class="text-white hover:text-blue-600 transition"
          >
            {{ section }}
          </a>
        </li>
      </ul>
      <!-- Mobile menu toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden text-gray-700">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden bg-white shadow">
      <ul class="flex flex-col items-center space-y-4 py-4">
        <li v-for="section in sections" :key="section">
          <a
            :href="'#' + section.toLowerCase()"
            class="text-gray-700 hover:text-blue-600 transition"
            @click="isOpen = false"
          >
            {{ section }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
