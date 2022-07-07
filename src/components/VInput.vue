<script setup lang="ts">
import {NInput} from 'naive-ui'
import {InputProps} from 'naive-ui/lib/input'
import {defineProps} from "vue";

defineProps<{
  inputProps: {
    type:InputProps,
    default:()=>{}
  },

}>()
</script>
<template>
  <n-input v-bind="inputProps" />
</template>

