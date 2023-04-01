<template>
    <!-- ... -->
  </template>
  
  <script>
  import api from '@/services/api';
  
  export default {
    // ...
    methods: {
      // ...
      async generate() {
        const { positivePrompts, negativePrompts } = this;
        const result = await api.generatePrompt(positivePrompts, negativePrompts);
        this.generatedContent = result.generatedContent;
        // 在这里处理生成结果，例如将结果显示在弹窗中
      },
    },
  };
  </script>
  
 
    <style scoped>
.modal-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  margin: auto;
}
.modal-title {
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 20px;
}
.generated-content {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  min-height: 200px;
  font-family: monospace;
  font-size: 0.9em;
  white-space: pre-wrap;
  background-color: #f9f9f9;
}


  </style>
  