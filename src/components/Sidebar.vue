<template>
    <div class="sidebar">
      <h3>分类</h3>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to="{ name: 'category', params: { id: category.id } }">
            {{ category.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          { id: 1, name: '角色' },
          { id: 2, name: '场景' },
          { id: 3, name: 'UI' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .sidebar {
    /* 添加样式 */
  }
  </style>
  