<template>
    <div class="bg-[#B22222] w-[600px] h-[350px] rounded-3xl shadow-2xl p-8 text-white">
        <slot/>
        <h1 class="text-2xl font-extrabold mb-4">Where I am Fluent</h1>
        <ul class="list-none">
        <li class="mb-[25px]" v-for="skill in skills" :key="skill.name">
            <div class="flex mb-[8px] justify-between items-center">
            <h5 class="text-white font-semibold">{{ skill.name }}</h5>
            <data :value="skill.percentage">{{ skill.percentage }}%</data>
            </div>
            <div class="bg-[#ffffff] w-full h-[8px] rounded-full overflow-hidden">
              <div class="skill-progress-fill" :style="{ width: skill.percentage + '%' }"></div>
            </div>
        </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
  skills: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.skill-progress-fill {
  background: #FFF287;
  height: 100%;
  border-radius: inherit;
  transition: width 0.3s ease;
}
</style>