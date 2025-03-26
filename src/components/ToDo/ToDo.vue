<template>
  <div class="content-container flex items-start justify-evenly gap-20 pt-10">
    
    <div class="w-1/3 flex flex-col">
      <form @submit.prevent="addNewTask" class="flex gap-2">
        <input type="text" name="todo" placeholder="Add a new task" class="border w-100 border-gray-900 p-1 rounded-lg">      
        <button type="submit" class="bg-gray-900 text-white w-25 p-1 rounded-lg">Add</button>
      </form>
    </div>

    <div class="h-130 p-5 border-gray-400 rounded-lg shadow-2xl w-1/3">
    <div>
      <ul v-if="tasks.length" class="task-ul">
        <li v-for="task in tasks" :key="task.id" class="task-li">
          <div class="flex items-center justify-between ">
            <span class="task-text">
              {{ task.title }}
            </span>
            <div class="flex gap-2">
              <button class="bg-gray-300 rounded-lg px-4 text-base font-bold">Edit</button>
              <button class="bg-red-300 rounded-lg px-4 text-base font-bold">Delete</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import type { Task } from './types'

const tasks: Task[] = reactive(JSON.parse(localStorage.getItem('tasks') || '[]'))

//Globals
let idCounter = 0

const addNewTask = (event: Event) => {
  const input = new FormData(event.target as HTMLFormElement).get('todo') as string
  (event.target as HTMLFormElement).reset()
  const newTask: Task = {
    id: idCounter++,
    title: input,
    completed: false
  }
  tasks.push(newTask)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}



</script>

<style scoped>

.content-container {
  height: 85vh;
  margin: 0;
  background-color: #c7c9c72b;
}

ul.task-ul {
  list-style-type: disc;
}

li.task-li {
  border-bottom: 1px solid #636363;
  border-radius: 5px;
}

.task-text {
  font-size: 1rem;
  font-weight: 500;
  padding: .3rem;
  border-radius: 5px; 
}
.task-text:hover {
  background-color: #c3c3c336;
  box-shadow: 0 1px 4px #636363;
  cursor: pointer;
  transition: ease-in .05s;
}


</style>