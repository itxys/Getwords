<template>
  <div id="app">
    <Header />
    <div class="main">
      <Sidebar />
      <div class="content">
        <Breadcrumb />
        <PromptList />
      </div>
    </div>
    <Footer />
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
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import Breadcrumb from "./components/Breadcrumb.vue";
import PromptList from "./components/PromptList.vue";
import Footer from "./components/Footer.vue";
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
    Header,
    Sidebar,
    Breadcrumb,
    PromptList,
    Footer,
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  display: flex;
  flex-direction: row;
  margin: 1rem;
}

.content {
  flex-grow: 1;
  margin-left: 1rem;
}
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
<router-view />
