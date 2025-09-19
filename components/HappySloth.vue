<template>
    <div class="bg-firebrick shadow-2xl rounded-lg group">
        <div class="flex items-center p-3 w-full bg-bulgarian-rose rounded-t-lg">
            <div class="flex items-center">
                <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-gray-400 group-hover:bg-red-500 transition-colors duration-200"></span>
                </div>
                <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-gray-400 group-hover:bg-yellow-500 transition-colors duration-200"></span>
                </div>
                <div class="px-1">
                <span class="w-4 h-4 rounded-full inline-block bg-gray-400 group-hover:bg-green-500 transition-colors duration-200"></span>
                </div>
            </div>
            <div class="flex items-center justify-center flex-1 mr-20">
                <p class="text-white text-md font-semibold">
                    {{ title }}
                </p>
            </div>
        </div>
        <div class="p-4 text-white">
            <slot/>
        </div>
    </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  }
})
</script>