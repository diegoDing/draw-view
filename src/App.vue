<script setup lang="ts">

import FormComponentList from "./components/FormComponentList.vue";
import VCanvas from "./components/VCanvas.vue";
import {onBeforeUnmount, onMounted} from 'vue'
import useDraggable from "./hooks/useDraggable";
import VContextMenu from "./components/VContextMenu.vue";
import {useStore} from "./store";

const {mountedDraggableEvents,destroyDraggableEvents}=useDraggable()
const store=useStore()
onMounted(()=>{
  mountedDraggableEvents()
  document.addEventListener('click',()=>{
    store.commit('contextMenu/hideContextMenu')
  })
})
onBeforeUnmount(()=>{
  destroyDraggableEvents()
})

</script>

<template>
  <div class="container">
    <form-component-list class="form-component-list"/>
    <v-canvas />
    <div class="component-attribute"></div>
    <v-context-menu/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
.form-component-list{

}
.container{
  display: flex;
  width: 100%;
  height: 100%;
}
.component-attribute{
  flex: 2;
  background: #f6f8fa;
}
#app{
  width: 100vw;
  height: 100vh;
  background: #f6f8fa;
}
</style>
