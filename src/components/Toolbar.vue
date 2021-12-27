<template>
  <nav class="toolbar">
    <ul>
      <li>
        <router-link to="/">
          <svg-slot :width="size" :height="size">
            <path
              d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"
            ></path
          ></svg-slot>
          <span>Home</span>
        </router-link>
      </li>
      <li>
        <router-link to="/order">
          <svg-slot :width="size" :height="size">
            <path
              d="M19 5h-1V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v9a4 4 0 0 0 4 4h6c1.858 0 3.411-1.279 3.858-3H19a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm1 6a1 1 0 0 1-1 1h-1V7h1a1 1 0 0 1 1 1v3zm-2 8H3c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3h-2z"
            ></path></svg-slot
          ><span>Order</span></router-link
        >
      </li>
      <li>
        <router-link to="/other">
          <svg-slot :width="size" :height="size">
            <path
              d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
            ></path
          ></svg-slot>
          <span>Other</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import SvgSlot from '@/slots/svg.vue';

export default defineComponent({
  components: { SvgSlot },
  setup() {
    return {
      size: '22px',
      color: '#666',
    };
  },
});
</script>

<style scoped lang="scss">
@import '@/scss/utils/_variables';
.toolbar {
  position: fixed;
  left: 50%;
  bottom: 0;
  width: $max-width;
  height: $toolbar-height;
  background: #f1f1f1;
  margin-left: $max-width * -0.5;

  ul {
    display: flex;
    max-width: 100vw;
    height: 100%;
    justify-content: space-between;
    margin: 0 auto;

    li {
      flex: 1;
      height: 100%;
      text-align: center;
    }

    .router-link-active {
      color: $key-color;

      svg {
        fill: $key-color;
      }
    }

    a {
      display: inline-flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #666;
      font-size: 12px;
    }
    svg {
      fill: #666;
    }
  }
}
</style>
