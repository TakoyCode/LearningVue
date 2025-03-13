<script setup>
// import jobData from '@/jobs.json';
import JobListing from './JobListing.vue';
import { ref, reactive, defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';

defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
});

// ref() can take object or primitives.
// Has a .value property for reassigning
// const jobs = ref([]);

// reactive() only takes object.
// It does not take primitives like strings, numbers and booleans.
// It usese 'ref()' under the hood.
// Doesn't use .value and it can't be reassigned
const state = reactive({ jobs: [], isLoading: true });

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/jobs');
    state.jobs = response.data;
    // ref() way - jobs.value = response.data;
  } catch (error) {
    console.error('Error fetching jobs', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <!-- Show loading spinner while loading is true -->
      <div v-if="state.isLoading" class="text-center py-6">
        <PulseLoader />
      </div>
      <!-- Show job listings after done loading -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobListing
          v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
          :key="job.id"
          :job="job"
        />
      </div>
    </div>
  </section>
  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/jobs"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</RouterLink
    >
  </section>
</template>
