import {App} from 'vue'

export function setContextMenuDirective(app: App<Element>){
    app.directive('ContextMenu',{
        mounted(el:HTMLElement){
            console.log(el,'el')
        }
    })
}
