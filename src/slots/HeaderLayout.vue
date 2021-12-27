<template>
  <header>
    <slot />
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style lang="scss">
header {
  position: sticky;
  top: 0;
  width: 100%;

  h1 {
    font-size: 32px;
    padding: 20px 15px 15px;
  }
}
</style>
