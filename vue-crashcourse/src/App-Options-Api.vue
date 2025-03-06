<script>
// Using Options API
export default {
  data() {
    return {
      name: 'John Doe',
      status: false,
      statusStr: 'pending',
      tasks: ['Task One', 'Task Two', 'Task Three'],
      link: 'https://google.com',
    };
  },
  methods: {
    toggleStatus() {
      this.status = !this.status;
    },
    toggleStatusStr() {
      if (this.statusStr === 'active') {
        this.statusStr = 'pending';
      } else if (this.statusStr === 'pending') {
        this.statusStr = 'inactive';
      } else {
        this.statusStr = 'active';
      }
    },
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
