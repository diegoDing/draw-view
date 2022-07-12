<template>
  <div id="v-context-menu" :style="state.contextMenuStyle">
    <div v-for="item in state.menus" :key="item.key" @click="item.handle">
      {{ item.text }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, reactive } from 'vue';
import { ContextMenuStyle, Menus } from './index';

declare interface State {
  menus: Menus[]
  contextMenuStyle: ContextMenuStyle | {}
}
declare interface Props {
  menus: Menus[]
  style: ContextMenuStyle | {}
}
const props = defineProps<Props>();
const state = reactive<State>({
  menus: props.menus,
  contextMenuStyle: props.style,
});
onMounted(() => {
  document.addEventListener('click', () => {});
});
</script>

<style scoped>
#v-context-menu {
  position: absolute;

  background: #ffff;
  z-index: 10;
  display: none;
  font-size: 14px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  border-radius: 5px;
}
.context-menu > div {
  width: 80px;
  text-align: center;
  padding: 2px 5px;
  cursor: pointer;
  font-size: 12px;
}
.context-menu > div:hover {
  background: #0071f5;
  color: white;
}
</style>
