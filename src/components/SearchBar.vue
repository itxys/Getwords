<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchText"
        placeholder="搜索提示词"
        @input="search"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchText: "",
      };
    },
    methods: {
      search() {
        this.$emit("search", this.searchText);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  input {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  