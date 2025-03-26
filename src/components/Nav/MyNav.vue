<template>
    
    <nav class="custom-nav flex justify-between items-center px-8 py-4 bg-gray-800 text-white shadow-sm">
      <div>
        <h1>
          <RouterLink to="/">My Apps</RouterLink>
        </h1>
      </div>
      <div>
        <ul class="flex gap-5 text-sm">
          <li><a href="">Github</a></li>
          <li><a href="">Ideas</a></li>
          <li><a href="">About Me</a></li>
          <li><a href="">Whatever</a></li>
        </ul>
      </div>
    </nav>
    <header class="sub-nav bg-gray-600 h-12">
      <ul class="flex justify-center items-center gap-5 text-sm text-white h-12">
        <li>
          <RouterLink to="/todo" active-class="active text-gray-800">To-Do List</RouterLink>
        </li>
        <li>
          <RouterLink to="/weather" active-class="active text-gray-800">Weather</RouterLink>
        </li>
        <li>
          <RouterLink to="/notes" active-class="active text-gray-800">Notes</RouterLink>
        </li>
        <li>
          <RouterLink to="/news/football" active-class="active text-gray-800">Football News</RouterLink>
        </li>
      </ul>
    </header>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style scoped>
.active {
  font-weight: bold;
}

</style>
