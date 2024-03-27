<template>
  <div class="main">
    <TheHeader />
    <section class="main-container">
      <slot />
    </section>
    <theFooter />
  </div>
</template>

<style scoped>
.mainLayout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>