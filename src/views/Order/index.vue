<template>
  <header-layout>
    <h1>Order</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/order/all/beverage">전체 메뉴</router-link>
        </li>
        <li>
          <router-link to="/order/my">나만의 메뉴</router-link>
        </li>
        <li>
          <router-link to="/order/cake">홀케이크 예약</router-link>
        </li>
      </ul>
    </nav>
  </header-layout>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import HeaderLayout from '@/slots/HeaderLayout.vue';

export default defineComponent({
  components: {
    HeaderLayout,
  },
});
</script>
<style scoped lang="scss">
nav {
  @import '@/scss/utils/variables';

  border-bottom: 1px solid #ccc;

  ul {
    display: flex;

    a {
      $height: 48px;

      position: relative;
      display: block;
      height: $height;
      line-height: $height;
      color: #888;
      padding: 0 15px;
    }

    .router-link-active {
      color: #333;

      &:after {
        content: '';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 2px;
        background: $key-color;
      }
    }
  }
}
</style>
