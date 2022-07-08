<template>
  <div class="context-menu" :style="contextMenuStyle">
    <div v-for="item in menus" :key="item.key" @click="item.handle">{{item.text}}</div>
  </div>
</template>

<script lang="ts" setup>
import {computed, watchEffect} from "vue";
import {useStore} from "../store";


const store=useStore()
const menus=computed(()=>store.getters["contextMenu/getMenus"])
const contextMenuStyle=computed(()=>{
  const{x,y,show}=store.getters["contextMenu/getContextMenu"]
  return {
    left:x+'px',
    top:y+'px',
    display:show?'block':'none'
  }
})
watchEffect(()=>{
  console.log('contextMenu改变了',contextMenuStyle)
})
</script>

<style scoped>
.context-menu{
  position: absolute;

  background: #ffff;
  z-index: 10;
  display: none;
  font-size: 14px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 5px;
}
.context-menu>div{
  width: 60px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}
.context-menu>div:hover{
  background: rgba(0,0,0,0.1);
}
</style>
