<template>
  <div class="">
    <div class="pb-2">
      <h3 class="h3 title">{{ title }}</h3>
    </div>

    <ol class="timeline-list">
      <li 
        v-for="(item, index) in timelineData" 
        :key="index"
        class="timeline-item"
      >
        <h4 class="timeline-item-title">{{ item.title }}</h4>
        <span>{{ item.period }}</span>
      </li>
    </ol>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Education'
  },
  timelineData: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.timeline { 
  margin-bottom: 30px; 
}

.timeline .title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.h3.title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #942626;
}

.timeline-list {
  font-size: 14px;
  margin-left: 45px;
  list-style: none;
  padding: 0;
  position: relative;
}

/* Main vertical line */
.timeline-list::before {
  content: "";
  position: absolute;
  top: 0;
  left: -30px;
  width: 2px;
  height: 100%;
  background: #202020;
}

.timeline-item { 
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 30px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item-title {
  font-size: 14px;
  line-height: 1.3;
  margin-bottom: 7px;
  font-weight: 600;
  color: #000;
}

.timeline-list span {
  color: #ffdb70;
  font-weight: 400;
  line-height: 1.6;
  font-size: 12px;
  display: block;
  margin-bottom: 5px;
}

/* Circle dots */
.timeline-item::before {
  content: "";
  position: absolute;
  top: 2px;
  left: -33px;
  height: 8px;
  width: 8px;
  background: linear-gradient(to right, #ffdb70, #ffa500);
  border-radius: 50%;
  box-shadow: 0 0 0 3px #202020;
  z-index: 1;
}

.timeline-text {
  color: #666;
  font-weight: 300;
  line-height: 1.6;
  margin-top: 5px;
  font-size: 13px;
}
</style>