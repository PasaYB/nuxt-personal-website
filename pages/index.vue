<script setup>
import SimpleButton from '@/components/SimpleButton.vue'
import HappySloth from '@/components/HappySloth.vue';
import Graph from '@/components/Graph.vue';
import Timeline from '@/components/Timeline.vue'
import Code from '@/components/Icons/Code.vue';

const skills = [
  { name: 'Python', percentage: 40 },
  { name: 'JavaScript', percentage: 60 },
  { name: 'PHP', percentage: 70 },
  { name: 'HTML', percentage: 80 }
]

const educationData = [
  {
    title: 'Wirobrajan 3 Muhammadiyah Elementary School',
    period: '2013 — 2019'
  },
  {
    title: 'Ngaglik 2 Junior High School',
    period: '2019 — 2021'
  },
  {
    title: 'Depok 2 Vocational High School',
    period: '2021 — 2025'
  }
]
</script>

<template>
  <div class="scale-100 origin-center transition-transform duration-300">
  <section id="home" class="min-h-screen max-w-screen flex items-center justify-between bg-[#FFF2E0] p-8 pt-24">
    <div class="relative bg-[#B22222] w-[800px] h-[500px] rounded-3xl shadow-2xl text-white">
      <img
        src="/images/chae.png"
        alt="Foto"
        class="absolute -top-20 left-1/3 transform -translate-x-1/2 h-[580px] object-cover z-10 "
      />
      <div class="flex flex-col justify-end items-end p-8 pr-4">
        <!-- Judul -->
        <h1 class="text-5xl font-extrabold mb-4">HelloOooO <span class="text-[#3B060A]">!!</span></h1>
        <!-- Name -->
        <p class="w-[308px] font-bold text-md text-left mb-2">
          My name is Pasa
        </p>
        
        <!-- Description -->
        <p class="w-[308px] overflow-hidden text-sm leading-relaxed break-words text-left font-semibold">
          I am a college student from Yogyakarta, Indonesia, currently learning and growing in the field of web development.
        </p>
        <div class="flex justify-between gap-2 m-4">
          <a href="https://www.instagram.com/pxsstle" target="_blank" class="contact-link">
            <SimpleButton>
              follow
            </SimpleButton>
          </a>
          <a href="mailto:lananggading.pasa@gmail.com" class="contact-link">
            <SimpleButton>
              message
            </SimpleButton>
          </a>
        </div>
        <p class="w-64 overflow-hidden text-sm break-words font-semibold">
          I enjoy to do coding, learning new things, and sharing knowledge with others. I am always eager to improve my skills and contribute to exciting projects.    
        </p>
      </div>

      <div class="bg-[#3B060A] absolute -right-12 bottom-8 w-[250px] h-[75px] flex items-center justify-center">
        <p class="flex justify-center items-center text-white text-lg font-semibold p-4 gap-2">
          <Code class="size-6"/>
          junior web developer
        </p>
      </div>
    </div>
    <div class="flex relative -top-[50px]">
      <Graph
        :skills="skills"  
      />
    </div>

  </section>
  </div>

  <section id="about" class="min-h-screen flex items-center justify-between bg-[#FFF2E0] p-8 pt-24">
    <div class="grid grid-rows-2 gap-4 w-full">
      <div class="flex justify-between">
        <HappySloth class="w-[400px] mx-8 h-[400px] overflow-auto">
    
        </HappySloth>
        <HappySloth class="w-[400px] mx-8 h-[400px] overflow-auto">
    
        </HappySloth>
      </div>
      <div class="flex justify-center">
        <HappySloth class="w-[400px] h-[200px] overflow-auto relative -top-[200px]">
  
        </HappySloth>
      </div>
    </div>
  </section>

  <section id="project" class="min-h-screen flex items-center justify-between bg-[#f354d6] p-8 pt-24">

  </section>
  <section id="contact" class="min-h-screen flex items-center justify-between bg-[#36a7db] p-8 pt-24">

  </section>

      <!-- <Timeline 
      title="Education" 
      :timeline-data="educationData" 
    /> -->
</template>