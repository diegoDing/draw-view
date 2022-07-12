<script lang="ts" setup>
import config from '../config/useComponents'
import { reactive } from 'vue'

const componentList = reactive(config)
const handleDrop = (e: any) => {
  console.log(e, 'handleDrop')
}
const handleDragenter = (e: any) => {
  console.log(e, 'handleDragenter')
}
const handleDragover = (e: any) => {
  console.log(e, 'handleDragover')
}
</script>
<template>
  <div class="form-component-list">
    <div
      class="component-wrapper"
      v-for="item in componentList"
      :key="item.component"
      draggable="true"
      :data-component-name="item.component"
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
