<template>
  <div class="content-container">
    <MyNav />
    <main>
      <router-view />
    </main>
  </div>
  
</template>

<script setup lang="ts">
import MyNav from './Nav/MyNav.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped>
.content-container {
  height: 85vh;
  margin: 0;
}

.custom-nav {
  box-shadow: 0 2px 3px black;
}

</style>