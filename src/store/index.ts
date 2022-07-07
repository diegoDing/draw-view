import {createStore} from "vuex";
import {ComponentData} from "../modal/Component";
import {ContextMenu} from "../modal/ContextMenu";

interface State{
    contextMenu:ContextMenu,
    componentsData:ComponentData[]
}
export const store=createStore<State>({
    state(){
        return{
            contextMenu:{
                x:0,
                y:0,
                show:false
            },
            componentsData:[]
        }
    },
    getters:{
      getContextMenu(state){
          return state.contextMenu
      }
    },
    mutations:{
        setContextMenu(state,data){
            state.contextMenu=data
        },
        hideContextMenu(state){
            state.contextMenu={x:0,y:0,show:false}
        },
        addComponentsData(state,data:ComponentData){
           state.componentsData.push(data)
        }
    }

})
