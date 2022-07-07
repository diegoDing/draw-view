<script lang="ts" setup>
import {computed, onMounted} from 'vue'
import useDraggable, {UseDraggableEventData} from "../hooks/useDraggable";
import {nanoid} from "nanoid";
import config from '../config/useComponents';
import {useStore} from "vuex";
import {ComponentData} from "../modal/Component";

const canvasWidth:number=420
const canvasHeight:number=800
const store=useStore()

onMounted(()=>{
  const {registerEvents}=useDraggable()
  registerEvents({
    handleMoveToContainer:addComponent
  },'canvas')
})
function addComponent(data:UseDraggableEventData){
  const {target,pageX,pageY}=data
  if (target?.dataset.componentName){
    const componentName=target?.dataset.componentName
    const component:any=config.find(item=>item.component===target?.dataset.componentName)
    let componentData:ComponentData={
      componentName,
      style:{
        left:pageX,
        top:pageY
      },
      key:componentName+nanoid(8),
      label:component.label
    }
    console.log('assda')
    store.commit('addComponentsData',componentData)
  }
}
const components=computed(()=>store.state.componentsData)
function handleMouseDown(e:MouseEvent,item:ComponentData) {
  e.stopPropagation()

  const pos:any = item.style
  let boxWidth:number=0;
  let boxHeight:number=0
  if (e.target instanceof HTMLElement){
    if (e.target.parentElement){
      boxHeight=e?.target?.parentElement?.clientHeight
      boxWidth=e?.target?.parentElement?.clientWidth
    }
  }

  const startY = e.clientY
  const startX = e.clientX
  // 如果直接修改属性，值的类型会变为字符串，所以要转为数值型
  const startTop = Number(pos.top)
  const startLeft = Number(pos.left)

  const move = (moveEvent:any) => {
    const currX = moveEvent.clientX
    const currY = moveEvent.clientY
    pos.top = currY - startY + startTop
    pos.left = currX - startX + startLeft
    if (pos.top<0){
      pos.top=0
    }else if(pos.top+boxHeight>canvasHeight){
      pos.top=canvasHeight-boxHeight
    }
    if (pos.left<0){
      pos.left=0
    }else if(pos.left+boxWidth>canvasWidth){
      pos.left=canvasWidth-boxWidth
    }
    item.style=pos
  }

  const up = () => {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', up)
  }

  document.addEventListener('mousemove', move)
  document.addEventListener('mouseup', up)
}
function componentStyle(item:ComponentData){
  return {
    left:item.style.left+'px',
    top:item.style.top+'px'
  }
}

function setContextMenuData(event:any,index:number){
  if (event){
    const x=event.clientX
    const y=event.clientY
    console.log(event,index)
    store.commit('setContextMenu',{x,y,show:true})
  }
}
const canvasComputed=computed(()=>{
  return {
    width:canvasWidth+'px',
    height:canvasHeight+'px',
    top:-canvasHeight/4+'px',
    left:-canvasWidth/2+'px'
  }
})

</script>
<template>
  <div class="canvas-wrapper">
    <div class="canvas-background"></div>
    <div class="canvas-content" :style="canvasComputed">
      <div class="component-wrapper"
           :class="item.key"
           :key="item.key"
           v-for="(item,index) in components"
           :zIndex="index"
           :style="componentStyle(item)"
           v-ContextMenu
           @contextmenu.prevent="(e)=>setContextMenuData(e,index)"
      >
        <span>{{index}}</span>
        <component :is="item.componentName" @mousedown.stop="(e)=>handleMouseDown(e,item)">{{ item.label }}</component>
      </div>
    </div>
  </div>
</template>

<style scoped>
.component-wrapper{
  position: absolute;
  box-sizing: content-box;
  margin: 0;
  border: 1px solid #000000;
  user-select:none;
}
.component-wrapper:hover{
  border: 1px solid #7d8694;
}
.canvas-wrapper{
  position: relative;
  overflow: hidden;
  flex:6
}
.canvas-content{
  width: 320px;
  height: 600px;
  background: white;
  position: absolute;
  z-index: 2;
  box-shadow: 0 0 8px hsl(0deg 0% 43% / 45%);
  transform: translateX(calc(100% + 160px )) translateY(calc(50% - 150px));
}
.canvas-background{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image:
      linear-gradient(90deg, #ccc 5%,transparent 0),
      linear-gradient(#ccc 5%, transparent 0);
  background-size: 15px 15px;
  background-repeat: repeat;
  z-index: 1;
}

</style>
