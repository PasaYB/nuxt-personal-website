<script setup>
import SimpleButton from '@/components/SimpleButton.vue'
import HappySloth from '@/components/HappySloth.vue';
import Graph from '@/components/Graph.vue';
import Title from '@/components/Title.vue';
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
  <div class="w-full min-h-screen">
    <section id="home" class="bg-[#626F47] pt-24 h-[800px] w-full relative">
      <div class="container mx-auto h-full relative">
        <Title/>
      </div>
      
      <div class="absolute bottom-0 left-0 right-0 bg-[#000000] h-[150px] flex justify-center items-end w-full">
        <div class="absolute -bottom-10 w-20 h-20 rounded-full bg-[#FFC107] flex justify-center items-center shadow">
          <span class="text-center leading-6">Scroll Down</span>
        </div>
      </div>
    </section>

    <section id="profile" class="pt-24 h-[700px] w-full p-8 bg-[#FFF2E0]">
      <div class="flex items-center justify-between text-white container mx-auto">
        <div class="relative bg-[#B22222] w-[800px] h-[500px] rounded-3xl shadow-2xl text-white">
          <img
            src="/images/chae.png"
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

          <div class="bg-[#3B060A] absolute -right-12 bottom-8 w-[250px] h-[75px] flex items-center justify-center shadow-2xl">
            <p class="flex justify-center items-center text-white text-lg font-semibold p-4 gap-2">
              <Code class="size-6"/>
              junior web developer
            </p>
          </div>
        </div>
        <div class="flex relative -top-[50px]">
          <Graph
            :skills="skills"  
          >
          <div class="bg-[#3B060A] absolute -top-8 right-10 w-[250px] h-[75px] flex items-center justify-center">
            <p class="flex justify-center items-center text-white text-lg font-semibold p-4 gap-2">
              apalah
            </p>
          </div>
          </Graph>
          <div class="absolute right-8 -bottom-56 transform z-10">
            <img
              src="/images/call.png"
              class="size-56 w-auto object-contain"
              alt="stamp"
            />
          </div>
        </div>
      </div>
      </section>

      <section id="about" class="flex items-center justify-between p-8 pt-24 bg-[#FFF2E0]">
        <div class="grid grid-rows-2 gap-4 w-full container mx-auto">
          <div class="flex justify-between">
            <HappySloth class="w-[400px] mx-8 h-[400px] overflow-auto" title="Education">
        
            </HappySloth>
            <HappySloth class="w-[400px] mx-8 h-[400px] overflow-auto" title="Experience">
        
            </HappySloth>
          </div>
          <div class="flex justify-center">
            <HappySloth class="w-[400px] h-[400px] overflow-auto relative -top-[200px]" title="About Me">
      
            </HappySloth>
          </div>
        </div>
      </section>

      <section id="project" class="flex items-center justify-between p-8 pt-24">

      </section>
      <section id="contact" class="flex items-center justify-between  p-8 pt-24">

      </section>
  </div>
</template>
<!-- <Timeline 
title="Education" 
:timeline-data="educationData" 
/> -->