<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <h1>AI 绘画提示词生成器</h1>
      </div>
      <div class="main">
        <tree-nav :items="navItems" @itemSelected="navItemSelected" />
        <div class="middle-section">
          <div class="middle-top">
            <div class="breadcrumbs">角色 > 女性 > 动漫</div>
            <search-bar @search="search" />
          </div>
          <prompt-list
            :prompts="filteredPrompts"
            @addToPositive="addToPositive"
            @addToNegative="addToNegative"
          />
        </div>
        <prompt-manager
          :positivePrompts="positivePrompts"
          :negativePrompts="negativePrompts"
          @removePositive="removePositive"
          @removeNegative="removeNegative"
          @movePositiveToNegative="movePositiveToNegative"
          @moveNegativeToPositive="moveNegativeToPositive"
          @clearAll="clearAll"
          @generate="generate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PromptList from "./components/PromptList.vue";
import PromptManager from "./components/PromptManager.vue";
import TreeNav from "./components/TreeNav.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: {
    PromptList,
    PromptManager,
    TreeNav,
    SearchBar,
  },
  data() {
    return {
      positivePrompts: [],
      negativePrompts: [],
      navItems: [
        // ...
      ],
      prompts: [
        // 提示词列表
      ],
      filteredPrompts: [],
    };
  },
  methods: {
    // ...
    search(text) {
      this.filteredPrompts = this.prompts.filter((prompt) =>
        prompt.text.includes(text)
      );
    },
  },
};
</script>

<style>
/* ... */
.middle-section {
  display: flex;
  flex-direction: column;
}

.middle-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.breadcrumbs {
  font-size: 14px;
  color: #666;
}
</style>
<script>
// ...
import api from "./services/api";

export default {
  // ...
  created() {
    api.getPrompts().then((response) => {
      this.prompts = response.data;
      this.filteredPrompts = response.data;
    });
  },
};
</script>
