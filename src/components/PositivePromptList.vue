<template>
    <div>
      <!-- 正向提示的界面布局 -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'PositivePromptList',
    data() {
      return {
        prompts: [], // 用于存储从后端获取的正向提示数据
      }
    },
    methods: {
      // 从后端获取正向提示数据的方法
      fetchPrompts() {
        axios.get('/api/positive_prompts')
          .then(response => {
            this.prompts = response.data;
          })
          .catch(error => {
            console.log(error);
          });
      },
      // 将英文提示添加到正向提示序列的方法
      addToPositivePrompt() {
        // 实现添加逻辑
      },
      // 将英文提示添加到负向提示序列的方法
      addToNegativePrompt() {
        // 实现添加逻辑
      },
      // 删除正向提示序列中的某一项的方法
      deletePositivePrompt() {
        // 实现删除逻辑
      },
      // 删除负向提示序列中的某一项的方法
      deleteNegativePrompt() {
        // 实现删除逻辑
      },
      // 将某一项从负向提示序列移动到正向提示序列的方法
      moveToPositivePrompt() {
        // 实现移动逻辑
      },
      // 将某一项从正向提示序列移动到负向提示序列的方法
      moveToNegativePrompt() {
        // 实现移动逻辑
      },
    },
    created() {
      this.fetchPrompts(); // 在组件创建时调用fetchPrompts方法，从后端获取正向提示数据
    },
  }
  </script>
  
  <style scoped>
  /* 样式表 */
  </style>
  