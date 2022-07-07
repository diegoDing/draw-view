<script setup lang="ts">
import {NButton} from 'naive-ui'
import {ButtonProps} from 'naive-ui/lib/button'
import {defineProps} from "vue";

defineProps<{
  inputProps: {
    type:ButtonProps,
    default:()=>{},
    required:false
  },
}>()
const emits=defineEmits<{
  (e:'click'):void
}>()
const events={
  click:()=>emits('click')
}
</script>
<template>
  <n-button v-bind="inputProps" v-on="events"  >
    <slot></slot>
  </n-button>
</template>

