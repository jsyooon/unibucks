<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :width="width"
    :height="height"
  >
    <slot />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    viewBox: { type: String, default: '0 0 24 24' },
    width: { type: String, default: '24px' },
    height: { type: String, default: '24px' },
  },
});
</script>
