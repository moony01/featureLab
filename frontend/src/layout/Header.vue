<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        Title
      </q-toolbar-title>

    </q-toolbar>

    <q-tabs align="left">
      <q-route-tab to="/moony" label="한문희" />
      <q-route-tab to="/page2" label="Page Two" />
    </q-tabs>
  </q-header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>