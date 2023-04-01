<template>
    <div class="prompt-actions">
      <button @click="addToPositive">添加到正向</button>
      <button @click="addToNegative">添加到负向</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['prompt'],
    methods: {
      addToPositive() {
        this.$emit('add-to-positive', this.prompt);
      },
      addToNegative() {
        this.$emit('add-to-negative', this.prompt);
      },
    },
  };
  </script>
  
  <style scoped>
  .prompt-actions {
    display: flex;
  }
  </style>
  