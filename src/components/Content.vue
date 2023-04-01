<template>
  <!-- ... -->
</template>

<script>
import axios from '@/services/api';

export default {
  // ...
  mounted() {
    this.loadPrompts();
  },
  methods: {
    // ...
    async loadPrompts() {
      try {
        const response = await axios.get('prompts');
        this.prompts = response.data;
      } catch (error) {
        console.error('Error fetching prompts:', error);
      }
    },
  },
};
</script>

<style scoped>
  /* ... */
</style>
