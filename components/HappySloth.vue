<template>
    <div class="bg-[#B22222] shadow-2xl rounded-3xl">
        <div class="flex items-center p-3 space-x-24 bg-[#8E1616]">
            <div class="flex items-center">
                <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-white cursor-pointer"></span>
                </div>
                <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-white cursor-pointer"></span>
                </div>
            </div>
            <div class="text-center text-white font-bold">{{ title }}</div>
        </div>
        <div class="px-8">
            <slot/>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
  }
})
</script>