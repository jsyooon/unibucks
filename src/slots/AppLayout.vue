<template>
  <div class="content">
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style scoped lang="scss">
@import '@/scss/utils/_variables';

.content {
  position: relative;
  min-height: calc(100vh - $toolbar-height);
}
</style>
