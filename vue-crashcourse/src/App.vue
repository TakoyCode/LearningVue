<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("John Doe");
    const status = ref(false);
    const statusStr = ref("pending");
    const tasks = ["Task One", "Task Two", "Task Three"];
    const link = "https=//google.com";

    const toggleStatus = () => {
      status = !status;
    };
    const toggleStatusStr = () => {
      if (this.statusStr === "active") {
        statusStr = "pending";
      } else if (statusStr === "pending") {
        statusStr = "inactive";
      } else {
        statusStr = "active";
      }
    };

    return {
      name,
      status,
      statusStr,
      tasks,
      link,
      toggleStatus,
      toggleStatusStr,
    };
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status">User is active</p>
  <p v-else>User is inactive</p>

  <p v-if="statusStr === 'active'">User is active</p>
  <p v-else-if="statusStr === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task }}
    </li>
  </ul>
  <!-- <a v-bind:href="link">Google</a> -->
  <a :href="link">Google</a>

  <br />
  <button v-on:click="toggleStatus">Change Status</button>
  <button @click="toggleStatusStr">Change StatusStr</button>
</template>
