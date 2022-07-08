import {useStore} from 'vuex'
import {nanoid} from "nanoid";
import {ContextMenu, Menu} from "../modal/ContextMenu";

const store=useStore()
interface State{
    contextMenu:ContextMenu,
    menu:Menu[]
}
const state={
    contextMenu: {
        x: 0,
        y: 0,
        show: false,
        data: undefined,
        index:undefined
    },
    menu:[
        {
            key:nanoid(),
            text:'删除',
            value:'delete',
            handle:()=>{
                console.log(store)
            }
        },
        {
            key:nanoid(),
            text:'置顶',
            value:'top',
            handle:()=>{
                console.log('置顶')
            }
        },
        {
            key:nanoid(),
            text:'置底',
            value:'bottom',
            handle:()=>{
                console.log('置底')
            }
        }
    ]
}
const getters={
    getMenus(state:State){
        return state.menu
    },
    getContextMenu(state:State){
        return state.contextMenu
    }
}
const mutations={
    setContextMenu(state:State,data:ContextMenu){
        state.contextMenu=data
    },
    hideContextMenu(state:State){
        state.contextMenu={x:0,y:0,show:false,data:undefined,index:undefined}
    },
}
const actions={
    delete(){
        console.log('dasdas',this)
    }
}
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
