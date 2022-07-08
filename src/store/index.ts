import {InjectionKey} from 'vue'
import {createStore, Store, useStore as baseUseStore} from "vuex";
import {ComponentData} from "../modal/Component";
import contextMenuStore from "./ContextMenu";
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()
interface State{
    componentsData:ComponentData[]
}
export const store=createStore<State>({
    state(){
        return{
            componentsData:[]
        }
    },
    actions:{

    },
    mutations:{
        addComponentsData(state,data:ComponentData){
           state.componentsData.push(data)
        },
        deleteComponentsData(state,index:number){
            state.componentsData=state.componentsData.filter((item,i)=>i!==index)
        }
    },
    modules:{
        contextMenu:contextMenuStore
    }
})
export function useStore () {
    return baseUseStore(key)
}
