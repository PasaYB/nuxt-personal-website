<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SimpleButton from '@/components/SimpleButton.vue'
import HappySloth from '@/components/HappySloth.vue';
import Graph from '@/components/Graph.vue';
import Title from '@/components/Title.vue';
import Timeline from '@/components/Timeline.vue'
import Code from '@/components/Icons/Code.vue';

onMounted(() => {
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
    offset: 120, // Offset from the original trigger point
  })
})

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
    <!-- Title Section -->
    <section id="home" class="bg-sugar-glaze pt-24 h-[800px] w-full relative border-firebrick">
      <div 
        class="container pt-20 mx-auto h-full relative"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="200"
        >
        <Title/>
      </div>
            
      <div class="absolute bottom-0 bg-bulgarian-rose h-[100px] w-full overflow-hidden flex justify-center items-center">
        <div class="flex animate-marquee">
          <span class="text-white whitespace-nowrap font-windfold px-10">lorem ipsum dolor sit amet consectetur adipisicing elit. repellendus doloribus, voluptatibus eum unde facilis deserunt aliquid, fuga quos cum eaque rem expedita consequatur soluta facere. illum et praesentium odit placeat.</span>
          <!-- <span class="text-white whitespace-nowrap font-windfold px-10">ABOUT ME</span>
          <span class="text-white whitespace-nowrap font-windfold px-10">ABOUT ME</span>
          <span class="text-white whitespace-nowrap font-windfold px-10">ABOUT ME</span>
          <span class="text-white whitespace-nowrap font-windfold px-10">ABOUT ME</span> -->
        </div>
      </div>
    </section>

    <!-- Profile Section -->
    <section id="profile" class="h-[900px] w-full p-8 bg-sugar-glaze flex items-center">
      <!-- Container -->
      <div class="flex items-center justify-between text-white container mx-auto mb-16">
        <!-- Profile -->
        <div 
        class="relative flex justify-end bg-firebrick w-[800px] h-[500px] rounded-3xl text-white shadow-[15px_35px_60px_-10px_rgba(0,0,0,0.6)]"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
        >
          <img
            src="/images/chae.png"
            class="absolute -top-20 left-1/3 transform -translate-x-1/2 h-[580px] object-cover z-10 "
          />
          <div class="flex flex-col justify-start items-start p-8 pr-4 border-l-8 border-sugar-glaze">
            <!-- Title -->
            <h1 class="text-3xl font-extrabold mb-2">Hi Folks <span class="text-[#ffe604]">!!</span></h1>
            <!-- Name -->
            <p class="font-extrabold text-6xl text-left font-melon-fruit mt-2">
              I'M
              <span class="text-[#ffe604] font-melon-fruit">PASA</span>
            </p>
            
            <!-- Description -->
            <!-- <p class="w-[308px] overflow-hidden text-sm leading-relaxed break-words text-left font-semibold">
              I am a college student from Yogyakarta, Indonesia, currently learning and growing in the field of web development.
            </p> -->
            <div class="bg-[#ffe604] p-2 flex items-center justify-center my-4">
              <p class="flex justify-center items-center text-black text-md font-semibold gap-2">
                <Code class="size-6"/>
                  web developer
              </p>
            </div>
            <p class="w-64 overflow-hidden text-sm break-words font-semibold my-4">
              I enjoy to do coding, learning new things, and sharing knowledge with others. I am always eager to improve my skills and contribute to exciting projects.    
            </p>
            <div class="m-4 ml-10">
              <a href="#about">
                <SimpleButton>
                  more about me
                </SimpleButton>
              </a>
            </div>
          </div>
        </div>
        <!-- Graph -->
        <div 
        class="flex relative -top-[50px]"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-offset="400"
        >
          <Graph
            :skills="skills"  
          >
          <div class="bg-bulgarian-rose absolute -top-8 right-10 w-[250px] h-[75px] flex items-center justify-center">
            <p class="flex justify-center items-center text-white text-lg font-semibold p-4 gap-2">
              can we talk ?
            </p>
          </div>
          </Graph>
            <img
              src="/images/call.png"
              class="size-56 absolute right-8 -bottom-56 transform z-10 w-auto object-contain"
            />
        </div>
      </div>
    </section>

    <section id="about" class="flex h-[900px] p-8 bg-sugar-glaze items-start">
      <div class="flex justify-center items-start w-full container mx-auto mt-16">
        <!-- Left Side -->
        <div class="flex flex-col h-full items-start justify-center gap-y-18 w-1/3">
          <HappySloth class="h-[300px] w-[80%] shadow-[15px_35px_60px_-10px_rgba(0,0,0,0.6)] flex flex-col mt-4" data-aos="flip-right" :title="'Experience'">
            <div class="flex p-4 pt-2">
              <div class="flex flex-col text-yellow-400 bg-gradient-to-b from-neutral-700 to-neutral-500 p-1 px-2 font-bold gap-0">
                <p>2</p>
                <p>0</p>
                <p>2</p>
                <p>4</p>
              </div>
              <div class="flex flex-col justify-between mx-4">
                <div>
                  <p class="font-bold text-lg">Jul - Apr 2025</p>
                  <p class="font-semibold text-md">Full Stack Developer Intern</p>
                </div>
                <div class="self-end">
                  <p class="font-semibold">PT. Gamatechno | Indonesia</p>
                </div>
              </div>

            </div>
          </HappySloth>
          <HappySloth class="h-[250px] w-[80%] shadow-[15px_35px_60px_-10px_rgba(0,0,0,0.6)] flex flex-col self-center" data-aos="flip-right" :title="'Education'">
            <div class="flex flex-col p-4 pt-2">
              <div class="flex w-1/3 font-bold gap-0">
                  <p class="font-bold text-lg text-amber-400">PRESENT</p>
              </div>
              <div class="flex flex-col justify-between pl-3 border-l-2 h-[90px]">
                <div>
                  <p class="font-semibold text-md">Informatics Engineering</p>
                </div>
                <div class="self-end">
                  <p class="font-semibold">Universitas Pembangunan Veteran Yogyakarta</p>
                </div>
              </div>

            </div>
          </HappySloth>
        </div>
        <!-- Center Side -->
        <div class="flex flex-col items-center justify-center h-full w-1/3">
          <h1 class="text-5xl font-extrabold mb-8">A lil about me <span class="text-bulgarian-rose">!!</span></h1>
          <HappySloth class="h-[350px] w-[400px] shadow-[15px_35px_60px_-10px_rgba(0,0,0,0.6)] flex flex-col mt-18" data-aos="flip-down" :title="'Personal'">
            <h1 class="text-xl font-extrabold text-white ml-4">
              Hi, I am Lanang Gading Pasa!
            </h1>       
            <div class="flex p-4 pt-2">
              <p class="text-left text-sm leading-6 break-normal font-semibold">
                I'm a web developer focused on front-end development. I'm passionate about creating intuitive, visually appealing websites and always eager to learn new technologies to enhance my skills.
              </p>
            </div>
          </HappySloth>
        </div>
        <!-- Right Side -->
        <div class="flex flex-col h-full items-center justify-center gap-y-18 w-1/3">
          <HappySloth class="h-[200px] w-[75%] shadow-[15px_35px_60px_-10px_rgba(0,0,0,0.6)] mt-8" data-aos="flip-down" :title="'Interest'">
            <div class="flex justify-center items-center h-full p-4 pt-2 space-x-4 mt-4">
              <div class="flex justify-center items-center bg-white/70 backdrop-blur-md rounded-2xl size-18">
                <img src="/images/gim.png" class="z-10">
              </div>
              <div class="flex justify-center items-center bg-white/70 backdrop-blur-md rounded-2xl size-18">
                <img src="/images/ipod.png" class="z-10">
              </div>
              <div class="flex justify-center items-center bg-white/70 backdrop-blur-md rounded-2xl size-18">
                <img src="/images/cam.png" class="z-10">

              </div>
            </div>
          </HappySloth>
          <HappySloth class="h-[300px] w-[80%] shadow-[15px_35px_60px_-10px_rgba(0,0,0,0.6)] mt-8" data-aos="flip-down" :title="'Skills'">
            <p>
              HTML, CSS, JavaScript, Vue.js, Tailwind CSS
            </p>
          </HappySloth>
        </div>
      </div>
    </section>

    <section id="project" class="flex h-[900px] items-center  px-8 bg-firebrick">
      <div class="flex items-center container mx-auto">
        <div class="flex items-center justify-center h-1/2 w-1/2">
          <p class="text-sugar-glaze font-bold text-[80px] leading-[90px]">
            Here's <br/>
            What I've Been <br/>
            Working On Lately
          </p>
        </div>
        <div class="flex-1">
          <LatestRepos />
        </div>
      </div>
    </section>
    <section id="contact" class="flex h-[900px] items-center justify-between bg-sugar-glaze p-8">

    </section>
  </div>
</template>

<style scoped>
img{
  -webkit-user-drag: none;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;
}
</style>