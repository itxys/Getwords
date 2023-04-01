<template>
    <div class="left-menu">
      <el-tree :data="data" :expand-on-click-node="false" :default-expanded-keys="[defaultExpandedKeys]" :highlight-current="true" :props="defaultProps" class="filter-tree"></el-tree>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [{
          label: '角色',
          children: [{
            label: '女性',
            children: [{
              label: '动漫'
            }, {
              label: '现实生活'
            }]
          }, {
            label: '男性',
            children: [{
              label: '动漫'
            }, {
              label: '现实生活'
            }]
          }]
        }, {
          label: '场景',
          children: [{
            label: '室内'
          }, {
            label: '室外'
          }]
        }, {
          label: 'UI',
          children: [{
            label: 'UI设计'
          }, {
            label: '动态效果'
          }]
        }],
        defaultExpandedKeys: ['角色', '场景', 'UI'],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  }
  </script>
  
  <style scoped>
  .left-menu {
    height: 100%;
    width: 200px;
    padding-right: 10px;
  }
  .filter-tree {
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #e2e2e2;
    overflow-y: scroll;
  }
  </style>
  