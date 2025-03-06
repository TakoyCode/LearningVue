<script setup>
import { onMounted, ref } from 'vue';

const name = ref('John Doe');
const status = ref(false);
const statusStr = ref('pending');
const tasks = ref(['Task One', 'Task Two', 'Task Three']);
const link = ref('https=//google.com');
const newTask = ref('');

const toggleStatus = () => {
  status.value = !status.value;
};

const toggleStatusStr = () => {
  if (statusStr.value === 'active') {
    statusStr.value = 'pending';
  } else if (statusStr.value === 'pending') {
    statusStr.value = 'inactive';
  } else {
    statusStr.value = 'active';
  }
};

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (error) {
    console.log('Error fetching tasks');
  }
});

// What we need to do if you don't have "setup" in script tag
// export default {
//  setup() {
//    *Insert functions and variables like above here*
//    return {
//      name,
//      status,
//      statusStr,
//      tasks,
//      link,
//      toggleStatus,
//      toggleStatusStr,
//    };
//   },
// };
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status">User is active</p>
  <p v-else>User is inactive</p>

  <p v-if="statusStr === 'active'">User is active</p>
  <p v-else-if="statusStr === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>Tasks</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>
  <!-- <a v-bind:href="link">Google</a> -->
  <a :href="link">Google</a>

  <br />
  <button v-on:click="toggleStatus">Change Status</button>
  <button @click="toggleStatusStr">Change StatusStr</button>
</template>
