```html
<template>
  <div class="selected-prompts">
    <div class="positive">
      <h3>正向 prompt</h3>
      <ul>
        <li v-for="(prompt, index) in positivePrompts" :key="index">
          {{ prompt }}
        </li>
      </ul>
    </div>
    <div class="negative">
      <h3>负向 prompt</h3>
      <ul>
        <li v-for="(prompt, index) in negativePrompts" :key="index">
          {{ prompt }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['positivePrompts', 'negativePrompts'],
};
</script>

<style scoped>
.selected-prompts {
  display: flex;
  justify-content: space-between;
}
</style>