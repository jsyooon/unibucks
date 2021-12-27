<template>
  <AppLayout>
    <router-view />
  </AppLayout>
  <Toolbar />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AppLayout from '@/slots/AppLayout.vue';
import Toolbar from '@/components/Toolbar.vue';

export default defineComponent({
  components: {
    AppLayout,
    Toolbar,
  },
});
</script>

<style lang="scss">
@import '@/scss/reset';
@import '@/scss/layout';
</style>
