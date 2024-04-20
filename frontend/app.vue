<template>
  <div>
    <!-- NuxtPage는 페이지 레이아웃을 렌더링 하는데 사용됨 pages 폴더 안에 있는?? -->
    <NuxtPage />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>