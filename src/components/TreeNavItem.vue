<template>
    <li>
      <div @click="selectItem">{{ item.name }}</div>
      <tree-nav
        v-if="item.children && item.children.length"
        :items="item.children"
        @itemSelected="itemSelected"
      />
    </li>
  </template>
  
  <script>
  import TreeNav from "./TreeNav.vue";
  
  export default {
    components: {
      TreeNav,
    },
    props: {
      item: {
        type: Object,
        default: () => ({}),
      },
    },
    methods: {
      selectItem() {
        this.$emit("itemSelected", this.item);
      },
      itemSelected(item) {
        this.$emit("itemSelected", item);
      },
    },
  };
  </script>
  
  <style scoped>
  li {
    list-style: none;
    cursor: pointer;
  }
  
  li div {
    padding: 5px 10px;
  }
  </style>
  