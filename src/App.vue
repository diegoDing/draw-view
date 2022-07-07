<script setup lang="ts">

import FormComponentList from "./components/FormComponentList.vue";
import VCanvas from "./components/VCanvas.vue";
import {onBeforeUnmount, onMounted} from 'vue'
import useDraggable from "./hooks/useDraggable";
import VContextMenu from "./components/VContextMenu.vue";
import {useStore} from "vuex";

const {mountedDraggableEvents,destroyDraggableEvents}=useDraggable()
const store=useStore()
onMounted(()=>{
  mountedDraggableEvents()
  document.addEventListener('click',()=>{
    store.commit('hideContextMenu')
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
  margin: 0px;
  padding: 0px;
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
