<template>
    <div>
      <!-- 添加 prompt 的表单 -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        prompt: "", // 添加的 prompt
      };
    },
    methods: {
      // 提交添加 prompt 的表单
      submit() {
        this.$emit("submit", this.prompt);
        this.prompt = ""; // 清空表单
      },
    },
  };
  </script>
  