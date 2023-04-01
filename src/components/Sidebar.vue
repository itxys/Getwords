<template>
  <div class="sidebar">
    <h3>导航菜单</h3>
    <ul>
      <li v-for="item in menuItems" :key="item.id">
        <router-link :to="item.path">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      menuItems: [
        { id: 1, title: "角色", path: "/roles" },
        { id: 2, title: "场景", path: "/scenes" },
        { id: 3, title: "UI", path: "/ui" },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #f8f9fa;
  padding: 1rem;
}

.sidebar h3 {
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 0.5rem;
}

.sidebar a {
  text-decoration: none;
  color: #333;
}
</style>
