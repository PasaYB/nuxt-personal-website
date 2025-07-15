<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const sections = ['home', 'profile', 'about', 'project', 'contact']
const currentSection = ref('home')

// Define which sections have dark backgrounds (requiring light text)
// You can easily modify this array to add more dark sections
const darkSections = ['home']

// You could also define this more specifically if needed:
// const sectionStyles = {
//   home: { isDark: true },
//   profile: { isDark: false },
//   about: { isDark: false },
//   project: { isDark: false },
//   contact: { isDark: false }
// }

// Computed property to determine if current section has dark background
const isDarkSection = computed(() => darkSections.includes(currentSection.value))

// Scroll event handler to detect current section
const handleScroll = () => {
  const scrollPosition = window.scrollY + 100 // Add offset for navbar height

  sections.forEach(section => {
    const element = document.getElementById(section)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        currentSection.value = section
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="fixed w-full bg-transparent z-50">
    <nav class="px-4 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold transition-colors duration-300" 
          :class="isDarkSection ? 'text-white' : 'text-black'">
        Chae
      </h1>
      <ul class="hidden md:flex space-x-6">
        <li v-for="section in sections" :key="section">
          <a
            :href="'#' + section.toLowerCase()"
            class="transition-colors duration-300 hover:text-blue-600"
            :class="isDarkSection ? 'text-white' : 'text-black'"
          >
            {{ section }}
          </a>
        </li>
      </ul>
      <!-- Mobile menu toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden transition-colors duration-300"
              :class="isDarkSection ? 'text-white' : 'text-black'">
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
            class="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            @click="isOpen = false"
          >
            {{ section }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
