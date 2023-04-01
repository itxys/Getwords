<template>
    <div class="tree-nav">
      <ul>
        <tree-nav-item
          v-for="(item, index) in items"
          :key="index"
          :item="item"
          @itemSelected="itemSelected"
        />
      </ul>
    </div>
  </template>
  
  <script>
  import TreeNavItem from "./TreeNavItem.vue";
  
  export default {
    components: {
      TreeNavItem,
    },
    props: {
      items: {
        type: Array,
        default: () => [],
      },
    },
    methods: {
      itemSelected(item) {
        this.$emit("itemSelected", item);
      },
    },
  };
  </script>
  
  <style scoped>
  .tree-nav {
    padding: 0;
    margin: 0;
  }
  </style>
  