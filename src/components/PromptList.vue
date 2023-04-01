<template>
    <div>
      <search-bar @search="search" />
      <div class="prompt-list">
        <prompt-item
          v-for="(prompt, index) in filteredPrompts"
          :key="index"
          :prompt="prompt"
          @addToPositive="addToPositive"
          @addToNegative="addToNegative"
        />
      </div>
    </div>
  </template>
  
  <script>
  import PromptItem from "./PromptItem.vue";
  import SearchBar from "./SearchBar.vue";
  
  export default {
    components: {
      PromptItem,
      SearchBar,
    },
    data() {
      return {
        prompts: [
          // 示例数据，您可以根据需要替换这些数据
          {
            title: "女性角色",
            positive: ["female character", "woman", "girl"],
            negative: ["male character", "man", "boy"],
          },
          {
            title: "男性角色",
            positive: ["male character", "man", "boy"],
            negative: ["female character", "woman", "girl"],
          },
        ],
        searchText: "",
      };
    },
    computed: {
      filteredPrompts() {
        if (!this.searchText) {
          return this.prompts;
        }
        const lowerSearchText = this.searchText.toLowerCase();
        return this.prompts.filter((prompt) =>
          prompt.title.toLowerCase().includes(lowerSearchText)
        );
      },
    },
    methods: {
      addToPositive(promptIndex, positiveIndex) {
        this.$emit("addToPositive", {
          prompt: this.prompts[promptIndex],
          index: positiveIndex,
        });
      },
      addToNegative(promptIndex, negativeIndex) {
        this.$emit("addToNegative", {
          prompt: this.prompts[promptIndex],
          index: negativeIndex,
        });
      },
      search(searchText) {
        this.searchText = searchText;
      },
    },
  };
  </script>
  
  <style scoped>
  .prompt-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
  </style>
  