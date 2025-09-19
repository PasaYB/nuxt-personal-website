<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const sections = ['home', 'profile', 'about', 'project', 'contact']
const currentSection = ref('home')

const detectCurrentSection = () => {
  const scrollPosition = window.scrollY + 100

  sections.forEach((section) => {
    const element = document.getElementById(section)
    if (element) {
      const elementTop = element.offsetTop
      const elementBottom = elementTop + element.offsetHeight

      if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
        currentSection.value = section
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('scroll', detectCurrentSection)
  detectCurrentSection() // Check initial section
})

onUnmounted(() => {
  window.removeEventListener('scroll', detectCurrentSection)
})
</script>

<template>
  <header class="fixed bg-black/30 backdrop-blur-sm z-50 top-4 left-4 right-4 rounded-2xl" data-aos="fade-down" data-aos-duration="900">    
    <nav class="px-4 py-4 flex justify-between items-center">
      <div
        class="overflow-hidden py-[4px] pl-2 bg-transparent text-white text-xl w-24 font-bold border-none rounded-full cursor-pointer relative z-10 group"
      >
      Osa
        <span
          class="absolute w-36 h-32 -top-8 -left-2 bg-red-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
        ></span>
        <span
          class="absolute w-36 h-32 -top-8 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
        ></span>
        <span
          class="absolute w-36 h-32 -top-8 -left-2 bg-red-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
        ></span>
        <span
          class="group-hover:opacity-100 group-hover:duration-1000 duration-100 text-yellow-300 text-xs opacity-0 absolute top-2.5 left-5 z-10"
          >u got me!</span
        >
      </div>
      <ul class="flex justify-center items-center md:flex space-x-6 pr-2">
        <li v-for="section in sections" :key="section">
          <a
            :href="'#' + section.toLowerCase()"
            class="transition-colors duration-300 hover:text-yellow-300"
            :class="currentSection === section ? 'text-yellow-300' : 'text-white'"
          >
            {{ section }}
          </a>
        </li>
      </ul>
      <!-- Mobile menu toggle -->
      <button @click="isOpen = !isOpen" class="md:hidden transition-colors duration-300 text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
             viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </nav>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="md:hidden bg-black/30 backdrop-blur-sm">
      <ul class="flex flex-col items-center space-y-4 py-4">
        <li v-for="section in sections" :key="section">
          <a
            :href="'#' + section.toLowerCase()"
            class="transition-colors duration-300 hover:text-yellow-300"
            :class="currentSection === section ? 'text-yellow-300' : 'text-gray-700'"
            @click="isOpen = false"
          >
            {{ section }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>