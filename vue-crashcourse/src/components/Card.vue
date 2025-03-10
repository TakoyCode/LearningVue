<template>
  <div :class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  bg: {
    type: String,
    default: 'bg-gray-100',
  },
});
</script>

<!-- Options API -->
<!-- <script>
export default {
  props: {
    bg: {
      type: String,
      default: 'bg-gray-100',
    },
  },
};
</script> -->
