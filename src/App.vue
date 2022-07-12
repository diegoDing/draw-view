<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import FormComponentList from './components/FormComponentList.vue';
import VCanvas from './components/VCanvas.vue';
import useDraggable from './hooks/useDraggable';

const { mountedDraggableEvents, destroyDraggableEvents } = useDraggable();

onMounted(() => {
  mountedDraggableEvents();
  // VContextMenu({menus:[{text:'测试',key:nanoid(),handle:()=>{
  //       console.log('测试')
  // }}],style:{}})
});
onBeforeUnmount(() => {
  destroyDraggableEvents();
});
</script>

<template>
  <div class="container">
    <form-component-list class="form-component-list" />
    <v-canvas />
    <div class="component-attribute"></div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
.form-component-list {
}
.container {
  display: flex;
  width: 100%;
  height: 100%;
}
.component-attribute {
  flex: 2;
  background: #f6f8fa;
}
#app {
  width: 100vw;
  height: 100vh;
  background: #f6f8fa;
}
</style>
