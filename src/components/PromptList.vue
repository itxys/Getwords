<template>
    <div class="prompt-list">
      <div class="prompt-header">
        <h2>{{ promptHeader }}</h2>
        <input type="text" v-model="searchText" placeholder="搜索prompt">
      </div>
      <div class="prompt-list-wrapper">
        <div class="prompt-card" v-for="prompt in filteredPrompts" :key="prompt.id">
          <div class="prompt-card-content">
            <h3>{{ prompt.text }}</h3>
            <ul>
              <li v-for="(item, index) in prompt.items" :key="index">
                <span>{{ item }}</span>
                <div class="prompt-card-actions">
                  <button @click="addToPositivePrompt(item)">正向</button>
                  <button @click="addToNegativePrompt(item)">负向</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PromptList',
    props: {
      promptHeader: String,
      prompts: Array,
      positivePrompt: Array,
      negativePrompt: Array,
    },
    data() {
      return {
        searchText: '',
      };
    },
    computed: {
      filteredPrompts() {
        if (!this.searchText) {
          return this.prompts;
        }
        return this.prompts.filter((prompt) =>
          prompt.text.toLowerCase().includes(this.searchText.toLowerCase())
        );
      },
    },
    methods: {
      addToPositivePrompt(item) {
        this.$emit('add-to-positive-prompt', item);
      },
      addToNegativePrompt(item) {
        this.$emit('add-to-negative-prompt', item);
      },
    },
  };
  </script>
  
  <style scoped>
  .prompt-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .prompt-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px;
    margin: 20px 0;
  }
  
  .prompt-list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 800px;
  }
  
  .prompt-card {
    width: 300px;
    margin: 10px;
  }
  
  .prompt-card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
  }
  
  .prompt-card-content h3 {
    margin: 0;
    font-size: 18px;
  }
  
  .prompt-card-content ul {
    margin: 10px 0 0 0;
    padding: 0;
    list-style: none;
  }
  
  .prompt-card-content li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    padding: 5px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .prompt-card-content li span {
    flex: 1;
  }
  
  .prompt-card-actions {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .prompt-card-actions button {
    margin: 0 5px;
    background-color: #007bff;
    color: #fff;
    border: none
  }