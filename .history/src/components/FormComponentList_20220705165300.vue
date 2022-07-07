<script lang="ts" setup>
import config from '../config/useComponents';
import {reactive} from 'vue';

const componentList = reactive(config);
const handleDrop = (e: any) => {
  console.log(e, 'handleDrop');
};
const handleDragenter = (e: any) => {
  console.log(e, 'handleDragenter');
};
const handleDragover = (e: any) => {
  console.log(e, 'handleDragover');
};
const handleSelectComponent = (item: any) => {
  componentList.forEach((item: any) => {
    item.isActive = false;
  });
  item.isActive = true;
};
</script>
<template>
  <div class="form-component-list">
    <div
      class="component-wrapper"
      :class="item.isActive ? 'active' : ''"
      v-for="item in componentList"
      :key="item.component"
      :draggable="item.isActive"
      :data-component-name="item.component"
      @click="handleSelectComponent(item)"
    >
      <div>{{ item.label }}</div>
    </div>
  </div>
</template>
<style>
.form-component-list {
  background: #f6f8fa;
  height: 100%;
  flex: 2;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.active {
  border: 1px solid #6ec36e;
}
.component-wrapper {
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: move;
  background: white;
  width: 80px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>
